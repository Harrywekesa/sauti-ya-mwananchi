import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ThumbsUp, ThumbsDown, MessageSquare, Calendar, MapPin, Building2 } from 'lucide-react';

export interface Proposal {
  id: string;
  title: string;
  description: string;
  category: string;
  region: string;
  ministry: string;
  status: 'submitted' | 'reviewed' | 'presented' | 'passed' | 'rejected';
  yesVotes: number;
  noVotes: number;
  comments: number;
  submittedDate: string;
  representative?: string;
}

interface ProposalCardProps {
  proposal: Proposal;
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  const totalVotes = proposal.yesVotes + proposal.noVotes;
  const yesPercentage = totalVotes > 0 ? (proposal.yesVotes / totalVotes) * 100 : 0;

  const statusColors: Record<string, string> = {
    submitted: 'bg-gray-500',
    reviewed: 'bg-blue-500',
    presented: 'bg-purple-500',
    passed: 'bg-kenya-green',
    rejected: 'bg-kenya-red',
  };

  const statusLabels: Record<string, string> = {
    submitted: 'Submitted',
    reviewed: 'Under Review',
    presented: 'Presented',
    passed: 'Passed',
    rejected: 'Rejected',
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <Link to={`/proposal/${proposal.id}`}>
              <h3 className="hover:text-kenya-green transition-colors cursor-pointer">
                {proposal.title}
              </h3>
            </Link>
            <p className="text-gray-600 mt-2 line-clamp-2">{proposal.description}</p>
          </div>
          <Badge className={`${statusColors[proposal.status]} text-white shrink-0`}>
            {statusLabels[proposal.status]}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Meta Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{proposal.region}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            <span>{proposal.ministry}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{proposal.submittedDate}</span>
          </div>
          {proposal.representative && (
            <div className="flex items-center gap-2">
              <span className="text-xs">Rep: {proposal.representative}</span>
            </div>
          )}
        </div>

        {/* Voting Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Voting Progress</span>
            <span>{totalVotes} votes</span>
          </div>
          <Progress value={yesPercentage} className="h-2" />
          <div className="flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <ThumbsUp className="h-3 w-3 text-kenya-green" />
              <span>{proposal.yesVotes} Yes ({yesPercentage.toFixed(0)}%)</span>
            </div>
            <div className="flex items-center gap-1">
              <ThumbsDown className="h-3 w-3 text-kenya-red" />
              <span>{proposal.noVotes} No ({(100 - yesPercentage).toFixed(0)}%)</span>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div>
          <Badge variant="outline" className="text-xs">
            {proposal.category}
          </Badge>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <MessageSquare className="h-4 w-4" />
          <span>{proposal.comments} comments</span>
        </div>
        <Link to={`/proposal/${proposal.id}`}>
          <Button size="sm" className="bg-kenya-green hover:bg-kenya-green-dark">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
