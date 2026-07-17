import { useState } from 'react';
import { RepresentativeCard } from '../components/RepresentativeCard';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { Search } from 'lucide-react';

export const mockRepresentatives = [
  {
    id: '1',
    name: 'Hon. Dr. Jane Mwangi',
    title: 'MP',
    region: 'Westlands Constituency, Nairobi',
    party: 'Jubilee Party',
    image: undefined,
    bio: 'Passionate about healthcare reform and community development. Serving the people of Westlands since 2017.',
    email: 'jane.mwangi@parliament.go.ke',
    phone: '+254 700 111 222',
    proposalsRepresented: 23,
    presentationHistory: 15,
  },
  {
    id: '2',
    name: 'Hon. Peter Kariuki',
    title: 'MP',
    region: 'Kikuyu Constituency, Kiambu',
    party: 'UDA',
    image: undefined,
    bio: 'Champion of youth empowerment and ICT innovation. Working to bring digital literacy to every household.',
    email: 'peter.kariuki@parliament.go.ke',
    phone: '+254 700 222 333',
    proposalsRepresented: 18,
    presentationHistory: 12,
  },
  {
    id: '3',
    name: 'Hon. Mary Odhiambo',
    title: 'Women Rep',
    region: 'Kisumu County',
    party: 'ODM',
    image: undefined,
    bio: 'Dedicated to advancing women\'s rights, gender equality, and economic empowerment across Kisumu.',
    email: 'mary.odhiambo@parliament.go.ke',
    phone: '+254 700 333 444',
    proposalsRepresented: 31,
    presentationHistory: 22,
  },
  {
    id: '4',
    name: 'Hon. Ali Hassan',
    title: 'Governor',
    region: 'Mombasa County',
    party: 'ODM',
    image: undefined,
    bio: 'Focused on infrastructure development, tourism promotion, and coastal region economic growth.',
    proposalsRepresented: 45,
    presentationHistory: 28,
  },
  {
    id: '5',
    name: 'Hon. Grace Wambui',
    title: 'MCA',
    region: 'Parklands Ward, Nairobi',
    party: 'Jubilee Party',
    image: undefined,
    bio: 'Community leader working on local infrastructure, security, and waste management improvements.',
    email: 'grace.wambui@nairobi.go.ke',
    phone: '+254 700 444 555',
    proposalsRepresented: 12,
    presentationHistory: 8,
  },
  {
    id: '6',
    name: 'Hon. David Kimani',
    title: 'Senator',
    region: 'Nakuru County',
    party: 'UDA',
    image: undefined,
    bio: 'Advocate for agricultural development, farmer support programs, and rural infrastructure.',
    proposalsRepresented: 27,
    presentationHistory: 19,
  },
  {
    id: '7',
    name: 'CS Dr. Margaret Kobia',
    title: 'Minister',
    region: 'Ministry of Health',
    party: undefined,
    image: undefined,
    bio: 'Leading national healthcare policy and ensuring quality health services for all Kenyans.',
    proposalsRepresented: 56,
    presentationHistory: 34,
  },
  {
    id: '8',
    name: 'Hon. James Omondi',
    title: 'MP',
    region: 'Migori Constituency',
    party: 'ODM',
    image: undefined,
    bio: 'Fighting for better education facilities, teacher welfare, and student scholarship programs.',
    email: 'james.omondi@parliament.go.ke',
    proposalsRepresented: 19,
    presentationHistory: 11,
  },
];

const titles = ['All Positions', 'MCA', 'MP', 'Women Rep', 'Senator', 'Governor', 'Minister'];
const regions = ['All Regions', 'Nairobi', 'Kiambu', 'Kisumu', 'Mombasa', 'Nakuru', 'Migori'];

export function RepresentativesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('All Positions');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const filteredRepresentatives = mockRepresentatives.filter((rep) => {
    const matchesSearch =
      rep.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rep.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTitle = selectedTitle === 'All Positions' || rep.title === selectedTitle;
    const matchesRegion =
      selectedRegion === 'All Regions' || rep.region.includes(selectedRegion);

    return matchesSearch && matchesTitle && matchesRegion;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1>Representatives</h1>
        <p className="text-gray-600 mt-2">
          Connect with elected leaders and see their work on behalf of citizens
        </p>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name or region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Selects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Position</label>
                <Select value={selectedTitle} onValueChange={setSelectedTitle}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {titles.map((title) => (
                      <SelectItem key={title} value={title}>
                        {title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

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
            </div>

            <p className="text-sm text-gray-600">
              Showing {filteredRepresentatives.length} of {mockRepresentatives.length} representatives
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Representatives Grid */}
      {filteredRepresentatives.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRepresentatives.map((representative) => (
            <RepresentativeCard key={representative.id} representative={representative} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-600">No representatives found matching your filters.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
