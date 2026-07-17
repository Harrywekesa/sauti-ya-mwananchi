import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ThumbsUp, ThumbsDown, MessageSquare, Calendar, MapPin, Building2, User, ArrowRight } from 'lucide-react';

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

  // Modern soft tinted badge styles
  const statusStyles: Record<string, string> = {
    submitted: 'bg-slate-100 text-slate-800 border border-slate-200/60',
    reviewed: 'bg-amber-50 text-amber-700 border border-amber-200/60',
    presented: 'bg-blue-50 text-blue-700 border border-blue-200/60',
    passed: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
    rejected: 'bg-rose-50 text-rose-700 border border-rose-200/60',
  };

  const statusLabels: Record<string, string> = {
    submitted: 'Submitted',
    reviewed: 'Under Review',
    presented: 'Presented to House',
    passed: 'Policy Passed',
    rejected: 'Policy Rejected',
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3 flex-none">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Badge className={`${statusStyles[proposal.status]} rounded-full font-medium shadow-none py-0.5 px-2.5 text-[11px] capitalize`}>
            {statusLabels[proposal.status]}
          </Badge>
          <Badge variant="secondary" className="bg-gray-100/80 text-gray-600 text-[10px] font-semibold tracking-wider uppercase py-0.5 px-2 shadow-none border-none">
            {proposal.category}
          </Badge>
        </div>
        
        <Link to={`/proposal/${proposal.id}`}>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 hover:text-kenya-green transition-colors leading-snug">
            {proposal.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent className="space-y-4 flex-1 pb-4">
        <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
          {proposal.description}
        </p>

        {/* Dynamic Voting Progress */}
        <div className="p-3 bg-gray-50 rounded-lg space-y-2 border border-gray-100">
          <div className="flex items-center justify-between text-xs font-semibold text-gray-600">
            <span>Citizen Consensus</span>
            <span className="text-gray-900">{totalVotes.toLocaleString()} Votes</span>
          </div>
          <Progress value={yesPercentage} className="h-2 bg-gray-200" />
          <div className="flex items-center justify-between text-[11px] font-medium text-gray-500 mt-1">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <ThumbsUp className="h-3 w-3 shrink-0" />
              <span>{yesPercentage.toFixed(0)}% Yes ({proposal.yesVotes})</span>
            </div>
            <div className="flex items-center gap-1.5 text-rose-600">
              <ThumbsDown className="h-3 w-3 shrink-0" />
              <span>{(100 - yesPercentage).toFixed(0)}% No ({proposal.noVotes})</span>
            </div>
          </div>
        </div>

        {/* Metadata Details */}
        <div className="grid grid-cols-2 gap-y-2.5 gap-x-2 text-[12px] text-gray-500 pt-1">
          <div className="flex items-center gap-2 min-w-0">
            <MapPin className="h-3.5 w-3.5 text-kenya-green shrink-0" />
            <span className="truncate">{proposal.region}</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <Building2 className="h-3.5 w-3.5 text-kenya-green shrink-0" />
            <span className="truncate">{proposal.ministry}</span>
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <Calendar className="h-3.5 w-3.5 text-kenya-green shrink-0" />
            <span className="truncate">{proposal.submittedDate}</span>
          </div>
          {proposal.representative && (
            <div className="flex items-center gap-2 min-w-0">
              <User className="h-3.5 w-3.5 text-kenya-green shrink-0" />
              <span className="truncate font-medium text-gray-700">{proposal.representative}</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-3 pb-4 border-t border-gray-100 flex items-center justify-between flex-none bg-gray-50/30">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
          <MessageSquare className="h-3.5 w-3.5 text-gray-400" />
          <span>{proposal.comments} comments</span>
        </div>
        <Link to={`/proposal/${proposal.id}`}>
          <Button size="sm" className="bg-kenya-green hover:bg-kenya-green-dark text-white rounded-md font-semibold text-xs px-3 shadow-sm flex items-center gap-1">
            View Details
            <ArrowRight className="h-3 w-3" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
