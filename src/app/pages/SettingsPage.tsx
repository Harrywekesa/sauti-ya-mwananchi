import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { AccessibilityPanel } from '../components/AccessibilityPanel';
import { NotificationPanel } from '../components/NotificationPanel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Settings, User, Bell, Shield, Accessibility } from 'lucide-react';
import { useUser, UserRole } from '../context/UserContext';
import { useState } from 'react';
import { toast } from 'sonner';

export function SettingsPage() {
  const { 
    userRole, 
    setUserRole, 
    county, 
    setCounty, 
    subCounty, 
    setSubCounty, 
    ward, 
    setWard, 
    userName, 
    setUserName 
  } = useUser();

  const [localName, setLocalName] = useState(userName);
  const [localRole, setLocalRole] = useState<UserRole>(userRole);
  const [localCounty, setLocalCounty] = useState(county);
  const [localSubCounty, setLocalSubCounty] = useState(subCounty);
  const [localWard, setLocalWard] = useState(ward);

  // Simple hardcoded mapping for demo
  const subCountiesMap: Record<string, string[]> = {
    'Nairobi County': ['Westlands Constituency', 'Embakasi East Constituency', 'Kasarani Constituency'],
    'Mombasa County': ['Mvita Constituency', 'Nyali Constituency', 'Likoni Constituency'],
    'Kisumu County': ['Kisumu Central Constituency', 'Kisumu East Constituency', 'Muhoroni Constituency'],
    'Kiambu County': ['Kikuyu Constituency', 'Ruiru Constituency', 'Limuru Constituency'],
    'Nakuru County': ['Nakuru Town West Constituency', 'Naivasha Constituency', 'Molo Constituency'],
  };

  const wardsMap: Record<string, string[]> = {
    'Westlands Constituency': ['Kitisuru Ward', 'Parklands Ward', 'Karura Ward'],
    'Embakasi East Constituency': ['Upper Savanna Ward', 'Lower Savanna Ward', 'Utawala Ward'],
    'Kasarani Constituency': ['Kasarani Ward', 'Clay City Ward', 'Mwiki Ward'],
    'Mvita Constituency': ['Majengo Ward', 'Tononoka Ward', 'Mji wa Kale Ward'],
    'Nyali Constituency': ['Frere Town Ward', 'Kongowea Ward', 'Kadzandani Ward'],
    'Kisumu Central Constituency': ['Milimani Ward', 'Kondele Ward', 'Market Ward'],
    'Kikuyu Constituency': ['Kikuyu Ward', 'Kinoo Ward', 'Karai Ward'],
  };

  const handleSaveProfile = () => {
    setUserName(localName);
    setUserRole(localRole);
    setCounty(localCounty);
    setSubCounty(localSubCounty);
    setWard(localWard);
    toast.success('Settings updated successfully!');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="flex items-center gap-2">
          <Settings className="h-8 w-8" />
          Settings
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your account preferences and platform settings
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="accessibility">
            <Accessibility className="h-4 w-4 mr-2" />
            Accessibility
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Shield className="h-4 w-4 mr-2" />
            Privacy
          </TabsTrigger>
        </TabsList>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal and demographic profile settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input 
                  id="fullName" 
                  value={localName} 
                  onChange={(e) => setLocalName(e.target.value)} 
                />
              </div>

              {/* Profile Role Selector */}
              <div className="space-y-2">
                <Label htmlFor="activeRole">Simulation Profile Category</Label>
                <Select value={localRole} onValueChange={(val) => setLocalRole(val as UserRole)}>
                  <SelectTrigger id="activeRole">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="citizen">Citizen (General Public)</SelectItem>
                    <SelectItem value="mca">Member of County Assembly (MCA)</SelectItem>
                    <SelectItem value="mp">Member of Parliament (MP)</SelectItem>
                    <SelectItem value="senator">Senator</SelectItem>
                    <SelectItem value="governor">Governor / County Executive</SelectItem>
                    <SelectItem value="admin">Platform Moderator / Admin</SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-gray-500">
                  Switch roles here to simulate the platform experience for different political and administrative categories.
                </p>
              </div>

              {/* County Selector */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="county">County</Label>
                  <Select value={localCounty} onValueChange={(val) => {
                    setLocalCounty(val);
                    const subs = subCountiesMap[val] || [];
                    if (subs.length > 0) {
                      setLocalSubCounty(subs[0]);
                      const wds = wardsMap[subs[0]] || [];
                      setLocalWard(wds[0] || 'Default Ward');
                    }
                  }}>
                    <SelectTrigger id="county">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(subCountiesMap).map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Sub-County / Constituency */}
                <div className="space-y-2">
                  <Label htmlFor="subcounty">Sub-county / Constituency</Label>
                  <Select value={localSubCounty} onValueChange={(val) => {
                    setLocalSubCounty(val);
                    const wds = wardsMap[val] || [];
                    setLocalWard(wds[0] || 'Default Ward');
                  }}>
                    <SelectTrigger id="subcounty">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(subCountiesMap[localCounty] || []).map((sc) => (
                        <SelectItem key={sc} value={sc}>{sc}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Ward */}
                <div className="space-y-2">
                  <Label htmlFor="ward">Ward</Label>
                  <Select value={localWard} onValueChange={setLocalWard}>
                    <SelectTrigger id="ward">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(wardsMap[localSubCounty] || ['Default Ward']).map((w) => (
                        <SelectItem key={w} value={w}>{w}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleSaveProfile} className="bg-kenya-green hover:bg-kenya-green-dark text-white">
                Save Profile Changes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
              <CardDescription>Manage your password and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <Button variant="outline">Update Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notification Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Email Notifications</CardTitle>
              <CardDescription>Choose what updates you want to receive via email</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="proposalUpdates">Proposal Updates</Label>
                  <p className="text-sm text-gray-600">
                    Get notified when proposals you support are updated
                  </p>
                </div>
                <Switch id="proposalUpdates" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="voteReminders">Vote Reminders</Label>
                  <p className="text-sm text-gray-600">
                    Receive reminders about upcoming voting deadlines
                  </p>
                </div>
                <Switch id="voteReminders" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="newProposals">New Proposals in Your Region</Label>
                  <p className="text-sm text-gray-600">
                    Be notified when new proposals are submitted in your area
                  </p>
                </div>
                <Switch id="newProposals" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="comments">Comments and Replies</Label>
                  <p className="text-sm text-gray-600">
                    Get notified when someone comments on your proposals
                  </p>
                </div>
                <Switch id="comments" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weeklyDigest">Weekly Digest</Label>
                  <p className="text-sm text-gray-600">
                    Receive a weekly summary of platform activity
                  </p>
                </div>
                <Switch id="weeklyDigest" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Push Notifications</CardTitle>
              <CardDescription>Manage browser push notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="pushEnabled">Enable Push Notifications</Label>
                  <p className="text-sm text-gray-600">
                    Receive real-time updates in your browser
                  </p>
                </div>
                <Switch id="pushEnabled" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Accessibility Settings */}
        <TabsContent value="accessibility">
          <AccessibilityPanel />
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Preferences</CardTitle>
              <CardDescription>Control your data and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="profileVisibility">Public Profile</Label>
                  <p className="text-sm text-gray-600">
                    Allow other users to see your profile and activity
                  </p>
                </div>
                <Switch id="profileVisibility" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showVotes">Show My Votes</Label>
                  <p className="text-sm text-gray-600">
                    Display your voting history publicly
                  </p>
                </div>
                <Switch id="showVotes" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="showProposals">Show My Proposals</Label>
                  <p className="text-sm text-gray-600">
                    Make your submitted proposals visible on your profile
                  </p>
                </div>
                <Switch id="showProposals" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analytics">Usage Analytics</Label>
                  <p className="text-sm text-gray-600">
                    Help improve the platform by sharing usage data
                  </p>
                </div>
                <Switch id="analytics" defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Management</CardTitle>
              <CardDescription>Manage your personal data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  You have the right to access, correct, or delete your personal data at any time.
                </p>
                <div className="flex gap-3">
                  <Button variant="outline">Download My Data</Button>
                  <Button variant="outline" className="text-kenya-red border-kenya-red">
                    Delete My Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookie Preferences</CardTitle>
              <CardDescription>Manage cookie and tracking settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="essentialCookies">Essential Cookies</Label>
                  <p className="text-sm text-gray-600">
                    Required for platform functionality
                  </p>
                </div>
                <Switch id="essentialCookies" checked disabled />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="analyticsCookies">Analytics Cookies</Label>
                  <p className="text-sm text-gray-600">
                    Help us understand how you use the platform
                  </p>
                </div>
                <Switch id="analyticsCookies" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="marketingCookies">Marketing Cookies</Label>
                  <p className="text-sm text-gray-600">
                    Used to show you relevant content
                  </p>
                </div>
                <Switch id="marketingCookies" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
