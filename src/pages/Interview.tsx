// src/pages/Interview.tsx

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { getRolesForDomain, getAvailableDomains } from "@/utils/questionUtils";
import { SelectInterviewModeDialog } from "@/components/SelectInterviewModeDialog";

// Map domain IDs to more descriptive labels
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

// Map role IDs to more descriptive labels
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

// Difficulty levels
const difficultyLevels = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export default function Interview() {
  const [selectedDomain, setSelectedDomain] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<string>("intermediate");
  const [availableRoles, setAvailableRoles] = useState<
    Array<{ id: string; label: string }>
  >([]);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  // Build your domains list
  const domains = getAvailableDomains().map((domainId) => ({
    id: domainId,
    label: domainLabels[domainId] || domainId.charAt(0).toUpperCase() + domainId.slice(1)
  }));

  // Helper to map role IDs to labels
  const getRolesById = (domainId: string) => {
    return getRolesForDomain(domainId).map((roleId) => ({
      id: roleId,
      label: roleLabels[roleId] || roleId.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    }));
  };

  // When domain changes, refresh roles
  useEffect(() => {
    if (selectedDomain) {
      setAvailableRoles(getRolesById(selectedDomain));
      setSelectedRole("");
    } else {
      setAvailableRoles([]);
    }
  }, [selectedDomain]);

  // Step 1: Validate and open mode‐select dialog
  const handleStartInterview = () => {
    if (!selectedDomain || !selectedRole) {
      toast.error("Please select both a domain and a job role");
      return;
    }
    setDialogOpen(true);
  };

  // Step 2: After user chooses text vs speech
  const handleModeSelect = (mode: "text" | "speech") => {
    setDialogOpen(false);

    // Save params
    const params = {
      domain: selectedDomain,
      role: selectedRole,
      difficulty: selectedDifficulty,
    };
    localStorage.setItem("interviewParams", JSON.stringify(params));
    localStorage.setItem("interviewDomain", selectedDomain);
    localStorage.setItem("interviewRole", selectedRole);
    localStorage.setItem("interviewDifficulty", selectedDifficulty);

    toast.success(
      `Starting your ${mode === "text" ? "Text" : "Speech"} Interview`
    );

    if (mode === "text") {
      navigate("/interview/session");
    } else {
      // 🔑 Use the route you have defined in App.tsx
      navigate("/speech-interview");
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Start a Mock Interview
        </h1>
        <p className="text-muted-foreground">
          Select your domain, job role, and difficulty level
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Domain Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Select Domain</CardTitle>
            <CardDescription>Choose the field you're interviewing for</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedDomain}
              onValueChange={(v) => {
                setSelectedDomain(v);
                setSelectedRole("");
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {domains.map((domain) => (
                <div key={domain.id} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={domain.id}
                    id={`domain-${domain.id}`}
                  />
                  <Label htmlFor={`domain-${domain.id}`}>
                    {domain.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Role Selection */}
        <Card>
          <CardHeader>
            <CardTitle>Select Job Role</CardTitle>
            <CardDescription>
              {selectedDomain
                ? "Choose the specific role you're applying for"
                : "Please select a domain first"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {selectedDomain ? (
              availableRoles.length > 0 ? (
                <RadioGroup
                  value={selectedRole}
                  onValueChange={setSelectedRole}
                  className="grid grid-cols-1 gap-4"
                >
                  {availableRoles.map((role) => (
                    <div key={role.id} className="flex items-center space-x-2">
                      <RadioGroupItem
                        value={role.id}
                        id={`role-${role.id}`}
                      />
                      <Label htmlFor={`role-${role.id}`}>{role.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No roles available for this domain
                </div>
              )
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                Select a domain to see available roles
              </div>
            )}
          </CardContent>
        </Card>

        {/* Difficulty Selection */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Select Difficulty</CardTitle>
            <CardDescription>
              Choose the challenge level for your mock interview
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={selectedDifficulty}
              onValueChange={setSelectedDifficulty}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {difficultyLevels.map((level) => (
                <div
                  key={level.id}
                  onClick={() => setSelectedDifficulty(level.id)}
                  className={`flex flex-col items-center border rounded-lg p-4 cursor-pointer ${selectedDifficulty === level.id
                      ? "border-primary"
                      : "hover:bg-muted/50"
                    }`}
                >
                  <RadioGroupItem
                    value={level.id}
                    id={`difficulty-${level.id}`}
                    className="mb-2"
                  />
                  <Label
                    htmlFor={`difficulty-${level.id}`}
                    className="font-medium"
                  >
                    {level.label}
                  </Label>
                  <p className="text-xs text-muted-foreground text-center mt-1">
                    {level.id === "beginner" &&
                      "For those new to the field or role"}
                    {level.id === "intermediate" &&
                      "For those with some experience"}
                    {level.id === "advanced" &&
                      "For experienced professionals"}
                  </p>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleStartInterview} size="lg">
              Start Interview
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* 3️⃣ The dialog you created */}
      <SelectInterviewModeDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSelectMode={handleModeSelect}
      />
    </div>
  );
}
