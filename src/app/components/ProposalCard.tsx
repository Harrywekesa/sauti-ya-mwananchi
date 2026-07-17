import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ThumbsUp, ThumbsDown, MessageSquare, MapPin, Building2, User, ArrowRight } from 'lucide-react';

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

  // Simple, elegant status configurations
  const statusConfig: Record<string, { badge: string; dot: string; label: string }> = {
    submitted: {
      badge: 'bg-slate-50 text-slate-700 border-slate-200',
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
    <Card className="group relative flex flex-col h-full bg-white border border-gray-200/60 border-l-[5px] border-l-kenya-green hover:-translate-y-1.5 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 rounded-xl overflow-hidden">
      
      {/* Decorative top-right ambient blur */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-kenya-green/5 to-transparent blur-xl pointer-events-none" />

      {/* Header Row: Category Badge & Status Pill */}
      <CardHeader className="px-6 pt-5 pb-2 flex-none">
        <div className="flex items-center justify-between gap-3 mb-3">
          <Badge variant="outline" className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider py-0.5 px-3 border-gray-200/60 rounded-full bg-gray-50/50">
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

        {/* Voting Progress Card: Dual color representation (Yes in Emerald, No in Red track) */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-bold text-gray-600">
            <span className="flex items-center gap-1">🗳️ Citizen Vote Ratio</span>
            <span className="text-slate-900 font-extrabold">{totalVotes.toLocaleString()} cast</span>
          </div>
          
          {/* Custom Dual-color bar track: background is rose-100 (for No), progress fill is emerald-500 (for Yes) */}
          <div className="relative w-full h-2 bg-rose-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500" 
              style={{ width: `${yesPercentage}%` }}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-[10px] font-extrabold pt-0.5">
            <div className="flex items-center gap-1.5 text-emerald-600">
              <ThumbsUp className="h-3.5 w-3.5 shrink-0" />
              <span>{yesPercentage.toFixed(0)}% Yes ({proposal.yesVotes.toLocaleString()})</span>
            </div>
            <div className="flex items-center gap-1.5 text-rose-600 justify-end">
              <ThumbsDown className="h-3.5 w-3.5 shrink-0" />
              <span>{noPercentage.toFixed(0)}% No ({proposal.noVotes.toLocaleString()})</span>
            </div>
          </div>
        </div>

        {/* Core Metadata tags */}
        <div className="flex flex-wrap gap-2 text-[10.5px] text-gray-500 font-semibold pt-1">
          <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 py-1 px-2.5 rounded-lg">
            <MapPin className="h-3 w-3 text-gray-400" />
            <span>{proposal.region}</span>
          </div>
          <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 py-1 px-2.5 rounded-lg">
            <Building2 className="h-3 w-3 text-gray-400" />
            <span>{proposal.ministry}</span>
          </div>
        </div>

        {/* Assigned Representative Details Banner */}
        {proposal.representative && (
          <div className="flex items-center justify-between gap-3 p-2 bg-gradient-to-r from-gray-50 to-white border border-gray-100/50 rounded-xl">
            <div className="flex items-center gap-2 min-w-0">
              <div className="h-6 w-6 bg-gradient-to-tr from-kenya-green to-emerald-600 text-white rounded-full flex items-center justify-center text-[10px] font-extrabold shadow-sm shrink-0">
                {proposal.representative.replace(/^(Hon\.|CS|Dr\.)\s+/g, '')[0]}
              </div>
              <div className="text-[10.5px] min-w-0">
                <div className="text-gray-400 font-medium leading-none">Representative</div>
                <div className="font-bold text-gray-800 truncate mt-0.5">{proposal.representative}</div>
              </div>
            </div>
            <Badge className="bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/20 shadow-none border-none text-[9px] font-bold py-0.5 px-2">
              MCA
            </Badge>
          </div>
        )}
      </CardContent>

      {/* Footer Section: Comment tracker & Primary actions */}
      <CardFooter className="px-6 py-4 border-t border-gray-100 bg-gray-50/20 flex items-center justify-between flex-none">
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
