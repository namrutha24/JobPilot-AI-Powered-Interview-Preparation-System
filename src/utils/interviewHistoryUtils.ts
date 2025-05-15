import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

export type Answer = {
    answer: string;
    score: number;
    feedback: string;
};

export type Question = {
    id: number;
    question: string;
    keywords: string[];
    difficulty: string;
    domain: string;
    role: string;
};

export type InterviewResult = {
    answers: Record<string, Answer>;
    questions: Question[];
    overallScore: number;
    timestamp: string;
    domain: string;
    role: string;
    difficulty: string;
};

type DatabaseInterviewHistory = Database['public']['Tables']['interview_history']['Row'];
type InsertDatabaseInterviewHistory = Database['public']['Tables']['interview_history']['Insert'];

function isValidInterviewResult(result: unknown): result is InterviewResult {
    if (!result || typeof result !== 'object') return false;

    const r = result as Record<string, unknown>;

    return (
        typeof r.overallScore === 'number' &&
        typeof r.timestamp === 'string' &&
        typeof r.domain === 'string' &&
        typeof r.role === 'string' &&
        typeof r.difficulty === 'string' &&
        Array.isArray(r.questions) &&
        r.questions.every(q =>
            typeof q === 'object' && q !== null &&
            typeof (q as Question).id === 'number' &&
            typeof (q as Question).question === 'string' &&
            Array.isArray((q as Question).keywords) &&
            typeof (q as Question).difficulty === 'string' &&
            typeof (q as Question).domain === 'string' &&
            typeof (q as Question).role === 'string'
        ) &&
        typeof r.answers === 'object' && r.answers !== null &&
        Object.values(r.answers as Record<string, unknown>).every(a =>
            typeof a === 'object' && a !== null &&
            typeof (a as Answer).answer === 'string' &&
            typeof (a as Answer).score === 'number' &&
            typeof (a as Answer).feedback === 'string'
        )
    );
}

function transformToDbFormat(result: InterviewResult): InsertDatabaseInterviewHistory {
    return {
        user_id: '', // This will be set in saveInterviewHistory
        answers: result.answers,
        questions: result.questions,
        overall_score: result.overallScore,
        timestamp: result.timestamp,
        domain: result.domain,
        role: result.role,
        difficulty: result.difficulty
    };
}

function transformFromDbFormat(dbResult: DatabaseInterviewHistory): InterviewResult {
    return {
        answers: dbResult.answers as Record<string, Answer>,
        questions: dbResult.questions as Question[],
        overallScore: dbResult.overall_score,
        timestamp: dbResult.timestamp,
        domain: dbResult.domain,
        role: dbResult.role,
        difficulty: dbResult.difficulty
    };
}

export async function saveInterviewHistory(userId: string, result: InterviewResult): Promise<void> {
    // Enhanced logging for debugging
    console.log("[saveInterviewHistory] userId:", userId);
    console.log("[saveInterviewHistory] result:", result);

    if (!isValidInterviewResult(result)) {
        console.error("[saveInterviewHistory] Invalid interview result format:", result);
        throw new Error("Invalid interview result format");
    }

    const dbData = transformToDbFormat(result);
    dbData.user_id = userId;

    try {
        // First try to save to localStorage as a backup
        try {
            const history = JSON.parse(localStorage.getItem("interviewHistory") || "[]");
            if (!Array.isArray(history)) {
                throw new Error("Invalid history format in localStorage");
            }
            history.push(result);
            localStorage.setItem("interviewHistory", JSON.stringify(history));
        } catch (e) {
            console.error("[saveInterviewHistory] Error updating localStorage:", e);
            localStorage.setItem("interviewHistory", JSON.stringify([result]));
        }

        // Then try to save to Supabase if user is logged in
        if (userId) {
            const { error } = await supabase
                .from('interview_history')
                .insert(dbData);

            if (error) {
                console.error("[saveInterviewHistory] Supabase insert error:", error);
                // Don't throw here, since we already saved to localStorage
                console.warn("Interview saved to localStorage but failed to save to database");
            }
        }
    } catch (error) {
        console.error("[saveInterviewHistory] Unexpected error:", error);
        // We already saved to localStorage, so we don't need to throw
        // Just log the error and continue
    }
}

export async function loadInterviewHistory(userId: string): Promise<InterviewResult[]> {
    try {
        const { data, error } = await supabase
            .from('interview_history')
            .select('*')
            .eq('user_id', userId)
            .order('timestamp', { ascending: false });

        if (error) throw error;
        if (!data) return [];

        // Transform and validate the data
        const validatedData = data
            .map(item => {
                try {
                    const transformed = transformFromDbFormat(item);
                    return isValidInterviewResult(transformed) ? transformed : null;
                } catch (e) {
                    console.error("Error transforming interview history item:", e);
                    return null;
                }
            })
            .filter((item): item is InterviewResult => item !== null);

        // Update localStorage with the validated data
        localStorage.setItem("interviewHistory", JSON.stringify(validatedData));
        return validatedData;
    } catch (error) {
        console.error("Error loading interview history:", error);
        // Attempt to return local data if available
        try {
            const localData = JSON.parse(localStorage.getItem("interviewHistory") || "[]");
            if (!Array.isArray(localData)) {
                throw new Error("Invalid history format in localStorage");
            }
            return localData.filter(isValidInterviewResult);
        } catch (e) {
            console.error("Error reading localStorage:", e);
            return [];
        }
    }
}

export async function getInterviewStats(userId: string): Promise<{ interviewCount: number; averageScore: number }> {
    try {
        const { data, error } = await supabase
            .from('interview_history')
            .select('overall_score')
            .eq('user_id', userId);

        if (error) throw error;
        if (!data || !Array.isArray(data) || data.length === 0) {
            return { interviewCount: 0, averageScore: 0 };
        }

        const scores = data
            .map(item => typeof item.overall_score === 'number' ? item.overall_score : 0)
            .filter(score => !isNaN(score));

        const averageScore = scores.length > 0
            ? parseFloat((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1))
            : 0;

        return {
            interviewCount: scores.length,
            averageScore
        };
    } catch (error) {
        console.error("Error getting interview stats:", error);
        // Attempt to use local data if available
        try {
            const history = JSON.parse(localStorage.getItem("interviewHistory") || "[]");
            if (!Array.isArray(history)) {
                throw new Error("Invalid history format in localStorage");
            }
            const scores = history
                .filter(isValidInterviewResult)
                .map(item => item.overallScore)
                .filter(score => !isNaN(score));

            const averageScore = scores.length > 0
                ? parseFloat((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1))
                : 0;

            return {
                interviewCount: scores.length,
                averageScore
            };
        } catch (e) {
            console.error("Error reading localStorage:", e);
            return {
                interviewCount: 0,
                averageScore: 0
            };
        }
    }
} 