import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  TrendingUp, Vote, FileText, Users, Calendar, 
  MapPin, Shield, CheckCircle, MessageSquare, AlertTriangle, 
  Send, Plus, Trash2, Edit 
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { toast } from 'sonner';

// Mock data for analytics
const categoryData = [
  { category: 'Healthcare', count: 78 },
  { category: 'Education', count: 65 },
  { category: 'Infrastructure', count: 92 },
  { category: 'Environment', count: 45 },
  { category: 'Agriculture', count: 52 },
];

export function DashboardPage() {
  const { userRole, county, subCounty, ward, userName } = useUser();

  const renderDashboard = () => {
    switch (userRole) {
      case 'mca':
        return <MCADashboard ward={ward} userName={userName} />;
      case 'mp':
        return <MPDashboard subCounty={subCounty} userName={userName} />;
      case 'senator':
      case 'governor':
        return <CountyLeaderDashboard county={county} role={userRole} userName={userName} />;
      case 'admin':
        return <SystemAdminDashboard userName={userName} />;
      case 'citizen':
      default:
        return <CitizenDashboard county={county} subCounty={subCounty} ward={ward} userName={userName} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 border-b border-gray-100 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {userRole.toUpperCase()} Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Welcome back, <strong className="text-kenya-green">{userName}</strong> · Anchored in {ward}, {subCounty}, {county}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-kenya-green text-white capitalize text-sm px-3 py-1">
            Role: {userRole}
          </Badge>
          <Link to="/settings">
            <Button size="sm" variant="outline">
              Switch Simulation Role
            </Button>
          </Link>
        </div>
      </div>

      {renderDashboard()}
    </div>
  );
}

/* ==========================================
   1. CITIZEN DASHBOARD
   ========================================== */
function CitizenDashboard({ county, subCounty, ward, userName }: { county: string; subCounty: string; ward: string; userName: string }) {
  const [proposals, setProposals] = useState([
    { id: '1', title: 'Install Solar Street Lights', ward: ward, status: 'under review', date: 'Nov 12, 2025', support: 84 },
    { id: '2', title: 'Ward Health Center Nurse Recruitment', ward: ward, status: 'approved', date: 'Nov 8, 2025', support: 142 },
  ]);

  const stats = [
    { label: 'Your Votes Cast', value: '47', icon: Vote, color: 'text-kenya-green' },
    { label: 'Supported Proposals', value: '23', icon: TrendingUp, color: 'text-kenya-red' },
    { label: 'Your Created Petitions', value: proposals.length.toString(), icon: FileText, color: 'text-kenya-black' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <Card key={i}>
              <CardContent className="pt-6 flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 font-semibold">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <Icon className={`h-8 w-8 ${stat.color}`} />
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Your Petitions */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="flex justify-between items-center flex-row">
              <div>
                <CardTitle>Your Local Proposals</CardTitle>
                <CardDescription>Reforms and ideas you submitted in {ward}</CardDescription>
              </div>
              <Link to="/proposals/new">
                <Button size="sm" className="bg-kenya-green hover:bg-kenya-green-dark">
                  <Plus className="h-4 w-4 mr-1" /> New Proposal
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proposals.map((prop) => (
                  <div key={prop.id} className="p-4 border rounded-lg flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-semibold">{prop.title}</h4>
                      <div className="flex gap-3 text-xs text-gray-500 mt-1">
                        <span>Submitted {prop.date}</span>
                        <span>·</span>
                        <span>{prop.support} Citizens Supporting</span>
                      </div>
                    </div>
                    <Badge className={prop.status === 'approved' ? 'bg-kenya-green' : 'bg-yellow-500'}>
                      {prop.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right: Your Local Leaders */}
        <Card>
          <CardHeader>
            <CardTitle>Your Local Representatives</CardTitle>
            <CardDescription>Elected leaders representing {subCounty}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 bg-kenya-green text-white rounded-full flex items-center justify-center font-bold">GW</div>
              <div>
                <div className="text-sm font-semibold">Hon. Grace Wambui</div>
                <div className="text-xs text-gray-500">MCA · {ward}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="h-10 w-10 bg-kenya-green text-white rounded-full flex items-center justify-center font-bold">JM</div>
              <div>
                <div className="text-sm font-semibold">Hon. Dr. Jane Mwangi</div>
                <div className="text-xs text-gray-500">MP · {subCounty}</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/* ==========================================
   2. MCA DASHBOARD (WARD LEVEL)
   ========================================== */
function MCADashboard({ ward, userName }: { ward: string; userName: string }) {
  const [petitions, setPetitions] = useState([
    { id: '1', title: 'Repair Bridge on River Chania', citizen: 'Albert Kilonzo', support: 147, status: 'pending' },
    { id: '2', title: 'Open Library on Weekends', citizen: 'Joy Wendo', support: 89, status: 'pending' },
    { id: '3', title: 'Recruit Community Health Officers', citizen: 'Peter Kamau', support: 341, status: 'tabled' },
  ]);

  const handleAction = (id: string, action: 'tabled' | 'rejected') => {
    setPetitions(petitions.map(p => p.id === id ? { ...p, status: action } : p));
    toast.success(`Petition status updated to ${action}!`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Ward Petitions: {ward}</CardTitle>
          <CardDescription>Review proposals raised by residents of your ward that have met thresholds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {petitions.map((pet) => (
              <div key={pet.id} className="p-4 border rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white shadow-sm">
                <div>
                  <h4 className="font-semibold text-lg">{pet.title}</h4>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mt-1">
                    <span>Proposed by {pet.citizen}</span>
                    <span>·</span>
                    <span className="font-semibold text-kenya-green">{pet.support} Supports</span>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  {pet.status === 'pending' ? (
                    <>
                      <Button size="sm" className="bg-kenya-green hover:bg-kenya-green-dark" onClick={() => handleAction(pet.id, 'tabled')}>
                        Table in Assembly
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleAction(pet.id, 'rejected')}>
                        Reject / Dismiss
                      </Button>
                    </>
                  ) : (
                    <Badge className={pet.status === 'tabled' ? 'bg-blue-600' : 'bg-red-600'}>
                      {pet.status.toUpperCase()}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ==========================================
   3. MP DASHBOARD (CONSTITUENCY LEVEL)
   ========================================== */
function MPDashboard({ subCounty, userName }: { subCounty: string; userName: string }) {
  const [cdfProjects, setCdfProjects] = useState([
    { id: '1', name: 'Westlands Technical Training Center', budget: 'Ksh 15,000,000', progress: '75%', status: 'Active' },
    { id: '2', name: 'Highridge Primary School Dormitory', budget: 'Ksh 8,500,000', progress: '100%', status: 'Completed' },
  ]);

  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectBudget, setNewProjectBudget] = useState('');

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProjectName && newProjectBudget) {
      setCdfProjects([...cdfProjects, {
        id: Date.now().toString(),
        name: newProjectName,
        budget: `Ksh ${parseInt(newProjectBudget).toLocaleString()}`,
        progress: '0%',
        status: 'Active'
      }]);
      setNewProjectName('');
      setNewProjectBudget('');
      toast.success('CDF Project uploaded successfully!');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* CDF Tracker */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>NG-CDF Project Tracker</CardTitle>
            <CardDescription>Publish updates on constituency developments in {subCounty}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cdfProjects.map((proj) => (
                <div key={proj.id} className="p-4 border rounded-lg bg-gray-50 flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold">{proj.name}</h4>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      <span>Budget: {proj.budget}</span>
                      <span>Progress: {proj.progress}</span>
                    </div>
                  </div>
                  <Badge className={proj.status === 'Completed' ? 'bg-kenya-green' : 'bg-blue-600'}>
                    {proj.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add CDF Project */}
      <Card>
        <CardHeader>
          <CardTitle>Add New CDF Project</CardTitle>
          <CardDescription>Increase public trust and transparency</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddProject} className="space-y-4">
            <div>
              <Label htmlFor="pName">Project Title</Label>
              <Input id="pName" placeholder="e.g. Ward Laboratory Renovation" value={newProjectName} onChange={e => setNewProjectName(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="pBudget">Budget (Ksh)</Label>
              <Input id="pBudget" type="number" placeholder="e.g. 5000000" value={newProjectBudget} onChange={e => setNewProjectBudget(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full bg-kenya-green hover:bg-kenya-green-dark">
              Upload Project Details
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

/* ==========================================
   4. COUNTY LEADER LEADER (SENATOR/GOVERNOR)
   ========================================== */
function CountyLeaderDashboard({ county, role, userName }: { county: string; role: string; userName: string }) {
  const [cidpFiles, setCidpFiles] = useState([
    { id: '1', title: 'County Integrated Development Plan (CIDP) Draft 2026-2030', downloads: 1420, date: 'Oct 15, 2025' },
    { id: '2', title: 'County Budget Estimates FY 2025/2026', downloads: 890, date: 'Nov 1, 2025' },
  ]);

  const [budgetTitle, setBudgetTitle] = useState('');

  const handleUploadDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (budgetTitle) {
      setCidpFiles([...cidpFiles, {
        id: Date.now().toString(),
        title: budgetTitle,
        downloads: 0,
        date: new Date().toLocaleDateString()
      }]);
      setBudgetTitle('');
      toast.success('Document uploaded for public participation!');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Uploaded Documents */}
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>{county} Development Proposals & Documents</CardTitle>
            <CardDescription>View official documents uploaded for public feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cidpFiles.map((file) => (
                <div key={file.id} className="p-4 border rounded-lg flex items-center justify-between gap-4 bg-white shadow-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900">{file.title}</h4>
                    <p className="text-xs text-gray-500 mt-1">Uploaded: {file.date} · {file.downloads} citizen downloads</p>
                  </div>
                  <Button size="sm" variant="outline">
                    View Comments
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upload Document Form */}
      <Card>
        <CardHeader>
          <CardTitle>Publish Public Document</CardTitle>
          <CardDescription>Upload county plans or budgets to gather citizen feedback</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUploadDocument} className="space-y-4">
            <div>
              <Label htmlFor="docTitle">Document Title</Label>
              <Input id="docTitle" placeholder="e.g., County CIDP FY 2026/2027" value={budgetTitle} onChange={e => setBudgetTitle(e.target.value)} required />
            </div>
            <div>
              <Label htmlFor="fileInput">Document File (PDF)</Label>
              <Input id="fileInput" type="file" className="mt-1" />
            </div>
            <Button type="submit" className="w-full bg-kenya-green hover:bg-kenya-green-dark">
              Publish for Participation
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

/* ==========================================
   5. SYSTEM ADMIN DASHBOARD (MODERATOR)
   ========================================== */
function SystemAdminDashboard({ userName }: { userName: string }) {
  const [flaggedItems, setFlaggedItems] = useState([
    { id: '1', type: 'Comment', content: 'This policy is a completely stupid scam', reporter: 'SpamDetector', reason: 'Abusive language' },
    { id: '2', type: 'Proposal', content: 'Abolish all municipal parking fees', reporter: 'NairobiGov', reason: 'Spam/Unrealistic' },
  ]);

  const handleResolve = (id: string, action: 'dismissed' | 'removed') => {
    setFlaggedItems(flaggedItems.filter((item) => item.id !== id));
    toast.success(`Flagged item has been ${action}!`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Content Moderation Queue</CardTitle>
          <CardDescription>Review and moderate content reported by citizens or AI filters</CardDescription>
        </CardHeader>
        <CardContent>
          {flaggedItems.length > 0 ? (
            <div className="space-y-4">
              {flaggedItems.map((item) => (
                <div key={item.id} className="p-4 border rounded-lg bg-red-50/50 border-red-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant="destructive">{item.type}</Badge>
                      <span className="text-xs text-gray-500">Reported by {item.reporter} for: <strong>{item.reason}</strong></span>
                    </div>
                    <p className="text-gray-800 italic">"{item.content}"</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => handleResolve(item.id, 'dismissed')}>
                      Dismiss Report
                    </Button>
                    <Button size="sm" className="bg-kenya-red hover:bg-kenya-red-dark text-white" onClick={() => handleResolve(item.id, 'removed')}>
                      Remove Content
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <CheckCircle className="h-10 w-10 mx-auto text-kenya-green mb-2" />
              <p>Moderation queue is clean. Good job!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Helper Link wrapper
import { Link } from 'react-router-dom';
