import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { MessageSquare, MapPin, Building2, User, ArrowRight } from 'lucide-react';

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

  const statusConfig: Record<string, { badge: string; dot: string; label: string }> = {
    submitted: {
      badge: 'bg-slate-50 text-slate-700 border-slate-200/50',
      dot: 'bg-slate-400',
      label: 'Submitted',
    },
    reviewed: {
      badge: 'bg-amber-50 text-amber-800 border-amber-200/50',
      dot: 'bg-amber-500 animate-pulse',
      label: 'Under Review',
    },
    presented: {
      badge: 'bg-blue-50 text-blue-800 border-blue-200/50',
      dot: 'bg-blue-500 animate-pulse',
      label: 'Presented',
    },
    passed: {
      badge: 'bg-emerald-50 text-emerald-800 border-emerald-200/50',
      dot: 'bg-emerald-500',
      label: 'Passed',
    },
    rejected: {
      badge: 'bg-rose-50 text-rose-800 border-rose-200/50',
      dot: 'bg-rose-500',
      label: 'Rejected',
    },
  };

  const currentStatus = statusConfig[proposal.status] || statusConfig.submitted;

  return (
    <Card className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full bg-white border border-gray-200/80">
      
      {/* Top Brand Banner Accent matching Representative Card design */}
      <div className="h-2 w-full bg-gradient-to-r from-kenya-green via-kenya-red to-kenya-black flex-none" />
      
      <CardContent className="pt-6 pb-4 px-5 flex-1 flex flex-col items-center text-center">
        
        {/* Category Header Tag */}
        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5">
          {proposal.category}
        </p>

        {/* Title */}
        <Link to={`/proposal/${proposal.id}`}>
          <h3 className="text-base font-bold text-gray-900 line-clamp-2 hover:text-kenya-green transition-colors leading-snug cursor-pointer mb-2">
            {proposal.title}
          </h3>
        </Link>

        {/* Status Pill */}
        <Badge className={`${currentStatus.badge} rounded-full font-semibold px-2.5 py-0.5 text-[10px] uppercase tracking-wide shadow-none flex items-center gap-1.5 border-gray-200`}>
          <span className={`h-1.5 w-1.5 rounded-full ${currentStatus.dot}`} />
          {currentStatus.label}
        </Badge>

        {/* Region / Location */}
        <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-500 font-medium max-w-full justify-center">
          <MapPin className="h-3.5 w-3.5 text-kenya-green shrink-0" />
          <span className="truncate">{proposal.region}</span>
        </div>

        {/* Description summary */}
        <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed italic">
          "{proposal.description}"
        </p>

        {/* Double Metrics Box Grid matching Representative Card */}
        <div className="grid grid-cols-2 gap-3 w-full mt-5 pt-4 border-t border-gray-100 flex-none">
          <div className="bg-gray-50/60 p-2.5 rounded-lg border border-gray-100/50">
            <div className="text-lg font-bold text-kenya-green leading-none">{yesPercentage.toFixed(0)}%</div>
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-1.5">Consensus</div>
          </div>
          <div className="bg-gray-50/60 p-2.5 rounded-lg border border-gray-100/50">
            <div className="text-lg font-bold text-kenya-green leading-none">{totalVotes.toLocaleString()}</div>
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-1.5">Votes Cast</div>
          </div>
        </div>

        {/* Progress Bar inside Metrics */}
        <div className="w-full mt-3 px-1 flex-none">
          <Progress value={yesPercentage} className="h-1.5 bg-gray-100" />
        </div>

        {/* Assigned Ministry / Representative Info */}
        <div className="w-full mt-4 pt-3 border-t border-gray-50 flex items-center justify-center gap-1 text-[11px] text-gray-500 flex-none truncate">
          <Building2 className="h-3.5 w-3.5 text-gray-400 shrink-0" />
          <span className="truncate">{proposal.ministry}</span>
          {proposal.representative && (
            <>
              <span className="text-gray-300 px-1">|</span>
              <User className="h-3.5 w-3.5 text-gray-400 shrink-0" />
              <span className="truncate font-semibold">{proposal.representative}</span>
            </>
          )}
        </div>
      </CardContent>

      {/* Double Button Footer matching Representative Card */}
      <CardFooter className="p-4 pt-0 border-t border-gray-50 bg-gray-50/20 flex gap-2 flex-none">
        <Link to={`/proposal/${proposal.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full text-xs font-semibold h-8 rounded-md border-gray-200">
            <MessageSquare className="h-3.5 w-3.5 mr-1 text-gray-500" />
            {proposal.comments} Comments
          </Button>
        </Link>
        <Link to={`/proposal/${proposal.id}`} className="flex-1">
          <Button size="sm" className="w-full text-xs font-semibold h-8 bg-kenya-green hover:bg-kenya-green-dark text-white rounded-md flex items-center justify-center gap-1 shadow-sm">
            Details
            <ArrowRight className="h-3 w-3" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
