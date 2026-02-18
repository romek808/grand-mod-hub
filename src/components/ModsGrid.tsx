import { useState } from "react";
import { Download, Star, Eye, Tag } from "lucide-react";
import modCar from "@/assets/mod-car.jpg";
import modScript from "@/assets/mod-script.jpg";
import modWorld from "@/assets/mod-world.jpg";
import losSantos from "@/assets/los-santos-night.jpg";
import modderProfile from "@/assets/modder-profile.jpg";

type Category = "All" | "Scripts" | "Visual" | "Maps" | "Vehicles" | "Ideas";

const CATEGORIES: Category[] = ["All", "Scripts", "Visual", "Maps", "Vehicles", "Ideas"];

const MODS = [
  {
    id: 1,
    title: "NativeUI Redux",
    description: "Full rebuild of the NativeUI library with async support, custom themes, and 30+ new UI elements for script developers.",
    category: "Scripts",
    image: modScript,
    downloads: "48.2K",
    rating: 4.9,
    views: "112K",
    author: "D3V_Ghost",
    tags: ["LUA", "NativeUI", "API"],
    featured: true,
    color: "accent",
  },
  {
    id: 2,
    title: "Chrome Traffic Overhaul",
    description: "Replaces all stock vehicles with highly detailed custom models featuring working interiors and realistic damage systems.",
    category: "Vehicles",
    image: modCar,
    downloads: "92.1K",
    rating: 4.8,
    views: "203K",
    author: "R3AListic",
    tags: ["Vehicles", "Textures", "Add-On"],
    featured: true,
    color: "primary",
  },
  {
    id: 3,
    title: "Los Santos Noir",
    description: "Complete visual rework turning Los Santos into a 1940s noir city. Custom ENB, retro vehicles, period-accurate NPCs.",
    category: "Visual",
    image: losSantos,
    downloads: "31.8K",
    rating: 4.7,
    views: "78K",
    author: "CineMod_X",
    tags: ["ENB", "Reshade", "Visual"],
    featured: false,
    color: "primary",
  },
  {
    id: 4,
    title: "Pacific Standard Expanded",
    description: "Adds 12 new heist missions with custom voice acting, branching paths, and online co-op support for up to 6 players.",
    category: "Scripts",
    image: modderProfile,
    downloads: "19.4K",
    rating: 4.6,
    views: "54K",
    author: "HeistKing_",
    tags: ["Heist", "Online", "Story"],
    featured: false,
    color: "accent",
  },
  {
    id: 5,
    title: "Blaine County Wilderness",
    description: "Massive terrain expansion adding 40+ square miles of new wilderness, caves, and abandoned settlements to explore.",
    category: "Maps",
    image: modWorld,
    downloads: "27.6K",
    rating: 4.8,
    views: "91K",
    author: "MapCraft_Labs",
    tags: ["Map", "Terrain", "Open World"],
    featured: true,
    color: "primary",
  },
  {
    id: 6,
    title: "Quantum AI Peds",
    description: "Proposed mod concept: Neural network controlled NPCs that learn from player behavior and adapt over time.",
    category: "Ideas",
    image: modScript,
    downloads: "—",
    rating: 4.5,
    views: "34K",
    author: "FutureModder",
    tags: ["AI", "Concept", "NPCs"],
    featured: false,
    color: "accent",
  },
];

export default function ModsGrid() {
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? MODS : MODS.filter((m) => m.category === active);

  return (
    <section id="mods" className="py-24 bg-background relative">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, hsl(var(--primary)/0.3) 40px, hsl(var(--primary)/0.3) 41px),
          repeating-linear-gradient(90deg, transparent, transparent 40px, hsl(var(--primary)/0.3) 40px, hsl(var(--primary)/0.3) 41px)`
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-12">
          <div className="text-xs font-mono-gta text-primary tracking-[0.3em] uppercase mb-2">
            &gt; Browse Collection
          </div>
          <h2 className="section-title">Featured <span className="text-primary">Mods</span></h2>
          <div className="section-line" />
          <p className="text-muted-foreground font-body text-lg max-w-xl mt-2">
            Community-created modifications, scripts, and concepts for Grand Theft Auto V.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 text-sm font-mono-gta uppercase tracking-widest border transition-all duration-200 ${
                active === cat
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((mod, i) => (
            <ModCard key={mod.id} mod={mod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModCard({ mod, index }: { mod: typeof MODS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative bg-card border border-border overflow-hidden card-hover cursor-pointer ${
        mod.featured ? "md:col-span-1" : ""
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Featured badge */}
      {mod.featured && (
        <div className="absolute top-3 right-3 z-20 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-mono-gta uppercase tracking-widest">
          Featured
        </div>
      )}

      {/* Category badge */}
      <div
        className={`absolute top-3 left-3 z-20 px-2 py-0.5 text-xs font-mono-gta uppercase tracking-widest border ${
          mod.color === "accent"
            ? "border-accent text-accent bg-accent/10"
            : "border-primary text-primary bg-primary/10"
        }`}
      >
        {mod.category}
      </div>

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={mod.image}
          alt={mod.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            hovered ? "scale-110" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            hovered ? "opacity-60" : "opacity-30"
          }`}
          style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }}
        />

        {/* Stats overlay on hover */}
        <div className={`absolute bottom-3 right-3 flex gap-3 transition-all duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}>
          <span className="flex items-center gap-1 text-xs text-foreground font-mono-gta bg-background/80 px-2 py-1">
            <Eye className="w-3 h-3" /> {mod.views}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-2xl text-foreground mb-1 tracking-wide group-hover:text-primary transition-colors duration-200">
          {mod.title}
        </h3>
        <p className="text-muted-foreground text-sm font-body mb-4 leading-relaxed line-clamp-2">
          {mod.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {mod.tags.map((tag) => (
            <span
              key={tag}
              className="tag-badge border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <Tag className="w-2.5 h-2.5 mr-1" />
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono-gta">
              <Download className="w-3 h-3 text-primary" />
              {mod.downloads}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono-gta">
              <Star className="w-3 h-3 text-primary" fill="currentColor" />
              {mod.rating}
            </span>
          </div>
          <span className="text-xs text-muted-foreground font-mono-gta">
            by <span className="text-primary">{mod.author}</span>
          </span>
        </div>
      </div>

      {/* Bottom border glow on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-all duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
