import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MapPin, Mail, Phone, FileText, CheckCircle, ArrowRight } from 'lucide-react';

export interface Representative {
  id: string;
  name: string;
  title: string;
  region: string;
  party?: string;
  image?: string;
  bio?: string;
  email?: string;
  phone?: string;
  proposalsRepresented: number;
  presentationHistory: number;
}

interface RepresentativeCardProps {
  representative: Representative;
}

export function RepresentativeCard({ representative }: RepresentativeCardProps) {
  const getInitials = (name: string) => {
    return name
      .replace(/^(Hon\.|CS|Dr\.)\s+/g, '')
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const titleColors: Record<string, string> = {
    MCA: 'bg-blue-50 text-blue-700 border border-blue-200/50',
    MP: 'bg-emerald-50 text-emerald-700 border border-emerald-200/50',
    Governor: 'bg-indigo-50 text-indigo-700 border border-indigo-200/50',
    Senator: 'bg-amber-50 text-amber-700 border border-amber-200/50',
    'Women Rep': 'bg-rose-50 text-rose-700 border border-rose-200/50',
    Minister: 'bg-violet-50 text-violet-700 border border-violet-200/50',
    President: 'bg-red-50 text-red-700 border border-red-200/50',
  };

  return (
    <Card className="hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full bg-white border border-gray-200/80">
      {/* Top Brand Banner Accent */}
      <div className="h-2 w-full bg-gradient-to-r from-kenya-green via-kenya-red to-kenya-black flex-none" />
      
      <CardContent className="pt-6 pb-4 px-5 flex-1 flex flex-col items-center text-center">
        {/* Avatar Container with Outer Ring */}
        <div className="relative mb-3.5">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-kenya-green/10 to-kenya-red/10 blur-[4px] -m-1 pointer-events-none" />
          <Avatar className="h-20 w-20 border-2 border-white shadow-md">
            <AvatarImage src={representative.image} alt={representative.name} />
            <AvatarFallback className="bg-gradient-to-tr from-kenya-green to-kenya-green-dark text-white font-bold text-lg">
              {getInitials(representative.name)}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name and Badge */}
        <h3 className="text-base font-bold text-gray-900 line-clamp-1 mb-1.5">
          {representative.name}
        </h3>
        <Badge className={`${titleColors[representative.title] || 'bg-gray-50 text-gray-700 border-gray-200'} rounded-full font-semibold px-2.5 py-0.5 text-[10px] uppercase tracking-wide shadow-none`}>
          {representative.title}
        </Badge>

        {/* Party Tag */}
        {representative.party && (
          <p className="text-xs font-semibold text-gray-500 mt-2 uppercase tracking-wider">
            {representative.party}
          </p>
        )}

        {/* Region / Location */}
        <div className="flex items-center gap-1.5 mt-2.5 text-xs text-gray-500 font-medium max-w-full">
          <MapPin className="h-3.5 w-3.5 text-kenya-green shrink-0" />
          <span className="truncate">{representative.region}</span>
        </div>

        {/* Bio summary */}
        {representative.bio && (
          <p className="text-xs text-gray-500 mt-3 line-clamp-2 leading-relaxed italic">
            "{representative.bio}"
          </p>
        )}

        {/* Representative Metrics Grid */}
        <div className="grid grid-cols-2 gap-3 w-full mt-5 pt-4 border-t border-gray-100 flex-none">
          <div className="bg-gray-50/60 p-2.5 rounded-lg border border-gray-100/50">
            <div className="text-lg font-bold text-kenya-green leading-none">{representative.proposalsRepresented}</div>
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-1.5">Proposals</div>
          </div>
          <div className="bg-gray-50/60 p-2.5 rounded-lg border border-gray-100/50">
            <div className="text-lg font-bold text-kenya-green leading-none">{representative.presentationHistory}</div>
            <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider mt-1.5">Tabled</div>
          </div>
        </div>

        {/* Contact Links */}
        {(representative.email || representative.phone) && (
          <div className="w-full mt-4 pt-3 border-t border-gray-50 flex items-center justify-center gap-4 text-xs text-gray-500 flex-none">
            {representative.email && (
              <a href={`mailto:${representative.email}`} className="flex items-center gap-1 hover:text-kenya-green transition-colors" title={representative.email}>
                <Mail className="h-3.5 w-3.5" />
                <span>Email</span>
              </a>
            )}
            {representative.phone && (
              <a href={`tel:${representative.phone}`} className="flex items-center gap-1 hover:text-kenya-green transition-colors" title={representative.phone}>
                <Phone className="h-3.5 w-3.5" />
                <span>Call</span>
              </a>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0 border-t border-gray-50 bg-gray-50/20 flex gap-2 flex-none">
        <Link to={`/representative/${representative.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full text-xs font-semibold h-8 rounded-md border-gray-200">
            <FileText className="h-3.5 w-3.5 mr-1 text-gray-500" />
            Profile
          </Button>
        </Link>
        <Link to={`/representative/${representative.id}/proposals`} className="flex-1">
          <Button size="sm" className="w-full text-xs font-semibold h-8 bg-kenya-green hover:bg-kenya-green-dark text-white rounded-md flex items-center justify-center gap-1 shadow-sm">
            Proposals
            <ArrowRight className="h-3 w-3" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
