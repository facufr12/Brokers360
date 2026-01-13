import { DollarSign, Clock, Headphones, Users, Briefcase, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import heroImage from "@/assets/hero-brokers.jpg";

export default function Landing() {
  const navigate = useNavigate();

  const stats = [
    { value: "500+", label: "BROKERS" },
    { value: "10k+", label: "CLIENTES" },
    { value: "25%", label: "COMISIÓN" },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Comisiones Altas",
      description: "Recibe los porcentajes más competitivos del mercado.",
    },
    {
      icon: Clock,
      title: "Flexibilidad Total",
      description: "Maneja tus horarios y trabaja desde donde quieras.",
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Equipo dedicado disponible para ayudarte siempre.",
    },
    {
      icon: Users,
      title: "Red de Contactos",
      description: "Accede a una comunidad de brokers profesionales.",
    },
    {
      icon: Briefcase,
      title: "Herramientas Pro",
      description: "CRM y recursos exclusivos para gestionar tu negocio.",
    },
    {
      icon: TrendingUp,
      title: "Crecimiento",
      description: "Capacitación continua y oportunidades de ascenso.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-4 pt-8 pb-12">
        <div className="max-w-lg mx-auto">
          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[4/3]">
            <img
              src={heroImage}
              alt="Equipo de brokers profesionales"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Convocatoria Abierta
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-4">
            Tu Futuro como{" "}
            <span className="text-">Broker Zonal</span>
          </h1>

          <p className="text-center text-muted-foreground mb-8 max-w-md mx-auto">
            Únete a la red líder en medicina prepaga. Gestiona tu propia cartera de clientes con las mejores herramientas del mercado.
          </p>

          {/* Stats */}
          <div className="glass-card p-4 mb-8 rounded-2xl">
            <div className="grid grid-cols-3 divide-x divide-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-2">
                  <p className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 mb-12">
            <Button
              onClick={() => navigate("/captacion")}
              className="w-full h-12 text-base font-semibold"
            >
              Quiero ser Broker
            </Button>
            <Button
              onClick={() => navigate("/login")}
              variant="outline"
              className="w-full h-12 text-base"
            >
              Ya tengo cuenta
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 pb-16">
        <div className="max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Beneficios Exclusivos
          </h2>
          <p className="text-muted-foreground mb-6">
            Todo lo que necesitas para escalar tu negocio.
          </p>

          <div className="space-y-3">
            {benefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                className="animate-fade-in"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
