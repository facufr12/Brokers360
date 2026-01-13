import { Home, Users, BookOpen, User, BarChart3 } from "lucide-react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Inicio", href: "/dashboard" },
  { icon: Users, label: "Leads", href: "/leads" },
  { icon: BookOpen, label: "Cursos", href: "/cursos" },
  { icon: BarChart3, label: "Comisiones", href: "/comisiones" },
  { icon: User, label: "Perfil", href: "/perfil" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Navegación principal">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <RouterNavLink
              key={item.href}
              to={item.href}
              className={cn(
                "bottom-nav-item",
                isActive && "active"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className={cn(
                "w-5 h-5 transition-colors",
                isActive ? "text-accent" : "text-muted-foreground"
              )} />
              <span className="text-xs font-medium">{item.label}</span>
            </RouterNavLink>
          );
        })}
      </div>
    </nav>
  );
}
