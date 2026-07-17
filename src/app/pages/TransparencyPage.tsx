import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { useState } from 'react';
import { Eye, TrendingUp, CheckCircle, XCircle, Clock } from 'lucide-react';

// Mock data
const outcomesData = [
  { name: 'Passed', value: 89, color: '#006600' },
  { name: 'Rejected', value: 34, color: '#BB0000' },
  { name: 'Pending', value: 234, color: '#F59E0B' },
];

const monthlyOutcomesData = [
  { month: 'May', passed: 8, rejected: 3, pending: 42 },
  { month: 'Jun', passed: 12, rejected: 5, pending: 38 },
  { month: 'Jul', passed: 10, rejected: 4, pending: 41 },
  { month: 'Aug', passed: 15, rejected: 6, pending: 35 },
  { month: 'Sep', passed: 14, rejected: 5, pending: 33 },
  { month: 'Oct', passed: 17, rejected: 7, pending: 29 },
  { month: 'Nov', passed: 13, rejected: 4, pending: 16 },
];

const topProposals = [
  { id: '1', title: 'Clean Water Initiative', votes: 8234, support: 94, status: 'Passed' },
  { id: '2', title: 'Youth Tech Training', votes: 7891, support: 89, status: 'Presented' },
  { id: '3', title: 'Rural Healthcare Access', votes: 7523, support: 87, status: 'Under Review' },
  { id: '4', title: 'Road Safety Measures', votes: 6341, support: 86, status: 'Under Review' },
  { id: '5', title: 'School Meals Expansion', votes: 5234, support: 72, status: 'Rejected' },
];

const regionalActivityData = [
  { region: 'Nairobi', proposals: 156, votes: 12450 },
  { region: 'Kiambu', proposals: 98, votes: 8920 },
  { region: 'Mombasa', proposals: 87, votes: 7650 },
  { region: 'Kisumu', proposals: 76, votes: 6780 },
  { region: 'Nakuru', proposals: 92, votes: 8340 },
  { region: 'Machakos', proposals: 65, votes: 5890 },
];

const ministryData = [
  { ministry: 'Health', proposals: 78, avgSupport: 84 },
  { ministry: 'Education', proposals: 65, avgSupport: 79 },
  { ministry: 'Infrastructure', proposals: 92, avgSupport: 81 },
  { ministry: 'ICT', proposals: 54, avgSupport: 86 },
  { ministry: 'Agriculture', proposals: 52, avgSupport: 77 },
  { ministry: 'Energy', proposals: 48, avgSupport: 82 },
];

const participationTrendData = [
  { date: '2025-05', citizens: 12340, votes: 24500 },
  { date: '2025-06', citizens: 14230, votes: 31200 },
  { date: '2025-07', citizens: 16120, votes: 28800 },
  { date: '2025-08', citizens: 18900, votes: 41000 },
  { date: '2025-09', citizens: 20450, votes: 39000 },
  { date: '2025-10', citizens: 22340, votes: 48000 },
  { date: '2025-11', citizens: 23456, votes: 52000 },
];

