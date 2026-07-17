import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { MapPin, Mail, Phone, FileText } from 'lucide-react';

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
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const titleColors: Record<string, string> = {
    MCA: 'bg-blue-100 text-blue-800',
    MP: 'bg-green-100 text-green-800',
    Governor: 'bg-purple-100 text-purple-800',
    Senator: 'bg-orange-100 text-orange-800',
    'Women Rep': 'bg-pink-100 text-pink-800',
    Minister: 'bg-indigo-100 text-indigo-800',
    President: 'bg-red-100 text-red-800',
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src={representative.image} alt={representative.name} />
            <AvatarFallback className="bg-kenya-green text-white">
              {getInitials(representative.name)}
            </AvatarFallback>
          </Avatar>

          {/* Name and Title */}
          <h3 className="mb-2">{representative.name}</h3>
          <Badge className={titleColors[representative.title] || 'bg-gray-100 text-gray-800'}>
            {representative.title}
          </Badge>

          {/* Party */}
          {representative.party && (
            <p className="text-sm text-gray-600 mt-2">{representative.party}</p>
          )}

          {/* Region */}
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{representative.region}</span>
          </div>

          {/* Bio */}
          {representative.bio && (
            <p className="text-sm text-gray-600 mt-4 line-clamp-3">{representative.bio}</p>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-6 border-t border-gray-200">
            <div>
              <div className="text-2xl text-kenya-green">{representative.proposalsRepresented}</div>
              <div className="text-xs text-gray-600">Proposals</div>
            </div>
            <div>
              <div className="text-2xl text-kenya-green">{representative.presentationHistory}</div>
              <div className="text-xs text-gray-600">Presentations</div>
            </div>
          </div>

          {/* Contact Info */}
          {(representative.email || representative.phone) && (
            <div className="w-full space-y-2 mt-4 text-sm text-gray-600">
              {representative.email && (
                <div className="flex items-center gap-2 justify-center">
                  <Mail className="h-3 w-3" />
                  <span className="truncate">{representative.email}</span>
                </div>
              )}
              {representative.phone && (
                <div className="flex items-center gap-2 justify-center">
                  <Phone className="h-3 w-3" />
                  <span>{representative.phone}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex gap-2">
        <Link to={`/representative/${representative.id}`} className="flex-1">
          <Button variant="outline" size="sm" className="w-full">
            <FileText className="h-4 w-4 mr-2" />
            View Profile
          </Button>
        </Link>
        <Link to={`/representative/${representative.id}/proposals`} className="flex-1">
          <Button size="sm" className="w-full bg-kenya-green hover:bg-kenya-green-dark">
            See Proposals
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
