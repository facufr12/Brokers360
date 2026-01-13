import { Trophy, Award, DollarSign, Star, TrendingUp, Plus } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const planProgress = [
  { name: "Plan Oro", current: 12, goal: 15, color: "bg-warning" },
  { name: "Plan Plata", current: 8, goal: 20, color: "bg-muted-foreground" },
  { name: "Plan Joven", current: 22, goal: 25, color: "bg-accent" },
];

export default function Comisiones() {
  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Comisiones" showBack showNotifications />

      <main className="px-4 space-y-5">
        {/* Weekly Bonus Card */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-5">
          <div className="flex items-start justify-between mb-4">
            <span className="badge-warning text-2xs uppercase tracking-wider">
              Bonificación Semanal
            </span>
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">¡Casi llegas!</h2>
          <p className="text-sm opacity-90 mb-4">
            Te faltan <strong>3 ventas</strong> para desbloquear el bono de $50,000.
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Progreso actual</span>
              <span className="font-semibold">7/10</span>
            </div>
            <div className="h-2 bg-primary-foreground/20 rounded-full overflow-hidden">
              <div className="h-full w-[70%] bg-primary-foreground rounded-full" />
            </div>
          </div>
        </div>

        {/* Agent Rank Card */}
        <div className="glass-card p-5">
          <div className="flex items-start justify-between mb-4">
            <span className="badge-accent text-2xs uppercase tracking-wider">
              Rango de Agente
            </span>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Award className="w-5 h-5 text-foreground" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Siguiente Categoría</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Te faltan <strong className="text-foreground">7 ventas</strong> para alcanzar la Categoría Senior.
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
            <span className="font-semibold text-foreground">JUNIOR</span>
            <span>13/20 VENTAS</span>
            <span>SENIOR</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full w-[65%] bg-accent rounded-full" />
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <DollarSign className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Total Mes</span>
            </div>
            <p className="text-2xl font-bold text-foreground">$150,000</p>
            <div className="flex items-center gap-1 mt-1">
              <TrendingUp className="w-3 h-3 text-accent" />
              <span className="text-xs text-accent">+12% vs. mes pasado</span>
            </div>
          </div>
          
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-warning/20 flex items-center justify-center">
                <Star className="w-4 h-4 text-warning" />
              </div>
              <span className="text-sm text-muted-foreground">Bonos Extra</span>
            </div>
            <p className="text-2xl font-bold text-foreground">$25,000</p>
            <p className="text-xs text-muted-foreground mt-1">2 bonos cobrados</p>
          </div>
        </div>

        {/* Performance by Plan */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-foreground">Rendimiento por Plan</h2>
            <button className="text-sm text-info font-medium">Ver todo</button>
          </div>
          <div className="glass-card p-4 space-y-4">
            {planProgress.map((plan) => (
              <div key={plan.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={cn("w-2 h-2 rounded-full", plan.color)} />
                    <span className="text-sm text-foreground">{plan.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {plan.current}/{plan.goal}
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn("h-full rounded-full transition-all", plan.color)}
                    style={{ width: `${(plan.current / plan.goal) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

      
      </main>

      <BottomNav />
    </div>
  );
}
