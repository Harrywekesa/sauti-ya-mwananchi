import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ProposalCard } from '../components/ProposalCard';
import { ArrowRight, Users, FileText, Vote, BarChart3, Eye, CheckCircle } from 'lucide-react';

const trendingProposals = [
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

const features = [
  {
    icon: FileText,
    title: 'Submit Proposals',
    description: 'Share your ideas for improving Kenya. Every voice matters.',
    color: 'text-kenya-green',
  },
  {
    icon: Vote,
    title: 'Vote on Issues',
    description: 'Support or oppose proposals that affect your community.',
    color: 'text-kenya-red',
  },
  {
    icon: Users,
    title: 'Connect with Leaders',
    description: 'See which representatives support your proposals.',
    color: 'text-kenya-black',
  },
  {
    icon: BarChart3,
    title: 'Track Progress',
    description: 'Monitor how proposals move through the legislative process.',
    color: 'text-kenya-green',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'Access all voting records and proposal outcomes publicly.',
    color: 'text-kenya-red',
  },
  {
    icon: CheckCircle,
    title: 'Real Impact',
    description: 'Your votes influence what gets presented to parliament.',
    color: 'text-kenya-black',
  },
];

const stats = [
  { label: 'Active Proposals', value: '1,247', color: 'text-kenya-green' },
  { label: 'Total Votes Cast', value: '45,892', color: 'text-kenya-red' },
  { label: 'Registered Citizens', value: '23,456', color: 'text-kenya-black' },
  { label: 'Proposals Passed', value: '89', color: 'text-kenya-green' },
];

export function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kenya-green to-kenya-green-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-white">Your Voice in Kenyan Governance</h1>
            <p className="text-xl text-white/90">
              Wananchi Voice empowers every Kenyan citizen to participate directly in shaping policies and decisions. Submit proposals, vote on issues, and hold leaders accountable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/proposals/new">
                <Button size="lg" className="bg-white text-kenya-green hover:bg-gray-100">
                  Submit Proposal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/proposals">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Proposals
                </Button>
              </Link>
              <Link to="/vote">
                <Button size="lg" className="bg-kenya-red hover:bg-kenya-red-dark text-white">
                  Vote Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6 text-center">
                <div className={`text-3xl mb-2 ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Trending Proposals */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2>Trending Proposals</h2>
            <p className="text-gray-600">Most active proposals this week</p>
          </div>
          <Link to="/proposals">
            <Button variant="outline">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {trendingProposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2>How It Works</h2>
            <p className="text-gray-600 mt-2">
              Transparent, accessible, and designed for every Kenyan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-2 hover:border-kenya-green transition-colors">
                  <CardHeader>
                    <div className={`${feature.color} mb-4`}>
                      <Icon className="h-12 w-12" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-kenya-red to-kenya-red-dark text-white">
          <CardContent className="py-12 text-center">
            <h2 className="text-white mb-4">Ready to Make Your Voice Heard?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of Kenyans already participating in shaping the future of our nation. Every proposal, every vote, every voice counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/proposals/new">
                <Button size="lg" className="bg-white text-kenya-red hover:bg-gray-100">
                  Submit Your First Proposal
                </Button>
              </Link>
              <Link to="/transparency">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Transparency Dashboard
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
