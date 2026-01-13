import { ArrowLeft, Bell, Menu, X, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showNotifications?: boolean;
  showMenu?: boolean;
  showHelp?: boolean;
  rightContent?: React.ReactNode;
  onMenuClick?: () => void;
  className?: string;
}

export function Header({
  title,
  showBack = false,
  showNotifications = false,
  showMenu = false,
  showHelp = false,
  rightContent,
  onMenuClick,
  className,
}: HeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={cn(
      "sticky top-0 z-40 flex items-center justify-between px-4 py-3 bg-background/95 backdrop-blur-sm safe-area-inset-top",
      className
    )}>
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
            aria-label="Volver"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}
        {showMenu && (
          <button
            onClick={onMenuClick}
            className="p-2 -ml-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
            aria-label="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        {title && (
          <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        {rightContent}
        {showHelp && (
          <button
            className="p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
            aria-label="Ayuda"
          >
            <span className="text-sm font-medium">Ayuda</span>
          </button>
        )}
        {showNotifications && (
          <button
            className="relative p-2 text-foreground hover:bg-secondary/50 rounded-full transition-colors"
            aria-label="Notificaciones"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-info rounded-full" />
          </button>
        )}
      </div>
    </header>
  );
}
