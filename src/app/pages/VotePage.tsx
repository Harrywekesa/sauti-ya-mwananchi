import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProposalCard } from '../components/ProposalCard';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Vote, TrendingUp, Clock, CheckCircle } from 'lucide-react';

const activeProposals = [
  {
    id: '1',
    title: 'Improve Healthcare Access in Rural Areas',
    description: 'Proposal to establish mobile health clinics in underserved rural communities across Kenya.',
    category: 'Healthcare',
    region: 'Nationwide',
    ministry: 'Ministry of Health',
    status: 'reviewed' as const,
    yesVotes: 4523,
    noVotes: 892,
    comments: 234,
    submittedDate: 'Nov 5, 2025',
    representative: 'Hon. Dr. Jane Mwangi',
  },
  {
    id: '2',
    title: 'Youth Employment Initiative - Tech Training',
    description: 'Create technology training centers in all 47 counties to equip youth with digital skills.',
    category: 'Education & Employment',
    region: 'All Counties',
    ministry: 'Ministry of ICT',
    status: 'presented' as const,
    yesVotes: 3891,
    noVotes: 456,
    comments: 178,
    submittedDate: 'Nov 8, 2025',
    representative: 'Hon. Peter Kariuki',
  },
  {
    id: '3',
    title: 'Enhanced Road Safety Measures in Nairobi',
    description: 'Install traffic lights and pedestrian crossings at 50 high-risk intersections.',
    category: 'Infrastructure',
    region: 'Nairobi County',
    ministry: 'Ministry of Transport',
    status: 'submitted' as const,
    yesVotes: 2341,
    noVotes: 312,
    comments: 145,
    submittedDate: 'Nov 10, 2025',
  },
];

const upcomingDeadlines = [
  {
    id: '1',
    title: 'Healthcare Reform Bill',
    deadline: 'Nov 15, 2025',
    timeLeft: '3 days',
    votes: 5415,
  },
  {
    id: '2',
    title: 'Education Budget Allocation',
    deadline: 'Nov 18, 2025',
    timeLeft: '6 days',
    votes: 4231,
  },
  {
    id: '3',
    title: 'Infrastructure Development Plan',
    deadline: 'Nov 20, 2025',
    timeLeft: '8 days',
    votes: 3892,
  },
];

const myVotedProposals = [
  {
    id: '4',
    title: 'Clean Water Initiative for Coastal Region',
    description: 'Establish water purification plants in coastal counties to provide clean drinking water.',
    category: 'Infrastructure',
    region: 'Coast Region',
    ministry: 'Ministry of Water',
    status: 'passed' as const,
    yesVotes: 5234,
    noVotes: 234,
    comments: 312,
    submittedDate: 'Oct 28, 2025',
    representative: 'Hon. Ali Hassan',
  },
];

export function VotePage() {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <Vote className="h-8 w-8 text-kenya-green" />
          <h1>Vote on Proposals</h1>
        </div>
        <p className="text-gray-600">
          Cast your vote on active proposals and track your voting history
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="border border-slate-100 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Proposals</p>
                <p className="text-3xl font-extrabold text-kenya-green">{activeProposals.length}</p>
              </div>
              <Vote className="h-8 w-8 text-kenya-green" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-100 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Your Votes</p>
                <p className="text-3xl font-extrabold text-kenya-green">47</p>
              </div>
              <CheckCircle className="h-8 w-8 text-kenya-green" />
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-100 shadow-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Closing Soon</p>
                <p className="text-3xl font-extrabold text-yellow-600">{upcomingDeadlines.length}</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Urgent Deadlines */}
      <Card className="mb-8 border border-amber-200 bg-amber-50/20 shadow-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="h-5 w-5 text-yellow-600" />
            <h3 className="text-slate-900 font-extrabold">Voting Deadlines Approaching</h3>
          </div>
          <div className="space-y-3">
            {upcomingDeadlines.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-4 bg-yellow-50/60 border border-yellow-100 rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                    <span>{item.votes.toLocaleString()} votes</span>
                    <span>•</span>
                    <span className="text-yellow-600 font-semibold">{item.timeLeft} left</span>
                  </div>
                </div>
                <Link to={`/proposal/${item.id}`}>
                  <Button size="sm" className="bg-kenya-green hover:bg-kenya-green-dark">
                    Vote Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="active">
            <TrendingUp className="h-4 w-4 mr-2" />
            Active Voting ({activeProposals.length})
          </TabsTrigger>
          <TabsTrigger value="voted">
            <CheckCircle className="h-4 w-4 mr-2" />
            Already Voted ({myVotedProposals.length})
          </TabsTrigger>
        </TabsList>

        {/* Active Proposals */}
        <TabsContent value="active" className="mt-6">
          <div className="flex flex-col gap-4">
            {activeProposals.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))}
          </div>
        </TabsContent>

        {/* Already Voted */}
        <TabsContent value="voted" className="mt-6">
          <div className="flex flex-col gap-4">
            {myVotedProposals.map((proposal) => (
              <div key={proposal.id} className="relative">
                <ProposalCard proposal={proposal} />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-kenya-green">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Voted
                  </Badge>
                </div>
              </div>
            ))}
          </div>
          {myVotedProposals.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-gray-600">You haven't voted on any proposals yet.</p>
                <Link to="/proposals">
                  <Button className="mt-4 bg-kenya-green hover:bg-kenya-green-dark">
                    Browse Proposals
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
