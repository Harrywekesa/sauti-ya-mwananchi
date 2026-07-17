import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Textarea } from '../components/ui/textarea';
import { Progress } from '../components/ui/progress';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Separator } from '../components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import {
  ThumbsUp,
  ThumbsDown,
  MessageSquare,
  Calendar,
  MapPin,
  Building2,
  User,
  CheckCircle,
  Clock,
  ArrowLeft,
  FileText,
} from 'lucide-react';

// Mock data - in real app, this would come from API
const mockProposal = {
  id: '1',
  title: 'Improve Healthcare Access in Rural Areas',
  description: 'This proposal aims to establish mobile health clinics in underserved rural communities across Kenya. The mobile clinics will provide essential healthcare services including vaccinations, maternal health care, HIV/AIDS testing and treatment, and general medical consultations. Each clinic will be staffed with qualified nurses, clinical officers, and will have regular visits from doctors. The initiative will initially target 10 counties with the lowest healthcare access rates and expand based on success metrics.',
  category: 'Healthcare',
  region: 'Nationwide',
  ministry: 'Ministry of Health',
  status: 'reviewed',
  yesVotes: 4523,
  noVotes: 892,
  submittedDate: 'Nov 5, 2025',
  submittedBy: 'John Kamau',
  representative: {
    id: '1',
    name: 'Hon. Dr. Jane Mwangi',
    title: 'MP - Health Committee Chair',
    image: undefined,
  },
  timeline: [
    { stage: 'Submitted', date: 'Nov 5, 2025', status: 'completed' },
    { stage: 'Under Review', date: 'Nov 7, 2025', status: 'completed' },
    { stage: 'Assigned to Representative', date: 'Nov 9, 2025', status: 'current' },
    { stage: 'Presentation to House', date: 'Pending', status: 'pending' },
    { stage: 'Final Vote', date: 'Pending', status: 'pending' },
  ],
  comments: [
    {
      id: '1',
      author: 'Mary Wanjiku',
      content: 'This is an excellent proposal! Rural communities desperately need better healthcare access.',
      date: 'Nov 6, 2025',
      isAnonymous: false,
    },
    {
      id: '2',
      author: 'Anonymous',
      content: 'How will the mobile clinics be funded? We need more details on the budget.',
      date: 'Nov 7, 2025',
      isAnonymous: true,
    },
    {
      id: '3',
      author: 'David Omondi',
      content: 'My village would benefit greatly from this. Fully support!',
      date: 'Nov 8, 2025',
      isAnonymous: false,
    },
  ],
};

