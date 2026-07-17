import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';
import {
  Shield,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Edit,
  Trash2,
  Download,
  Upload,
  Search,
} from 'lucide-react';

const pendingProposals = [
  {
    id: '1',
    title: 'Expand Public Transport Network',
    submitter: 'John Kamau',
    date: '2025-11-10',
    region: 'Nairobi',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Community Health Centers Initiative',
    submitter: 'Mary Wanjiku',
    date: '2025-11-11',
    region: 'Kiambu',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Youth Sports Facilities',
    submitter: 'David Omondi',
    date: '2025-11-12',
    region: 'Kisumu',
    priority: 'low',
  },
];

const recentUsers = [
  {
    id: '1',
    name: 'Alice Njeri',
    email: 'alice@example.com',
    role: 'Citizen',
    status: 'active',
    joined: '2025-11-01',
  },
  {
    id: '2',
    name: 'Bob Otieno',
    email: 'bob@example.com',
    role: 'Citizen',
    status: 'active',
    joined: '2025-11-05',
  },
  {
    id: '3',
    name: 'Carol Mwende',
    email: 'carol@example.com',
    role: 'Moderator',
    status: 'active',
    joined: '2025-10-28',
  },
];

const auditLogs = [
  {
    id: '1',
    action: 'Proposal Approved',
    user: 'Admin Sarah',
    target: 'Healthcare Reform Bill',
    timestamp: '2025-11-12 14:32',
    status: 'success',
  },
  {
    id: '2',
    action: 'User Role Updated',
    user: 'Super Admin John',
    target: 'User: Mary Wanjiku',
    timestamp: '2025-11-12 13:15',
    status: 'success',
  },
  {
    id: '3',
    action: 'Proposal Rejected',
    user: 'Admin Peter',
    target: 'Unrealistic Budget Proposal',
    timestamp: '2025-11-12 11:47',
    status: 'warning',
  },
  {
    id: '4',
    action: 'Data Backup',
    user: 'System',
    target: 'Full Database',
    timestamp: '2025-11-12 03:00',
    status: 'success',
  },
];

const flaggedContent = [
  {
    id: '1',
    type: 'Comment',
    content: 'This government is completely useless...',
    reporter: 'Anonymous',
    date: '2025-11-12',
    reason: 'Inappropriate language',
  },
  {
    id: '2',
    type: 'Proposal',
    content: 'Abolish all taxes immediately',
    reporter: 'System',
    date: '2025-11-11',
    reason: 'Unrealistic/spam',
  },
];

export function AdminDashboardPage() {
  const [selectedRole, setSelectedRole] = useState('Super Admin');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-kenya-red" />
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Manage proposals, users, and platform security
            </p>
          </div>
          <div className="w-64">
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Super Admin">Super Admin</SelectItem>
                <SelectItem value="National Admin">National Admin</SelectItem>
                <SelectItem value="County Admin">County Admin</SelectItem>
                <SelectItem value="Security Admin">Security Admin</SelectItem>
                <SelectItem value="Legal Auditor">Legal Auditor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Review</p>
                <p className="text-3xl text-yellow-600">23</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Flagged Content</p>
                <p className="text-3xl text-kenya-red">7</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-kenya-red" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Users</p>
                <p className="text-3xl text-kenya-green">1,234</p>
              </div>
              <Users className="h-8 w-8 text-kenya-green" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's Actions</p>
                <p className="text-3xl text-kenya-black">45</p>
              </div>
              <FileText className="h-8 w-8 text-kenya-black" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="proposals" className="space-y-6">
        <TabsList>
          <TabsTrigger value="proposals">Proposal Management</TabsTrigger>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="moderation">Moderation</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          <TabsTrigger value="backup">Backup & Restore</TabsTrigger>
        </TabsList>

        {/* Proposal Management */}
        <TabsContent value="proposals" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Pending Proposals</CardTitle>
                  <CardDescription>Review and moderate submitted proposals</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Submitter</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Region</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingProposals.map((proposal) => (
                    <TableRow key={proposal.id}>
                      <TableCell className="max-w-xs">
                        <div>{proposal.title}</div>
                      </TableCell>
                      <TableCell>{proposal.submitter}</TableCell>
                      <TableCell>{proposal.date}</TableCell>
                      <TableCell>{proposal.region}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            proposal.priority === 'high'
                              ? 'bg-kenya-red'
                              : proposal.priority === 'medium'
                              ? 'bg-yellow-500'
                              : 'bg-gray-500'
                          }
                        >
                          {proposal.priority}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-kenya-green">
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="text-kenya-red">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Reject Proposal?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This action cannot be undone. The submitter will be notified.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction className="bg-kenya-red">
                                  Reject
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* User Management */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage user accounts and permissions</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-kenya-green">{user.status}</Badge>
                      </TableCell>
                      <TableCell>{user.joined}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-kenya-red">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Moderation */}
        <TabsContent value="moderation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Flagged Content</CardTitle>
              <CardDescription>Review and moderate reported content</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Reporter</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {flaggedContent.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Badge>{item.type}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{item.content}</TableCell>
                      <TableCell>{item.reporter}</TableCell>
                      <TableCell>{item.reason}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Dismiss
                          </Button>
                          <Button size="sm" className="bg-kenya-red hover:bg-kenya-red-dark">
                            Remove
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audit Logs */}
        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>System Audit Logs</CardTitle>
              <CardDescription>Track all administrative actions and system events</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>{log.action}</TableCell>
                      <TableCell>{log.user}</TableCell>
                      <TableCell className="max-w-xs truncate">{log.target}</TableCell>
                      <TableCell>{log.timestamp}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            log.status === 'success'
                              ? 'bg-kenya-green'
                              : log.status === 'warning'
                              ? 'bg-yellow-500'
                              : 'bg-kenya-red'
                          }
                        >
                          {log.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Backup & Restore */}
        <TabsContent value="backup" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Database Backup</CardTitle>
                <CardDescription>Create and manage system backups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Last Backup</p>
                  <p>2025-11-12 03:00 AM</p>
                </div>
                <div className="space-y-2">
                  <Button className="w-full bg-kenya-green hover:bg-kenya-green-dark">
                    <Download className="mr-2 h-4 w-4" />
                    Create Backup Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Schedule Automatic Backups
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Restore from Backup</CardTitle>
                <CardDescription>Restore system data from previous backup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-600 mb-2">Upload backup file</p>
                  <Button variant="outline" size="sm">
                    Select File
                  </Button>
                </div>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline" className="w-full text-kenya-red border-kenya-red">
                      Restore Database
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Restore from Backup?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will overwrite current data. Ensure you have a recent backup before proceeding.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-kenya-red">
                        Confirm Restore
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
