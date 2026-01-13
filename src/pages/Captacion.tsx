import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, DollarSign, Clock, Headphones } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FeatureCard } from "@/components/ui/FeatureCard";

export default function Captacion() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    zona: "",
  });

  const benefits = [
    {
      icon: DollarSign,
      title: "Altas Comisiones",
      description: "Escala tus ingresos sin límite.",
    },
    {
      icon: Clock,
      title: "Flexibilidad",
      description: "Maneja tus horarios libremente.",
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Equipo dedicado a tu éxito.",
    },
  ];

  const zonas = [
    "CABA - Zona Norte",
    "CABA - Zona Sur",
    "GBA - Zona Norte",
    "GBA - Zona Oeste",
    "GBA - Zona Sur",
    "Córdoba Capital",
    "Rosario",
    "Mendoza",
    "Otra",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/confirmacion");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Captación Brokers" showBack />

      <main className="px-4 pb-8">
        <div className="max-w-lg mx-auto">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Únete a nuestro equipo de Brokers Zonales
          </h1>
          <p className="text-muted-foreground mb-6">
            Gestiona tu propia zona, maximiza tus comisiones y accede a las mejores herramientas de medicina prepaga del mercado.
          </p>

          {/* Benefits */}
          <div className="space-y-3 mb-8">
            {benefits.map((benefit) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre Completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="form-input pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Ej. juan@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Teléfono</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="Ej. +54 11 1234-5678"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="form-input pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="zona">Zona de Interés</Label>
              <Select
                value={formData.zona}
                onValueChange={(value) => setFormData({ ...formData, zona: value })}
              >
                <SelectTrigger className="form-input">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <SelectValue placeholder="Selecciona una zona" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {zonas.map((zona) => (
                    <SelectItem key={zona} value={zona}>
                      {zona}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full h-12 text-base font-semibold mt-6">
              Enviar Solicitud
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Al enviar la solicitud, aceptas nuestros{" "}
              <a href="/terminos" className="underline hover:text-foreground">
                Términos y Condiciones
              </a>
              .
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}
