import { cn } from "@/lib/utils";
import { Phone, MessageSquare } from "lucide-react";

interface LeadCardProps {
  name: string;
  plan: string;
  action: string;
  avatar?: string;
  isOnline?: boolean;
  className?: string;
  onCall?: () => void;
  onMessage?: () => void;
}

export function LeadCard({
  name,
  plan,
  action,
  avatar,
  isOnline = false,
  className,
  onCall,
  onMessage,
}: LeadCardProps) {
  return (
    <div className={cn("flex items-center gap-3 p-3 rounded-xl bg-card/50", className)}>
      <div className="relative">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center">
            <span className="text-warning font-semibold text-lg">
              {name.charAt(0)}
            </span>
          </div>
        )}
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-card" />
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground truncate">{name}</h4>
        <p className="text-sm text-muted-foreground truncate">
          {plan} • {action}
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <button
          onClick={onCall}
          className="p-2.5 bg-secondary hover:bg-secondary/80 rounded-full transition-colors"
          aria-label={`Llamar a ${name}`}
        >
          <Phone className="w-4 h-4 text-foreground" />
        </button>
        <button
          onClick={onMessage}
          className="p-2.5 bg-accent hover:bg-accent/80 rounded-full transition-colors"
          aria-label={`Enviar mensaje a ${name}`}
        >
          <MessageSquare className="w-4 h-4 text-accent-foreground" />
        </button>
      </div>
    </div>
  );
}
