import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { ProposalCard } from '../components/ProposalCard';
import { Badge } from '../components/ui/badge';
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062416] via-[#0a3822] to-[#041a10] py-20 md:py-28 border-b border-white/5">
        {/* Subtle mesh background element */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge className="bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-3 py-1 font-semibold tracking-wide text-xs uppercase rounded-full shadow-none mb-2">
              🇰🇪 Official Citizen Dialogue Portal
            </Badge>
            
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight" style={{ color: '#ffffff' }}>
              Your Voice in <span className="text-emerald-400" style={{ color: '#34d399' }}>Kenyan Governance</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto" style={{ color: '#cbd5e1' }}>
              Wananchi Voice empowers every citizen across all Wards and Constituencies to directly submit proposals, vote on national reforms, and track legislative responses from demographic leaders.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/proposals/new">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 shadow-lg shadow-emerald-500/20">
                  Submit Proposal
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/proposals">
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8 backdrop-blur-sm">
                  View Proposals
                </Button>
              </Link>
              <Link to="/vote">
                <Button size="lg" className="bg-kenya-red hover:bg-kenya-red-dark text-white font-bold px-8 shadow-md">
                  Vote Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Container wrapped in a div with top/bottom padding to ensure clear separation */}
      <div className="w-full pt-16 pb-8">
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white shadow-sm border border-slate-100">
                <CardContent className="py-8 text-center">
                  <div className={`text-3xl font-extrabold mb-2 ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

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
        <div className="flex flex-col gap-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="group relative flex flex-col h-full bg-white border border-slate-100 border-l-[5px] border-l-kenya-green hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 rounded-xl overflow-hidden">
                  <CardHeader className="p-6">
                    <div className={`${feature.color} mb-3 group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-base font-bold text-gray-900 mb-1.5">{feature.title}</CardTitle>
                    <CardDescription className="text-xs text-gray-500 leading-relaxed">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-[#0f172a] to-[#020617] border border-slate-800 text-white relative overflow-hidden shadow-2xl rounded-2xl">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-kenya-red/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
          
          <CardContent className="py-12 md:py-16 text-center relative z-10 space-y-6">
            <h2 className="text-white text-2xl md:text-4xl font-extrabold tracking-tight">Ready to Make Your Voice Heard?</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Join thousands of active Kenyans already participating in direct democratic dialogue. Every constructive proposal and cast vote builds a stronger, more accountable nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link to="/proposals/new">
                <Button size="lg" className="bg-kenya-red hover:bg-kenya-red-dark text-white font-bold px-8 shadow-lg shadow-red-500/10">
                  Submit Your First Proposal
                </Button>
              </Link>
              <Link to="/transparency">
                <Button size="lg" variant="outline" className="border-slate-800 text-slate-300 hover:text-white hover:bg-white/5 font-bold px-8">
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
