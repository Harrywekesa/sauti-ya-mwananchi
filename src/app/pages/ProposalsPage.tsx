import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProposalCard } from '../components/ProposalCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { Search, Filter, Plus } from 'lucide-react';

export const mockProposals = [
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
  {
    id: '5',
    title: 'Renewable Energy Subsidy Program',
    description: 'Provide subsidies for solar panel installation in rural households.',
    category: 'Energy & Environment',
    region: 'Nationwide',
    ministry: 'Ministry of Energy',
    status: 'reviewed' as const,
    yesVotes: 3456,
    noVotes: 678,
    comments: 189,
    submittedDate: 'Nov 9, 2025',
  },
  {
    id: '6',
    title: 'Free School Meals Program Expansion',
    description: 'Expand free school meals to all primary schools in arid and semi-arid regions.',
    category: 'Education',
    region: 'ASAL Counties',
    ministry: 'Ministry of Education',
    status: 'rejected' as const,
    yesVotes: 1234,
    noVotes: 3456,
    comments: 421,
    submittedDate: 'Oct 15, 2025',
  },
];

const regions = ['All Regions', 'Nairobi County', 'Mombasa County', 'Kisumu County', 'Nakuru County', 'Coast Region', 'ASAL Counties', 'Nationwide'];
const ministries = ['All Ministries', 'Ministry of Health', 'Ministry of Education', 'Ministry of Transport', 'Ministry of ICT', 'Ministry of Water', 'Ministry of Energy'];
const statuses = ['All Statuses', 'submitted', 'reviewed', 'presented', 'passed', 'rejected'];
const categories = ['All Categories', 'Healthcare', 'Education', 'Infrastructure', 'Energy & Environment', 'Education & Employment'];

export function ProposalsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedMinistry, setSelectedMinistry] = useState('All Ministries');
  const [selectedStatus, setSelectedStatus] = useState('All Statuses');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const filteredProposals = mockProposals.filter((proposal) => {
    const matchesSearch = proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         proposal.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'All Regions' || proposal.region === selectedRegion;
    const matchesMinistry = selectedMinistry === 'All Ministries' || proposal.ministry === selectedMinistry;
    const matchesStatus = selectedStatus === 'All Statuses' || proposal.status === selectedStatus;
    const matchesCategory = selectedCategory === 'All Categories' || proposal.category === selectedCategory;

    return matchesSearch && matchesRegion && matchesMinistry && matchesStatus && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
        <div>
          <h1>All Proposals</h1>
          <p className="text-gray-600 mt-2">
            Browse and vote on citizen proposals from across Kenya
          </p>
        </div>
        <Link to="/proposals/new">
          <Button className="bg-kenya-green hover:bg-kenya-green-dark">
            <Plus className="mr-2 h-4 w-4" />
            Submit Proposal
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card className="mb-8 border border-slate-100 shadow-sm">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search proposals..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Selects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Region</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Ministry</label>
                <Select value={selectedMinistry} onValueChange={setSelectedMinistry}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {ministries.map((ministry) => (
                      <SelectItem key={ministry} value={ministry}>
                        {ministry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Status</label>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>
                        {status === 'All Statuses' ? status : status.charAt(0).toUpperCase() + status.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm text-gray-600 mb-2 block">Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters Info */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>Showing {filteredProposals.length} of {mockProposals.length} proposals</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Proposals List */}
      {filteredProposals.length > 0 ? (
        <div className="flex flex-col gap-4">
          {filteredProposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-600">No proposals found matching your filters.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('All Regions');
                setSelectedMinistry('All Ministries');
                setSelectedStatus('All Statuses');
                setSelectedCategory('All Categories');
              }}
            >
              Clear Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
