import { Bell, Plus, Calendar, Receipt, GraduationCap, TrendingUp, Play, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/ui/BottomNav";
import { StatsCard } from "@/components/ui/StatsCard";
import { LeadCard } from "@/components/ui/LeadCard";
import { Button } from "@/components/ui/button";
import avatarImg from "@/assets/avatar-broker.jpg";

export default function Dashboard() {
  const navigate = useNavigate();

  const quickActions = [
    { icon: Plus, label: "Nuevo", onClick: () => {} },
    { icon: Calendar, label: "Agenda", onClick: () => {} },
    { icon: Receipt, label: "Cotizar", onClick: () => {} },
    { icon: GraduationCap, label: "Cursos", onClick: () => navigate("/cursos") },
  ];

  const leads = [
    { name: "Maria Gonzalez", plan: "Plan Familiar", action: "Contactar hoy", isOnline: true },
    { name: "Carlos Ruiz", plan: "Plan Individual", action: "Pendiente info", isOnline: false },
    { name: "Ana Lopez", plan: "Corporativo", action: "Llamar mañana", isOnline: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-12 h-12 rounded-full object-cover border-2 border-warning"
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Buenos días,</p>
            <h1 className="text-lg font-bold text-foreground">Facundo</h1>
          </div>
        </div>
        <button
          className="relative p-2 bg-secondary rounded-full"
          aria-label="Notificaciones"
        >
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-info rounded-full" />
        </button>
      </header>

      <main className="px-4 space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3">
          <StatsCard
            label="Ventas Noviembre"
            value="12"
            icon={TrendingUp}
            trend="+2 vs Oct"
            trendUp
          />
          <StatsCard
            label="Comisiones"
            value="$100,000"
            icon={Receipt}
          />
        </div>

        {/* Quick Actions */}
        <div className="flex justify-between gap-3">
          {quickActions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className="flex-1 flex flex-col items-center gap-2 py-4"
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
                <action.icon className="w-6 h-6 text-foreground" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{action.label}</span>
            </button>
          ))}
        </div>

        {/* Announcement Card */}
        <div className="feature-card border-l-info">
          <div className="flex items-start gap-3">
            <Megaphone className="w-5 h-5 text-info shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Nueva lista de precios</h3>
              <p className="text-sm text-muted-foreground">
                Vigente a partir del 1 de Diciembre. Revisa los nuevos planes en el catálogo.
              </p>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Capacitación</h2>
            <button
              onClick={() => navigate("/cursos")}
              className="text-sm text-info font-medium"
            >
              Ver catálogo
            </button>
          </div>
          <div className="glass-card p-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-secondary/50 flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-0.5">Continuar curso</p>
                <h3 className="font-semibold text-foreground truncate">Técnicas de Cierre Efectivo</h3>
                <div className="h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
                  <div className="h-full w-2/5 bg-accent rounded-full" />
                </div>
              </div>
              <button
                onClick={() => navigate("/cursos")}
                className="p-3 bg-card-elevated rounded-full shrink-0"
                aria-label="Reproducir"
              >
                <Play className="w-5 h-5 text-foreground" fill="currentColor" />
              </button>
            </div>
          </div>
        </section>

        {/* Leads Section */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Leads Activos</h2>
            <button className="text-sm text-muted-foreground font-medium">
              Ver todos
            </button>
          </div>
          <div className="glass-card p-3 space-y-2">
            {leads.map((lead) => (
              <LeadCard
                key={lead.name}
                name={lead.name}
                plan={lead.plan}
                action={lead.action}
                isOnline={lead.isOnline}
              />
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
