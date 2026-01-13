import { cn } from "@/lib/utils";
import { Clock, Lock, Play } from "lucide-react";
import { Button } from "./button";

interface CourseCardProps {
  title: string;
  duration: string;
  category: string;
  description?: string;
  progress?: number;
  status: "available" | "in-progress" | "locked";
  thumbnail?: string;
  className?: string;
  onContinue?: () => void;
}

export function CourseCard({
  title,
  duration,
  category,
  description,
  progress,
  status,
  thumbnail,
  className,
  onContinue,
}: CourseCardProps) {
  return (
    <div className={cn(
      "glass-card p-4 transition-all",
      status === "locked" && "opacity-60",
      className
    )}>
      <div className="flex gap-4">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-20 h-20 rounded-xl object-cover shrink-0"
          />
        ) : (
          <div className="w-20 h-20 rounded-xl bg-secondary flex items-center justify-center shrink-0">
            <Play className="w-8 h-8 text-muted-foreground" />
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{title}</h3>
            {status === "in-progress" && (
              <span className="badge-accent shrink-0">EN CURSO</span>
            )}
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{duration}</span>
            <span>•</span>
            <span>{category}</span>
          </div>
          
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>
          )}
          
          {status === "in-progress" && progress !== undefined && (
            <div className="mb-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-muted-foreground">Progreso</span>
                <span className="text-foreground font-medium">{progress}% completado</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-3">
        {status === "in-progress" && (
          <Button
            onClick={onContinue}
            className="w-full"
            variant="default"
          >
            <Play className="w-4 h-4 mr-2" />
            Continuar
          </Button>
        )}
        {status === "locked" && (
          <Button
            disabled
            className="w-full"
            variant="secondary"
          >
            <Lock className="w-4 h-4 mr-2" />
            Bloqueado
          </Button>
        )}
        {status === "available" && (
          <Button
            onClick={onContinue}
            className="w-full"
            variant="outline"
          >
            Comenzar
          </Button>
        )}
      </div>
    </div>
  );
}
