import { User, Mail, Phone, MapPin, Calendar, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BottomNav } from "@/components/ui/BottomNav";
import { Button } from "@/components/ui/button";
import avatarImg from "@/assets/avatar-broker.jpg";

export default function Perfil() {
  const navigate = useNavigate();

  const profileInfo = [
    { icon: User, label: "Nombre", value: "Facundo Martínez" },
    { icon: Mail, label: "Email", value: "facundo@brokers360.com" },
    { icon: Phone, label: "Teléfono", value: "+54 11 5555-1234" },
    { icon: MapPin, label: "Zona", value: "Capital Federal" },
    { icon: Calendar, label: "Miembro desde", value: "Enero 2024" },
    { icon: Award, label: "Nivel", value: "Broker Senior" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="px-4 pt-6 pb-4">
        <h1 className="text-2xl font-bold text-foreground">Mi Perfil</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Gestiona tu información personal
        </p>
      </header>

      <div className="px-4 space-y-6">
        {/* Avatar Section */}
        <div className="glass-card rounded-2xl p-6 flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={avatarImg}
              alt="Avatar"
              className="w-24 h-24 rounded-full object-cover border-4 border-accent"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-accent rounded-full border-4 border-background flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1">Facundo Martínez</h2>
          <p className="text-sm text-muted-foreground mb-4">Broker Zonal</p>
          <Button variant="outline" className="w-full max-w-xs">
            Editar Perfil
          </Button>
        </div>

        {/* Profile Information */}
        <div className="glass-card rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Información Personal
          </h3>
          {profileInfo.map((info) => {
            const Icon = info.icon;
            return (
              <div
                key={info.label}
                className="flex items-start gap-3 pb-4 border-b border-border/30 last:border-b-0 last:pb-0"
              >
                <div className="mt-0.5 p-2 bg-secondary rounded-lg">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                  <p className="text-sm font-medium text-foreground">{info.value}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full h-12 justify-start"
            onClick={() => {}}
          >
            Cambiar Contraseña
          </Button>
          <Button
            variant="outline"
            className="w-full h-12 justify-start text-destructive border-destructive/30 hover:bg-destructive/10"
            onClick={() => navigate("/login")}
          >
            Cerrar Sesión
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
