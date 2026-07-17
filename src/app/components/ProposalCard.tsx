import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
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
      badge: 'bg-slate-50 text-slate-700 border-slate-200/60',
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
    <Card className="group relative flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 bg-white border border-slate-100 border-l-[5px] border-l-kenya-green hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300 rounded-xl overflow-hidden w-full">
      
      {/* Decorative top-right ambient blur */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-kenya-green/5 to-transparent blur-xl pointer-events-none" />

      {/* Left side: Content block */}
      <div className="flex-1 min-w-0 space-y-3">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="outline" className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider py-0.5 px-3 border-slate-200/60 rounded-full bg-gray-50/50">
            {proposal.category}
          </Badge>
          
          <div className={`flex items-center gap-1.5 py-0.5 px-2.5 rounded-full border text-[11px] font-bold ${currentStatus.badge}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${currentStatus.dot}`} />
            <span>{currentStatus.label}</span>
          </div>
        </div>
        
        <Link to={`/proposal/${proposal.id}`} className="block">
          <h3 className="text-base lg:text-lg font-extrabold text-gray-900 hover:text-kenya-green transition-colors leading-snug cursor-pointer">
            {proposal.title}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed max-w-4xl">
          {proposal.description}
        </p>

        {/* Metadata & Representative Info */}
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 font-semibold pt-1">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <span>{proposal.region}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1">
            <Building2 className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <span>{proposal.ministry}</span>
          </div>
          {proposal.representative && (
            <>
              <span className="text-gray-300">•</span>
              <div className="flex items-center gap-1">
                <User className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                <span>Rep: <strong className="text-gray-700 font-bold">{proposal.representative}</strong></span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right side: Voting summary & CTA block */}
      <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-between gap-4 lg:w-72 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6 flex-none">
        <div className="space-y-1.5 w-full">
          <div className="flex items-center justify-between text-[11px] font-bold text-gray-600">
            <span className="text-emerald-600">{yesPercentage.toFixed(0)}% Approved</span>
            <span className="text-slate-500">{totalVotes.toLocaleString()} votes cast</span>
          </div>
          <Progress value={yesPercentage} className="h-1.5 bg-slate-100" />
        </div>

        <div className="flex items-center justify-between lg:justify-end gap-6 w-full mt-1.5">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-bold">
            <MessageSquare className="h-4 w-4 text-gray-400" />
            <span>{proposal.comments} comments</span>
          </div>
          
          <Link to={`/proposal/${proposal.id}`}>
            <Button size="sm" className="bg-kenya-green hover:bg-kenya-green-dark text-white rounded-lg font-bold text-xs h-8 px-4 flex items-center gap-1 shadow-sm transition-all duration-200">
              View details
              <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