export function TransparencyPage() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedMinistry, setSelectedMinistry] = useState('All Ministries');

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <Eye className="h-8 w-8 text-kenya-green" />
          <h1>Public Transparency Dashboard</h1>
        </div>
        <p className="text-gray-600">
          Open access to all governance data, voting results, and policy outcomes
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-kenya-green" />
              <div>
                <p className="text-2xl text-kenya-green">89</p>
                <p className="text-xs text-gray-600">Proposals Passed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <XCircle className="h-8 w-8 text-kenya-red" />
              <div>
                <p className="text-2xl text-kenya-red">34</p>
                <p className="text-xs text-gray-600">Proposals Rejected</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl text-yellow-600">234</p>
                <p className="text-xs text-gray-600">Pending Review</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-kenya-green" />
              <div>
                <p className="text-2xl">52K</p>
                <p className="text-xs text-gray-600">Votes This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Eye className="h-8 w-8 text-kenya-green" />
              <div>
                <p className="text-2xl">23.4K</p>
                <p className="text-xs text-gray-600">Active Citizens</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Filter by Region</label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Regions">All Regions</SelectItem>
                  <SelectItem value="Nairobi">Nairobi</SelectItem>
                  <SelectItem value="Mombasa">Mombasa</SelectItem>
                  <SelectItem value="Kisumu">Kisumu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-2 block">Filter by Ministry</label>
              <Select value={selectedMinistry} onValueChange={setSelectedMinistry}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Ministries">All Ministries</SelectItem>
                  <SelectItem value="Health">Ministry of Health</SelectItem>
                  <SelectItem value="Education">Ministry of Education</SelectItem>
                  <SelectItem value="Infrastructure">Ministry of Transport</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="outcomes" className="space-y-6">
        <TabsList>
          <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
          <TabsTrigger value="participation">Participation</TabsTrigger>
          <TabsTrigger value="regional">Regional Data</TabsTrigger>
          <TabsTrigger value="top">Top Proposals</TabsTrigger>
        </TabsList>

        {/* Outcomes Tab */}
        <TabsContent value="outcomes" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Overall Proposal Outcomes</CardTitle>
                <CardDescription>Distribution of all proposal results</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={outcomesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {outcomesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Outcomes Trend</CardTitle>
                <CardDescription>Track proposal resolutions over time</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={monthlyOutcomesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="passed" stackId="1" stroke="#006600" fill="#006600" name="Passed" />
                    <Area type="monotone" dataKey="rejected" stackId="1" stroke="#BB0000" fill="#BB0000" name="Rejected" />
                    <Area type="monotone" dataKey="pending" stackId="1" stroke="#F59E0B" fill="#F59E0B" name="Pending" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Ministry Performance</CardTitle>
                <CardDescription>Average support and proposal volume by ministry</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={ministryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ministry" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="proposals" fill="#006600" name="Total Proposals" />
                    <Bar yAxisId="right" dataKey="avgSupport" fill="#BB0000" name="Avg Support %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Participation Tab */}
        <TabsContent value="participation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Citizen Participation Growth</CardTitle>
              <CardDescription>Track registered citizens and voting activity</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={participationTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line
                    yAxisId="left"
                    type="monotone"
                    dataKey="citizens"
                    stroke="#006600"
                    strokeWidth={3}
                    name="Registered Citizens"
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="votes"
                    stroke="#BB0000"
                    strokeWidth={3}
                    name="Total Votes Cast"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Regional Data Tab */}
        <TabsContent value="regional" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Regional Activity Comparison</CardTitle>
              <CardDescription>Proposals and voting participation by region</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={regionalActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="region" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="proposals" fill="#006600" name="Proposals Submitted" />
                  <Bar yAxisId="right" dataKey="votes" fill="#BB0000" name="Total Votes" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Top Proposals Tab */}
        <TabsContent value="top" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Top Proposals by Vote Count</CardTitle>
              <CardDescription>Most engaged proposals across all categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProposals.map((proposal, index) => (
                  <div
                    key={proposal.id}
                    className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-kenya-green transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-kenya-green text-white flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-1">{proposal.title}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{proposal.votes.toLocaleString()} votes</span>
                        <span className="text-kenya-green">{proposal.support}% support</span>
                      </div>
                    </div>
                    <div>
                      {proposal.status === 'Passed' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-kenya-green text-white">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {proposal.status}
                        </span>
                      )}
                      {proposal.status === 'Rejected' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-kenya-red text-white">
                          <XCircle className="h-3 w-3 mr-1" />
                          {proposal.status}
                        </span>
                      )}
                      {(proposal.status === 'Presented' || proposal.status === 'Under Review') && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                          <Clock className="h-3 w-3 mr-1" />
                          {proposal.status}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
