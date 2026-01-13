import { cn } from "@/lib/utils";
import { TrendingUp, LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: string;
  trendUp?: boolean;
  className?: string;
}

export function StatsCard({
  label,
  value,
  icon: Icon,
  trend,
  trendUp = true,
  className,
}: StatsCardProps) {
  return (
    <div className={cn("stats-card", className)}>
      <div className="flex items-start justify-between mb-2">
        {Icon && (
          <div className="p-2 bg-secondary rounded-lg">
            <Icon className="w-4 h-4 text-muted-foreground" />
          </div>
        )}
        {trend && (
          <span className={cn(
            "badge-accent text-xs",
            trendUp ? "text-accent" : "text-destructive"
          )}>
            {trend}
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <p className="text-2xl font-bold text-foreground">{value}</p>
    </div>
  );
}
