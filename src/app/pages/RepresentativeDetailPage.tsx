import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockRepresentatives } from './RepresentativesPage';
import { mockProposals } from './ProposalsPage';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Textarea } from '../components/ui/textarea';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { 
  ArrowLeft, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  CheckCircle, 
  MessageSquare, 
  TrendingUp, 
  ExternalLink 
} from 'lucide-react';
import { toast } from 'sonner';

export function RepresentativeDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [sent, setSent] = useState(false);

  const representative = mockRepresentatives.find((rep) => rep.id === id);

  if (!representative) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2>Leader Not Found</h2>
        <p className="text-gray-600 mt-2">The representative you are looking for does not exist.</p>
        <Link to="/representatives" className="mt-4 inline-block text-kenya-green hover:underline">
          Back to Representatives
        </Link>
      </div>
    );
  }

  // Filter proposals sponsored/represented by this leader
  const sponsoredProposals = mockProposals.filter(
    (proposal) => proposal.representative === representative.name
  );

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (subject.trim() && message.trim()) {
      setSent(true);
      toast.success('Your message has been sent to the representative!');
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link to="/representatives" className="inline-flex items-center gap-2 text-kenya-green hover:underline mb-6">
        <ArrowLeft className="h-4 w-4" />
        Back to Representatives
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile Card */}
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-8 text-center">
              <Avatar className="h-32 w-32 mx-auto mb-4 border-2 border-kenya-green/20">
                <AvatarImage src={representative.image} alt={representative.name} />
                <AvatarFallback className="bg-kenya-green text-white text-xl">
                  {getInitials(representative.name)}
                </AvatarFallback>
              </Avatar>

              <h2 className="text-2xl font-bold mb-1">{representative.name}</h2>
              <Badge className="bg-kenya-green hover:bg-kenya-green-dark text-white mb-4">
                {representative.title}
              </Badge>

              {representative.party && (
                <p className="text-gray-700 font-medium mb-3">{representative.party}</p>
              )}

              <div className="flex items-center gap-2 justify-center text-gray-600 mb-6 text-sm">
                <MapPin className="h-4 w-4 shrink-0 text-kenya-green" />
                <span>{representative.region}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-4 my-6">
                <div>
                  <div className="text-3xl font-bold text-kenya-green">{representative.proposalsRepresented}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Proposals Sponsered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-kenya-green">{representative.presentationHistory}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Assembly Tabled</div>
                </div>
              </div>

              <div className="space-y-3 text-left text-sm text-gray-600">
                {representative.email && (
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-kenya-green shrink-0" />
                    <span className="truncate">{representative.email}</span>
                  </div>
                )}
                {representative.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-kenya-green shrink-0" />
                    <span>{representative.phone}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Assembly Updates */}
          <Card>
            <CardHeader>
              <CardTitle>Assembly Updates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-lg text-sm">
                <div className="font-semibold mb-1 text-kenya-green">Presented Bill Proposal #1</div>
                <p className="text-gray-600">Tabled the rural healthcare clinic proposal to the Health Committee.</p>
                <div className="text-xs text-gray-400 mt-2">2 days ago</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg text-sm">
                <div className="font-semibold mb-1 text-kenya-green">CDF Budget Allocations</div>
                <p className="text-gray-600">Released the Westlands sub-county healthcare bursary metrics.</p>
                <div className="text-xs text-gray-400 mt-2">1 week ago</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Bio, Message and Sponsoring Proposals */}
        <div className="lg:col-span-2 space-y-6">
          {/* Biography */}
          <Card>
            <CardHeader>
              <CardTitle>Biography & Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {representative.bio || 'This representative does not have a bio filled out yet. Supporting direct citizen policy making and legislative dialogue in the republic of Kenya.'}
              </p>
            </CardContent>
          </Card>

          {/* Proposals Sponsored */}
          <Card>
            <CardHeader>
              <CardTitle>Sponsored Proposals ({sponsoredProposals.length})</CardTitle>
              <CardDescription>Active citizen proposals managed by this representative</CardDescription>
            </CardHeader>
            <CardContent>
              {sponsoredProposals.length > 0 ? (
                <div className="space-y-4">
                  {sponsoredProposals.map((proposal) => (
                    <div key={proposal.id} className="p-4 border border-gray-100 rounded-lg hover:border-kenya-green transition-all flex items-start justify-between gap-4">
                      <div>
                        <Link to={`/proposal/${proposal.id}`} className="font-semibold text-gray-900 hover:text-kenya-green block mb-1">
                          {proposal.title}
                        </Link>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-2">{proposal.description}</p>
                        <div className="flex gap-2 items-center text-xs text-gray-400">
                          <Badge variant="outline" className="text-xs">{proposal.category}</Badge>
                          <span>·</span>
                          <span>{proposal.submittedDate}</span>
                        </div>
                      </div>
                      <Link to={`/proposal/${proposal.id}`}>
                        <Button size="sm" variant="ghost" className="text-kenya-green shrink-0">
                          View
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                  <p>No active proposals are currently sponsored by this leader.</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Direct Public Petition/Message Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-kenya-green" />
                Submit Direct Petition / Message
              </CardTitle>
              <CardDescription>Send a localized query or project request directly to this leader's legislative portal</CardDescription>
            </CardHeader>
            <CardContent>
              {!sent ? (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <Label htmlFor="subject">Subject / Issue Title</Label>
                    <Input 
                      id="subject" 
                      placeholder="e.g., Ward Road Maintenance Request" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Explain the issue, location details, and expected outcome in detail..." 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-kenya-green hover:bg-kenya-green-dark">
                    Send Petition Message
                  </Button>
                </form>
              ) : (
                <div className="p-6 bg-kenya-green/10 border border-kenya-green rounded-lg text-center">
                  <CheckCircle className="h-12 w-12 mx-auto text-kenya-green mb-3" />
                  <h4 className="font-bold text-kenya-green">Message Delivered</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Your message has been logged in the representative's public participation portal. You will receive updates via your dashboard notifications.
                  </p>
                  <Button variant="outline" className="mt-4" onClick={() => { setSent(false); setSubject(''); setMessage(''); }}>
                    Send Another Message
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
