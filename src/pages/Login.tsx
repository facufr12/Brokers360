import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Eye, EyeOff, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center">
            <Shield className="w-10 h-10 text-foreground" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-foreground text-center mb-2">
          Inicio de Sesión
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          CRM móvil para brokers de medicina prepaga
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="ejemplo@broker.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input pr-10"
                required
              />
              <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ¿Olvidé mi contraseña?
            </Link>
          </div>

          <Button type="submit" className="w-full h-12 text-base font-semibold">
            Iniciar Sesión
          </Button>
        </form>

        {/* Register link */}
        <p className="text-center text-muted-foreground mt-8">
          ¿No tienes una cuenta?{" "}
          <Link to="/captacion" className="text-foreground font-medium hover:underline">
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
