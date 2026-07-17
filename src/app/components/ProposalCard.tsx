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
    <Card className="group relative flex flex-col h-full bg-white border border-slate-100 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 rounded-xl overflow-hidden">
      
      {/* Top Brand Banner Accent matching Representative Card design */}
      <div className="h-2 w-full bg-gradient-to-r from-kenya-green via-kenya-red to-kenya-black flex-none" />
      
      {/* Decorative top-right ambient blur */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-kenya-green/5 to-transparent blur-xl pointer-events-none" />

      {/* Header Row: Category Badge & Status Pill */}
      <CardHeader className="px-6 pt-5 pb-2 flex-none">
        <div className="flex items-center justify-between gap-3 mb-2.5">
          <Badge variant="outline" className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider py-0.5 px-3 border-slate-200/60 rounded-full bg-gray-50/50">
            {proposal.category}
          </Badge>
          
          <div className={`flex items-center gap-1.5 py-0.5 px-2.5 rounded-full border text-[11px] font-bold ${currentStatus.badge}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${currentStatus.dot}`} />
            <span>{currentStatus.label}</span>
          </div>
        </div>
        
        <Link to={`/proposal/${proposal.id}`}>
          <h3 className="text-base font-extrabold text-gray-900 line-clamp-2 hover:text-kenya-green transition-colors leading-snug cursor-pointer group-hover:text-gray-800">
            {proposal.title}
          </h3>
        </Link>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="px-6 py-2 space-y-4 flex-1">
        <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
          {proposal.description}
        </p>

        {/* Voting Progress Line: Clean and minimalist representation */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] font-bold text-gray-600">
            <span className="text-emerald-600">{yesPercentage.toFixed(0)}% Approved</span>
            <span className="text-slate-500">{totalVotes.toLocaleString()} votes</span>
          </div>
          <Progress value={yesPercentage} className="h-1.5 bg-slate-100" />
        </div>

        {/* Core Metadata tags: 2-column layout */}
        <div className="grid grid-cols-2 gap-2 text-[10.5px] text-gray-400 font-semibold pt-1">
          <div className="flex items-center gap-1 min-w-0">
            <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{proposal.region}</span>
          </div>
          <div className="flex items-center gap-1 min-w-0">
            <Building2 className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <span className="truncate">{proposal.ministry}</span>
          </div>
        </div>

        {/* Representative row: Clean inline layout */}
        {proposal.representative && (
          <div className="flex items-center gap-1.5 pt-2.5 border-t border-slate-100 text-[11px]">
            <User className="h-3.5 w-3.5 text-gray-400 shrink-0" />
            <div className="text-[11px] min-w-0 truncate">
              <span className="text-gray-400">Rep: </span>
              <strong className="text-gray-700 font-bold">{proposal.representative}</strong>
            </div>
          </div>
        )}
      </CardContent>

      {/* Footer Section: Comment tracker & Primary actions */}
      <CardFooter className="px-6 py-4 border-t border-slate-100 bg-slate-50/20 flex items-center justify-between flex-none">
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
      </CardFooter>
    </Card>
  );
}
