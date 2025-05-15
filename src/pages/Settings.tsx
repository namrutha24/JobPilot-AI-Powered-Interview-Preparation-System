import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/providers/theme-provider";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { Separator } from "@/components/ui/separator";
import { AlertCircle, Bell, BellOff, Check, Eye, EyeOff, Lock, Settings as SettingsIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const { user, updatePassword } = useAuth();
  
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmittingPw, setIsSubmittingPw] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  
  const [notificationSettings, setNotificationSettings] = useState({
    interviewReminders: true,
    feedbackNotifications: true,
    marketingEmails: false,
    newFeatures: true
  });
  
  const [privacySettings, setPrivacySettings] = useState({
    shareAnalytics: true,
    saveInterviewHistory: true
  });
  
  const [displaySettings, setDisplaySettings] = useState({
    darkMode: theme === "dark",
    highContrast: false,
    largeText: false
  });
  
  const [interviewSettings, setInterviewSettings] = useState({
    enableTimer: false,
    detailedFeedback: true,
    autoSaveAnswers: true
  });
  
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    const { currentPassword, newPassword, confirmPassword } = passwordData;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordError("All fields are required");
      return;
    }
    
    if (newPassword !== confirmPassword) {
      setPasswordError("New password and confirm password don't match");
      return;
    }
    
    if (newPassword.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }
    
    setIsSubmittingPw(true);
    
    try {
      await updatePassword(newPassword);
      toast.success("Password updated successfully");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    } catch (error: any) {
      console.error("Error updating password:", error);
      setPasswordError(error.message || "Failed to update password. Check your current password.");
    } finally {
      setIsSubmittingPw(false);
    }
  };
  
  const handleNotificationChange = (setting: string, value: boolean) => {
    setNotificationSettings(prev => ({ ...prev, [setting]: value }));
  };
  
  const handlePrivacyChange = (setting: string, value: boolean) => {
    setPrivacySettings(prev => ({ ...prev, [setting]: value }));
  };
  
  const handleDisplayChange = (setting: string, value: boolean) => {
    if (setting === 'darkMode') {
      setTheme(value ? "dark" : "light");
    }
    setDisplaySettings(prev => ({ ...prev, [setting]: value }));
  };
  
  const handleInterviewChange = (setting: string, value: boolean) => {
    setInterviewSettings(prev => ({ ...prev, [setting]: value }));
  };
  
  const handleSaveSettings = () => {
    // Save settings to localStorage
    localStorage.setItem("notificationSettings", JSON.stringify(notificationSettings));
    localStorage.setItem("privacySettings", JSON.stringify(privacySettings));
    localStorage.setItem("displaySettings", JSON.stringify(displaySettings));
    localStorage.setItem("interviewSettings", JSON.stringify(interviewSettings));
    
    toast.success("Settings saved successfully");
  };
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your application preferences and account settings
        </p>
      </div>
      
      <Tabs defaultValue="account" className="space-y-4">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="account" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">Account</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center gap-2">
            <AlertCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Privacy</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Change Password</CardTitle>
              <CardDescription>Update your account password</CardDescription>
            </CardHeader>
            <form onSubmit={handlePasswordChange}>
              <CardContent className="space-y-4">
                {passwordError && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{passwordError}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showPassword ? "text" : "password"}
                      value={passwordData.currentPassword}
                      onChange={(e) => setPasswordData(prev => ({ ...prev, currentPassword: e.target.value }))}
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative">
                    <Input
                      id="newPassword"
                      type={showPassword ? "text" : "password"}
                      value={passwordData.newPassword}
                      onChange={(e) => setPasswordData(prev => ({ ...prev, newPassword: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      required
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isSubmittingPw}>
                  {isSubmittingPw ? "Updating..." : "Update Password"}
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
              <CardDescription>Manage your account security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <Button variant="outline">Enable 2FA</Button>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Active Sessions</Label>
                  <p className="text-sm text-muted-foreground">
                    Manage devices where you're currently logged in
                  </p>
                </div>
                <Button variant="outline">Manage Sessions</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance</CardTitle>
              <CardDescription>Customize how SkillSync looks on your device</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">
                    Switch between light and dark themes
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={displaySettings.darkMode}
                  onCheckedChange={(checked) => handleDisplayChange('darkMode', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="high-contrast">High Contrast</Label>
                  <p className="text-sm text-muted-foreground">
                    Increase contrast for better readability
                  </p>
                </div>
                <Switch
                  id="high-contrast"
                  checked={displaySettings.highContrast}
                  onCheckedChange={(checked) => handleDisplayChange('highContrast', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="large-text">Larger Text</Label>
                  <p className="text-sm text-muted-foreground">
                    Increase font size throughout the application
                  </p>
                </div>
                <Switch
                  id="large-text"
                  checked={displaySettings.largeText}
                  onCheckedChange={(checked) => handleDisplayChange('largeText', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control when and how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="interview-reminders">Interview Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive reminders for scheduled mock interviews
                  </p>
                </div>
                <Switch
                  id="interview-reminders"
                  checked={notificationSettings.interviewReminders}
                  onCheckedChange={(checked) => handleNotificationChange('interviewReminders', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="feedback-notifications">Feedback Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when you receive new feedback
                  </p>
                </div>
                <Switch
                  id="feedback-notifications"
                  checked={notificationSettings.feedbackNotifications}
                  onCheckedChange={(checked) => handleNotificationChange('feedbackNotifications', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing-emails">Marketing Communications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates about new features and tips
                  </p>
                </div>
                <Switch
                  id="marketing-emails"
                  checked={notificationSettings.marketingEmails}
                  onCheckedChange={(checked) => handleNotificationChange('marketingEmails', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="new-features">New Feature Announcements</Label>
                  <p className="text-sm text-muted-foreground">
                    Get notified when we release new features
                  </p>
                </div>
                <Switch
                  id="new-features"
                  checked={notificationSettings.newFeatures}
                  onCheckedChange={(checked) => handleNotificationChange('newFeatures', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Control your data and privacy options</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="share-analytics">Share Analytics</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow anonymous usage data to improve the system
                  </p>
                </div>
                <Switch
                  id="share-analytics"
                  checked={privacySettings.shareAnalytics}
                  onCheckedChange={(checked) => handlePrivacyChange('shareAnalytics', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="save-history">Save Interview History</Label>
                  <p className="text-sm text-muted-foreground">
                    Store your interview responses for future reference
                  </p>
                </div>
                <Switch
                  id="save-history"
                  checked={privacySettings.saveInterviewHistory}
                  onCheckedChange={(checked) => handlePrivacyChange('saveInterviewHistory', checked)}
                />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Interview Preferences</CardTitle>
              <CardDescription>Configure your interview experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="timer">Enable Default Timer</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically start a timer for each question
                  </p>
                </div>
                <Switch 
                  id="timer" 
                  checked={interviewSettings.enableTimer}
                  onCheckedChange={(checked) => handleInterviewChange('enableTimer', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="feedback">Detailed Feedback</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive comprehensive feedback after each interview
                  </p>
                </div>
                <Switch 
                  id="feedback" 
                  checked={interviewSettings.detailedFeedback}
                  onCheckedChange={(checked) => handleInterviewChange('detailedFeedback', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="autosave">Auto-save Answers</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically save your answers as you type
                  </p>
                </div>
                <Switch 
                  id="autosave" 
                  checked={interviewSettings.autoSaveAnswers}
                  onCheckedChange={(checked) => handleInterviewChange('autoSaveAnswers', checked)}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end">
        <Button onClick={handleSaveSettings}>Save All Settings</Button>
      </div>
    </div>
  );
}