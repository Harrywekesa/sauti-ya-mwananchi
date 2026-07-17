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
  const noPercentage = 100 - yesPercentage;

  // Modern soft tinted badge styles
  const statusStyles: Record<string, string> = {
    submitted: 'bg-slate-50 text-slate-700 border border-slate-200/50',
    reviewed: 'bg-amber-50/80 text-amber-700 border border-amber-200/40',
    presented: 'bg-blue-50/80 text-blue-700 border border-blue-200/40',
    passed: 'bg-emerald-50/80 text-emerald-700 border border-emerald-200/40',
    rejected: 'bg-rose-50/80 text-rose-700 border border-rose-200/40',
  };

  const statusLabels: Record<string, string> = {
    submitted: 'Submitted',
    reviewed: 'Under Review',
    presented: 'Presented to House',
    passed: 'Policy Passed',
    rejected: 'Policy Rejected',
  };

  return (
    <Card className="flex flex-col h-full bg-white border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Card Header: Category & Status Badge Row */}
      <CardHeader className="p-4 pb-2 flex-none">
        <div className="flex items-center justify-between gap-2 mb-2">
          <Badge className={`${statusStyles[proposal.status]} font-semibold text-[10px] tracking-wide py-0.5 px-2.5 rounded-full shadow-none`}>
            {statusLabels[proposal.status]}
          </Badge>
          <Badge variant="outline" className="text-[10px] text-gray-500 font-medium py-0.5 px-2.5 border-gray-200/60 rounded-full bg-gray-50/30">
            {proposal.category}
          </Badge>
        </div>
        
        <Link to={`/proposal/${proposal.id}`}>
          <h3 className="text-base font-bold text-gray-900 line-clamp-2 hover:text-kenya-green transition-colors leading-snug cursor-pointer">
            {proposal.title}
          </h3>
        </Link>
      </CardHeader>

      {/* Card Content: Body description, vote metrics, metadata */}
      <CardContent className="px-4 py-2 space-y-4 flex-1">
        <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
          {proposal.description}
        </p>

        {/* Voting Progress Bar & Detailed Percentages */}
        <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-100/50 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-bold text-gray-600">
            <span>Consensus Status</span>
            <span className="text-slate-900">{totalVotes.toLocaleString()} Votes</span>
          </div>
          
          <Progress value={yesPercentage} className="h-1.5 bg-gray-200" />
          
          <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold pt-0.5">
            <div className="flex items-center gap-1 text-emerald-600">
              <ThumbsUp className="h-3 w-3 shrink-0" />
              <span>{yesPercentage.toFixed(0)}% Yes ({proposal.yesVotes.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1 text-rose-600 justify-end">
              <ThumbsDown className="h-3 w-3 shrink-0" />
              <span>{noPercentage.toFixed(0)}% No ({proposal.noVotes.toLocaleString()})</span>
            </div>
          </div>
        </div>

        {/* Core Metadata: Region & Ministry Grid */}
        <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500 pt-1">
          <div className="flex items-center gap-1.5 min-w-0">
            <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{proposal.region}</span>
          </div>
          <div className="flex items-center gap-1.5 min-w-0">
            <Building2 className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{proposal.ministry}</span>
          </div>
        </div>

        {/* Dedicated Representative Row (if assigned) */}
        {proposal.representative && (
          <div className="flex items-center gap-2 pt-2.5 border-t border-gray-100/60">
            <div className="h-5 w-5 bg-gradient-to-tr from-kenya-green to-kenya-green-dark text-white rounded-full flex items-center justify-center text-[9px] font-extrabold shadow-sm shrink-0">
              {proposal.representative.replace(/^(Hon\.|CS|Dr\.)\s+/g, '')[0]}
            </div>
            <div className="text-[11px] min-w-0 truncate">
              <span className="text-gray-400">Assigned: </span>
              <strong className="text-gray-700 font-semibold">{proposal.representative}</strong>
            </div>
          </div>
        )}
      </CardContent>

      {/* Card Footer: Comments Counter & Detail Link */}
      <CardFooter className="px-4 py-3 border-t border-gray-100 bg-gray-50/30 flex items-center justify-between flex-none">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold">
          <MessageSquare className="h-3.5 w-3.5 text-gray-400" />
          <span>{proposal.comments} comments</span>
        </div>
        
        <Link to={`/proposal/${proposal.id}`}>
          <Button size="sm" className="bg-kenya-green hover:bg-kenya-green-dark text-white rounded-md font-semibold text-xs h-7 px-3 flex items-center gap-1 shadow-sm transition-all duration-200">
            View details
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
