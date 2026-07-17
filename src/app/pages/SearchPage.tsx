import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import { Search, FileText, Users, Building2, TrendingUp } from 'lucide-react';

const mockProposalResults = [
  {
    id: '1',
    type: 'proposal',
    title: 'Improve Healthcare Access in Rural Areas',
    excerpt: 'Proposal to establish mobile health clinics in underserved rural communities...',
    category: 'Healthcare',
    votes: 5415,
  },
  {
    id: '2',
    type: 'proposal',
    title: 'Youth Employment Initiative - Tech Training',
    excerpt: 'Create technology training centers in all 47 counties...',
    category: 'Education',
    votes: 4347,
  },
];

const mockRepresentativeResults = [
  {
    id: '1',
    type: 'representative',
    name: 'Hon. Dr. Jane Mwangi',
    title: 'MP',
    region: 'Westlands Constituency',
    proposals: 23,
  },
  {
    id: '2',
    type: 'representative',
    name: 'Hon. Peter Kariuki',
    title: 'Senator',
    region: 'Kiambu County',
    proposals: 18,
  },
];

const mockPolicyResults = [
  {
    id: '1',
    type: 'policy',
    title: 'National Healthcare Policy 2025',
    ministry: 'Ministry of Health',
    status: 'Active',
  },
  {
    id: '2',
    type: 'policy',
    title: 'Digital Literacy Program',
    ministry: 'Ministry of ICT',
    status: 'Under Review',
  },
];

const recentSearches = [
  'Healthcare reform',
  'Youth employment',
  'Infrastructure Nairobi',
  'Education policy',
];

const trendingSearches = [
  'Clean water initiative',
  'Road safety',
  'School meals program',
  'Solar energy subsidies',
];

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const hasResults = searchQuery.length > 0;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="mb-4">Search</h1>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search proposals, representatives, and policies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg"
              autoFocus
            />
          </div>
        </div>

        {!hasResults ? (
          <div className="space-y-8">
            {/* Recent Searches */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {recentSearches.map((search, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setSearchQuery(search)}
                    >
                      {search}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Trending Searches */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Trending Searches
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {trendingSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(search)}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400">{index + 1}</span>
                        <span>{search}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {Math.floor(Math.random() * 500) + 100} searches
                      </Badge>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Access</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/proposals">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Browse All Proposals
                    </Button>
                  </Link>
                  <Link to="/representatives">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      View Representatives
                    </Button>
                  </Link>
                  <Link to="/transparency">
                    <Button variant="outline" className="w-full justify-start">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Transparency Dashboard
                    </Button>
                  </Link>
                  <Link to="/proposals/new">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="mr-2 h-4 w-4" />
                      Submit Proposal
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div>
            {/* Search Results */}
            <div className="mb-4 text-gray-600">
              Found {mockProposalResults.length + mockRepresentativeResults.length + mockPolicyResults.length} results for "{searchQuery}"
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="all">
                  All Results ({mockProposalResults.length + mockRepresentativeResults.length + mockPolicyResults.length})
                </TabsTrigger>
                <TabsTrigger value="proposals">
                  Proposals ({mockProposalResults.length})
                </TabsTrigger>
                <TabsTrigger value="representatives">
                  Representatives ({mockRepresentativeResults.length})
                </TabsTrigger>
                <TabsTrigger value="policies">
                  Policies ({mockPolicyResults.length})
                </TabsTrigger>
              </TabsList>

              {/* All Results */}
              <TabsContent value="all" className="space-y-4 mt-6">
                {/* Proposals */}
                {mockProposalResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <Link to={`/proposal/${result.id}`}>
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <FileText className="h-5 w-5 text-kenya-green" />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2 hover:text-kenya-green transition-colors">
                              {result.title}
                            </h3>
                            <p className="text-gray-600 mb-3">{result.excerpt}</p>
                            <div className="flex items-center gap-3 text-sm">
                              <Badge variant="outline">{result.category}</Badge>
                              <span className="text-gray-600">{result.votes} votes</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}

                {/* Representatives */}
                {mockRepresentativeResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <Link to={`/representative/${result.id}`}>
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-kenya-green text-white">
                              {result.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="mb-1 hover:text-kenya-green transition-colors">
                              {result.name}
                            </h3>
                            <p className="text-gray-600 mb-2">{result.title}</p>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <span>{result.region}</span>
                              <span>•</span>
                              <span>{result.proposals} proposals</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}

                {/* Policies */}
                {mockPolicyResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <Building2 className="h-5 w-5 text-kenya-red" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-2">{result.title}</h3>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-gray-600">{result.ministry}</span>
                            <Badge
                              className={
                                result.status === 'Active'
                                  ? 'bg-kenya-green'
                                  : 'bg-blue-500'
                              }
                            >
                              {result.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Proposals Only */}
              <TabsContent value="proposals" className="space-y-4 mt-6">
                {mockProposalResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <Link to={`/proposal/${result.id}`}>
                        <div className="flex items-start gap-4">
                          <FileText className="h-5 w-5 text-kenya-green mt-1" />
                          <div className="flex-1">
                            <h3 className="mb-2 hover:text-kenya-green transition-colors">
                              {result.title}
                            </h3>
                            <p className="text-gray-600 mb-3">{result.excerpt}</p>
                            <div className="flex items-center gap-3 text-sm">
                              <Badge variant="outline">{result.category}</Badge>
                              <span className="text-gray-600">{result.votes} votes</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Representatives Only */}
              <TabsContent value="representatives" className="space-y-4 mt-6">
                {mockRepresentativeResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <Link to={`/representative/${result.id}`}>
                        <div className="flex items-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-kenya-green text-white">
                              {result.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="mb-1 hover:text-kenya-green transition-colors">
                              {result.name}
                            </h3>
                            <p className="text-gray-600 mb-2">{result.title}</p>
                            <div className="flex items-center gap-3 text-sm text-gray-600">
                              <span>{result.region}</span>
                              <span>•</span>
                              <span>{result.proposals} proposals</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* Policies Only */}
              <TabsContent value="policies" className="space-y-4 mt-6">
                {mockPolicyResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Building2 className="h-5 w-5 text-kenya-red mt-1" />
                        <div className="flex-1">
                          <h3 className="mb-2">{result.title}</h3>
                          <div className="flex items-center gap-3 text-sm">
                            <span className="text-gray-600">{result.ministry}</span>
                            <Badge
                              className={
                                result.status === 'Active'
                                  ? 'bg-kenya-green'
                                  : 'bg-blue-500'
                              }
                            >
                              {result.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
