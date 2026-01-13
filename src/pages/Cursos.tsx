import { useState } from "react";
import { Search } from "lucide-react";
import { Header } from "@/components/ui/Header";
import { BottomNav } from "@/components/ui/BottomNav";
import { CourseCard } from "@/components/ui/CourseCard";
import { cn } from "@/lib/utils";

const categories = ["Todos", "Ventas", "Legales", "Producto"];

const courses = [
  {
    id: 1,
    title: "Módulo de Producto",
    duration: "45 min",
    category: "Producto",
    progress: 40,
    status: "in-progress" as const,
  },
  {
    id: 2,
    title: "Módulo de Ventas",
    duration: "1h 30m",
    category: "Ventas",
    description: "Técnicas avanzadas para cierre de ventas y manejo de objeciones.",
    status: "locked" as const,
  },
  {
    id: 3,
    title: "Módulo de Legales",
    duration: "2h 15m",
    category: "Legales",
    description: "Normativas y regulaciones del sector de medicina prepaga.",
    status: "locked" as const,
  },
];

export default function Cursos() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = activeCategory === "Todos" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header title="Cursos y Capacitaciones" showBack showNotifications />

      <main className="px-4 space-y-5">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Buscar cursos, temas o instructores"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input pl-10"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Alert Message */}
        <div className="glass-card p-4">
          <p className="text-foreground font-medium">
            ¡Hola! Completá el módulo de Producto para pasar al siguiente
          </p>
        </div>

        {/* Course List */}
        <div className="space-y-4">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              duration={course.duration}
              category={course.category}
              description={course.description}
              progress={course.progress}
              status={course.status}
              className="animate-slide-up"
            />
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