export function ProposalDetailPage() {
  const { id } = useParams();
  const [vote, setVote] = useState<'yes' | 'no' | null>(null);
  const [comment, setComment] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  const proposal = mockProposal; // In real app, fetch by id
  const totalVotes = proposal.yesVotes + proposal.noVotes;
  const yesPercentage = (proposal.yesVotes / totalVotes) * 100;

  const handleSubmitVote = () => {
    if (vote) {
      setHasVoted(true);
      // In real app, submit vote to backend
    }
  };

  const handleSubmitComment = () => {
    if (comment.trim()) {
      // In real app, submit comment to backend
      setComment('');
    }
  };

  const statusStyles: Record<string, string> = {
    submitted: 'bg-slate-100 text-slate-800 border border-slate-200/60 shadow-none',
    reviewed: 'bg-amber-50 text-amber-700 border border-amber-200/60 shadow-none',
    presented: 'bg-blue-50 text-blue-700 border border-blue-200/60 shadow-none',
    passed: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-none',
    rejected: 'bg-rose-50 text-rose-700 border border-rose-200/60 shadow-none',
  };

  const statusLabels: Record<string, string> = {
    submitted: 'Submitted',
    reviewed: 'Under Review',
    presented: 'Presented to House',
    passed: 'Policy Passed',
    rejected: 'Policy Rejected',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <Link to="/proposals" className="inline-flex items-center gap-2 text-kenya-green hover:underline mb-6 font-semibold">
        <ArrowLeft className="h-4 w-4" />
        Back to Proposals
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Proposal Header */}
          <Card>
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-2">{proposal.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 font-semibold">
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4 text-kenya-green" />
                      <span>Submitted by {proposal.submittedBy}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-kenya-green" />
                      <span>{proposal.submittedDate}</span>
                    </div>
                  </div>
                </div>
                <Badge className={`${statusStyles[proposal.status]} rounded-full font-medium py-1 px-3 text-xs capitalize`}>
                  {statusLabels[proposal.status]}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Meta Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-kenya-green" />
                  <div>
                    <div className="text-xs text-gray-600">Region</div>
                    <div>{proposal.region}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-kenya-green" />
                  <div>
                    <div className="text-xs text-gray-600">Ministry</div>
                    <div className="text-sm">{proposal.ministry}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-kenya-green" />
                  <div>
                    <div className="text-xs text-gray-600">Category</div>
                    <div className="text-sm">{proposal.category}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="mb-3">Proposal Details</h3>
                <p className="text-gray-700 leading-relaxed">{proposal.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Voting Section */}
          <Card>
            <CardHeader>
              <CardTitle>Cast Your Vote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Voting Progress */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Current Results</span>
                  <span className="text-sm text-gray-600">{totalVotes} total votes</span>
                </div>
                <Progress value={yesPercentage} className="h-3" />
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <ThumbsUp className="h-4 w-4 text-kenya-green" />
                    <span className="text-kenya-green">{proposal.yesVotes} Yes ({yesPercentage.toFixed(1)}%)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ThumbsDown className="h-4 w-4 text-kenya-red" />
                    <span className="text-kenya-red">{proposal.noVotes} No ({(100 - yesPercentage).toFixed(1)}%)</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Vote Selection */}
              {!hasVoted ? (
                <div className="space-y-4">
                  <RadioGroup value={vote || ''} onValueChange={(v) => setVote(v as 'yes' | 'no')}>
                    <div className="flex items-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-kenya-green transition-colors cursor-pointer">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="h-5 w-5 text-kenya-green" />
                          <span>Yes, I support this proposal</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 border-2 border-gray-200 rounded-lg hover:border-kenya-red transition-colors cursor-pointer">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <ThumbsDown className="h-5 w-5 text-kenya-red" />
                          <span>No, I oppose this proposal</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                  <Button
                    onClick={handleSubmitVote}
                    disabled={!vote}
                    className="w-full bg-kenya-green hover:bg-kenya-green-dark"
                  >
                    Submit Vote
                  </Button>
                </div>
              ) : (
                <div className="p-4 bg-kenya-green/10 border border-kenya-green rounded-lg">
                  <div className="flex items-center gap-2 text-kenya-green">
                    <CheckCircle className="h-5 w-5" />
                    <span>Thank you! Your vote has been recorded.</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Comments ({proposal.comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add Comment */}
              <div className="space-y-3">
                <Textarea
                  placeholder="Share your thoughts on this proposal..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={3}
                />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="rounded"
                    />
                    <Label htmlFor="anonymous" className="text-sm cursor-pointer">
                      Comment anonymously
                    </Label>
                  </div>
                  <Button onClick={handleSubmitComment} disabled={!comment.trim()}>
                    Post Comment
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Comments List */}
              <div className="space-y-4">
                {proposal.comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {comment.isAnonymous ? '?' : comment.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm">{comment.author}</span>
                        <span className="text-xs text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Representative */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Assigned Representative</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-16 w-16 mb-3 border-2 border-kenya-green/10 shadow-sm">
                  <AvatarImage src={proposal.representative.image} />
                  <AvatarFallback className="bg-gradient-to-tr from-kenya-green to-kenya-green-dark text-white font-bold">
                    {proposal.representative.name.replace(/^(Hon\.|CS|Dr\.)\s+/g, '').split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <div className="font-bold text-gray-900 mb-1">{proposal.representative.name}</div>
                <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">{proposal.representative.title}</p>
                <Link to={`/representative/${proposal.representative.id}`} className="w-full">
                  <Button variant="outline" size="sm" className="w-full text-xs font-semibold">
                    View Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Proposal Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proposal.timeline.map((stage, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`rounded-full h-8 w-8 flex items-center justify-center ${
                          stage.status === 'completed'
                            ? 'bg-kenya-green text-white'
                            : stage.status === 'current'
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-400'
                        }`}
                      >
                        {stage.status === 'completed' ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : stage.status === 'current' ? (
                          <Clock className="h-4 w-4" />
                        ) : (
                          <div className="h-2 w-2 rounded-full bg-gray-400" />
                        )}
                      </div>
                      {index < proposal.timeline.length - 1 && (
                        <div className={`w-0.5 h-12 ${stage.status === 'completed' ? 'bg-kenya-green' : 'bg-gray-200'}`} />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="text-sm">{stage.stage}</div>
                      <div className="text-xs text-gray-600">{stage.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
