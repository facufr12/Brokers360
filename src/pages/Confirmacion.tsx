import { Check, Clock, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/button";

export default function Confirmacion() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header title="Confirmación" />

      <main className="px-4 pb-8 flex flex-col items-center justify-center min-h-[calc(100vh-64px)]">
        <div className="max-w-sm mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center mx-auto mb-8 animate-scale-in">
            <Check className="w-12 h-12 text-accent-foreground" strokeWidth={3} />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¡Solicitud Enviada con Éxito!
          </h1>

          <p className="text-muted-foreground mb-8">
            Gracias por tu interés en unirte a nuestra red. Hemos recibido tus datos correctamente.
          </p>

          {/* Next Steps Card */}
          <div className="glass-card p-4 mb-8 text-left">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Próximos Pasos</h3>
                <p className="text-sm text-muted-foreground">
                  Nuestro equipo de admisiones revisará tu perfil y te contactará en las próximas{" "}
                  <strong className="text-foreground">48 horas hábiles</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => navigate("/")}
              className="w-full h-12 text-base font-semibold"
            >
              Volver al Inicio
            </Button>
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="w-full h-12 text-base"
            >
              Ver Mis Solicitudes
            </Button>
          </div>

          {/* Support Link */}
          <button
            onClick={() => {}}
            className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground hover:text-foreground transition-colors mx-auto"
          >
            <Headphones className="w-4 h-4" />
            ¿Tienes dudas? Contacta a soporte
          </button>
        </div>
      </main>
    </div>
  );
}
