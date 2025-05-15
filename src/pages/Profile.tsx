import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvailableDomains, getRolesForDomain } from "@/utils/questionUtils";
import { Badge } from "@/components/ui/badge";
import { getInterviewStats } from "@/utils/interviewHistoryUtils";

// Define interfaces for type safety
interface FormData {
  name: string;
  email: string;
  preferredDomain: string;
  preferredRole: string;
  jobTitle: string;
  bio: string;
}

// Domain labels mapping
const domainLabels: Record<string, string> = {
  it: "Information Technology",
  finance: "Finance",
  healthcare: "Healthcare",
  education: "Education",
  management: "Management",
  sales: "Sales",
  engineering: "Engineering",
  consulting: "Consulting"
};

// Role labels mapping
const roleLabels: Record<string, string> = {
  "software-engineer": "Software Engineer",
  "data-scientist": "Data Scientist",
  "product-manager": "Product Manager",
  "ux-designer": "UX Designer",
  "devops-engineer": "DevOps Engineer",
  "financial-analyst": "Financial Analyst",
  "investment-banker": "Investment Banker",
  "risk-manager": "Risk Manager",
  "portfolio-manager": "Portfolio Manager",
  "physician": "Physician",
  "nurse": "Nurse",
  "healthcare-administrator": "Healthcare Administrator",
  "medical-researcher": "Medical Researcher",
  "pharmacist": "Pharmacist",
  "teacher": "Teacher",
  "professor": "Professor",
  "curriculum-developer": "Curriculum Developer",
  "hr-manager": "HR Manager",
  "recruiter": "Recruiter",
  "compensation-analyst": "Compensation Analyst",
  "sales-manager": "Sales Manager",
  "account-executive": "Account Executive",
  "sales-consultant": "Sales Consultant",
  "mechanical-engineer": "Mechanical Engineer",
  "electrical-engineer": "Electrical Engineer",
  "civil-engineer": "Civil Engineer",
  "management-consultant": "Management Consultant",
  "strategy-consultant": "Strategy Consultant",
  "it-consultant": "IT Consultant"
};

// Get domains from questionUtils
const availableDomains = getAvailableDomains();

export default function Profile() {
  const { user, updateUserProfile } = useAuth();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    preferredDomain: "",
    preferredRole: "",
    jobTitle: "",
    bio: "",
  });
  const [availableRoles, setAvailableRoles] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [interviewCount, setInterviewCount] = useState(0);
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.user_metadata?.first_name || "",
        email: user.email || "",
        preferredDomain: user.user_metadata?.preferences?.preferredDomain || "",
        preferredRole: user.user_metadata?.preferences?.preferredRole || "",
        jobTitle: user.user_metadata?.job_title || "",
        bio: user.user_metadata?.bio || "",
      });

      // If there's a preferred domain, set available roles
      if (user.user_metadata?.preferences?.preferredDomain) {
        updateAvailableRoles(user.user_metadata.preferences.preferredDomain);
      }

      // Load interview history from Supabase
      loadInterviewStats();
      setIsLoading(false);
    }
  }, [user]);

  const loadInterviewStats = async () => {
    if (!user) return;

    try {
      const stats = await getInterviewStats(user.id);
      setInterviewCount(stats.interviewCount);
      setAverageScore(stats.averageScore);
    } catch (error) {
      console.error("Error loading interview stats:", error);
      toast.error("Failed to load interview statistics");
    }
  };

  const updateAvailableRoles = (domainId: string) => {
    const roles = getRolesForDomain(domainId);
    setAvailableRoles(roles);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Reset preferred role if domain changes
    if (field === "preferredDomain") {
      setFormData(prev => ({ ...prev, preferredDomain: value, preferredRole: "" }));
      updateAvailableRoles(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updateUserProfile({
        first_name: formData.name,
        job_title: formData.jobTitle,
        bio: formData.bio,
        preferences: {
          preferredDomain: formData.preferredDomain,
          preferredRole: formData.preferredRole
        }
      });

      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to get initials from name for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Your Information</CardTitle>
              <CardDescription>Personal details and statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={user?.user_metadata?.avatar_url || ""} alt={formData.name} />
                  <AvatarFallback className="text-lg">{getInitials(formData.name)}</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{formData.name}</h3>
                  <p className="text-sm text-muted-foreground">{formData.email}</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <div className="text-sm font-medium">Interviews Completed</div>
                  <div className="text-2xl font-semibold">{interviewCount}</div>
                </div>

                <div className="space-y-1">
                  <div className="text-sm font-medium">Average Score</div>
                  <div className="text-2xl font-semibold">{averageScore}/10</div>
                </div>

                {formData.preferredDomain && (
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Preferred Domain</div>
                    <Badge variant="secondary">
                      {domainLabels[formData.preferredDomain]}
                    </Badge>
                  </div>
                )}

                {formData.preferredRole && (
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Preferred Role</div>
                    <Badge variant="outline">
                      {roleLabels[formData.preferredRole]}
                    </Badge>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-span-2">
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle>Edit Profile</CardTitle>
                <CardDescription>
                  Update your profile information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="jobTitle">Job Title</Label>
                    <Input
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) => handleChange("jobTitle", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="domain">Preferred Domain</Label>
                    <Select
                      value={formData.preferredDomain}
                      onValueChange={(value) => handleChange("preferredDomain", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a domain" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableDomains.map((domain) => (
                          <SelectItem key={domain} value={domain}>
                            {domainLabels[domain]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {formData.preferredDomain && (
                    <div className="space-y-2">
                      <Label htmlFor="role">Preferred Role</Label>
                      <Select
                        value={formData.preferredRole}
                        onValueChange={(value) => handleChange("preferredRole", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableRoles.map((role) => (
                            <SelectItem key={role} value={role}>
                              {roleLabels[role]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Input
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => handleChange("bio", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </form>
        </div>
      </div>
    </div>
  );
}
