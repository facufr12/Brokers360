import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Captacion from "./pages/Captacion";
import Confirmacion from "./pages/Confirmacion";
import Dashboard from "./pages/Dashboard";
import Cursos from "./pages/Cursos";
import Comisiones from "./pages/Comisiones";
import Perfil from "./pages/Perfil";
import Leads from "./pages/Leads";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex items-start justify-center">
          <div className="w-full max-w-md mx-auto shadow-2xl">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/captacion" element={<Captacion />} />
              <Route path="/confirmacion" element={<Confirmacion />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/comisiones" element={<Comisiones />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
