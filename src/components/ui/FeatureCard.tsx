import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBgColor?: string;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBgColor = "bg-accent",
  className,
}: FeatureCardProps) {
  return (
    <div className={cn("feature-card flex items-start gap-4", className)}>
      <div className={cn("p-3 rounded-xl shrink-0", iconBgColor)}>
        <Icon className="w-5 h-5 text-accent-foreground" />
      </div>
      <div className="min-w-0">
        <h3 className="font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
