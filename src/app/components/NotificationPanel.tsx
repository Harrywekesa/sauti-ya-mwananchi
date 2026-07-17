import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import { Separator } from './ui/separator';
import {
  Bell,
  CheckCircle,
  XCircle,
  AlertCircle,
  FileText,
  ThumbsUp,
  MessageSquare,
  Calendar,
  X,
} from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'warning' | 'info' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  icon: 'vote' | 'proposal' | 'comment' | 'deadline';
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Proposal Passed',
    message: 'Your supported proposal "Healthcare Reform" has been passed by parliament!',
    timestamp: '2 hours ago',
    read: false,
    icon: 'vote',
  },
  {
    id: '2',
    type: 'info',
    title: 'New Comment',
    message: 'Someone commented on your proposal "Youth Employment Initiative"',
    timestamp: '5 hours ago',
    read: false,
    icon: 'comment',
  },
  {
    id: '3',
    type: 'warning',
    title: 'Voting Deadline',
    message: 'Vote on "Infrastructure Development" closes in 24 hours',
    timestamp: '1 day ago',
    read: false,
    icon: 'deadline',
  },
  {
    id: '4',
    type: 'info',
    title: 'Proposal Under Review',
    message: 'Your proposal "Community Sports Centers" is now under review',
    timestamp: '2 days ago',
    read: true,
    icon: 'proposal',
  },
  {
    id: '5',
    type: 'success',
    title: 'Proposal Approved',
    message: 'Your proposal has been approved and assigned to Hon. Jane Mwangi',
    timestamp: '3 days ago',
    read: true,
    icon: 'proposal',
  },
];

export function NotificationPanel() {
  const unreadCount = mockNotifications.filter((n) => !n.read).length;

  const getIcon = (iconType: string, notifType: string) => {
    const iconClass = 'h-5 w-5';
    const colorClass =
      notifType === 'success'
        ? 'text-kenya-green'
        : notifType === 'warning'
        ? 'text-yellow-600'
        : notifType === 'error'
        ? 'text-kenya-red'
        : 'text-blue-600';

    switch (iconType) {
      case 'vote':
        return <ThumbsUp className={`${iconClass} ${colorClass}`} />;
      case 'proposal':
        return <FileText className={`${iconClass} ${colorClass}`} />;
      case 'comment':
        return <MessageSquare className={`${iconClass} ${colorClass}`} />;
      case 'deadline':
        return <Calendar className={`${iconClass} ${colorClass}`} />;
      default:
        return <Bell className={`${iconClass} ${colorClass}`} />;
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
            {unreadCount > 0 && (
              <Badge className="bg-kenya-red text-white">{unreadCount}</Badge>
            )}
          </CardTitle>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm">
              Mark all as read
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[500px]">
          <div className="p-4 space-y-2">
            {mockNotifications.map((notification, index) => (
              <div key={notification.id}>
                <div
                  className={`p-4 rounded-lg transition-colors hover:bg-gray-50 cursor-pointer ${
                    !notification.read ? 'bg-blue-50/50' : ''
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(notification.icon, notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h4 className="text-sm">{notification.title}</h4>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{notification.timestamp}</span>
                        {!notification.read && (
                          <div className="h-2 w-2 rounded-full bg-blue-600" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                {index < mockNotifications.length - 1 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full">
            View All Notifications
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
