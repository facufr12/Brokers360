import { Search, Filter, Plus, UserPlus, Phone, Mail, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/ui/BottomNav";
import { LeadCard } from "@/components/ui/LeadCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Leads() {
  const navigate = useNavigate();

  const leads = [
    {
      name: "María González",
      plan: "Plan Familiar",
      action: "Contactar hoy",
      isOnline: true,
      status: "nuevo",
    },
    {
      name: "Carlos Ruiz",
      plan: "Plan Individual",
      action: "Pendiente info",
      isOnline: false,
      status: "proceso",
    },
    {
      name: "Ana López",
      plan: "Corporativo",
      action: "Llamar mañana",
      isOnline: false,
      status: "seguimiento",
    },
    {
      name: "Diego Fernández",
      plan: "Plan Joven",
      action: "Enviar cotización",
      isOnline: true,
      status: "nuevo",
    },
    {
      name: "Laura Martínez",
      plan: "Plan Familiar",
      action: "Reunión agendada",
      isOnline: true,
      status: "caliente",
    },
  ];

  const stats = [
    { label: "Total", value: "28", color: "text-info" },
    { label: "Nuevos", value: "12", color: "text-accent" },
    { label: "En Proceso", value: "8", color: "text-warning" },
    { label: "Cerrados", value: "8", color: "text-success" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Mis Leads</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Gestiona tus oportunidades
            </p>
          </div>
          <Button
            size="icon"
            className="rounded-full w-10 h-10"
            onClick={() => {}}
          >
            <Plus className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats */}
        <div className="glass-card rounded-2xl p-4 mb-4">
          <div className="grid grid-cols-4 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Buscar leads..."
              className="pl-9 h-10 bg-secondary border-border/50"
            />
          </div>
          <Button variant="outline" size="icon" className="h-10 w-10">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </header>

      {/* Leads List */}
      <div className="px-4 space-y-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-muted-foreground">
            LEADS ACTIVOS
          </h3>
          <span className="text-xs text-muted-foreground">{leads.length} total</span>
        </div>

        {leads.map((lead, index) => (
          <div key={index} className="glass-card rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                    <UserPlus className="w-5 h-5 text-white" />
                  </div>
                  {lead.isOnline && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-accent rounded-full border-2 border-background" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{lead.name}</h4>
                  <p className="text-xs text-muted-foreground">{lead.plan}</p>
                  <p className="text-xs text-warning mt-1">{lead.action}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Phone className="w-4 h-4 mr-2" />
                    Llamar
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar Email
                  </DropdownMenuItem>
                  <DropdownMenuItem>Ver Detalles</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1 h-8">
                <Phone className="w-3 h-3 mr-1" />
                Llamar
              </Button>
              <Button variant="outline" size="sm" className="flex-1 h-8">
                <Mail className="w-3 h-3 mr-1" />
                Email
              </Button>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}
