import { Code2, Palette, Map, Car, Lightbulb, Shield } from "lucide-react";

const CATEGORIES = [
  {
    icon: Code2,
    title: "Scripts",
    count: "891",
    description: "LUA, Python, and ASI scripts. Gameplay mechanics, AI overhauls, custom events and missions.",
    color: "accent",
    href: "#mods",
  },
  {
    icon: Palette,
    title: "Visual Mods",
    count: "437",
    description: "ENB presets, texture packs, reshade configs, and weather overhauls for cinematic visuals.",
    color: "primary",
    href: "#mods",
  },
  {
    icon: Map,
    title: "Maps",
    count: "214",
    description: "Custom interiors, new districts, MLO add-ons, and full map expansions for the world.",
    color: "accent",
    href: "#mods",
  },
  {
    icon: Car,
    title: "Vehicles",
    count: "592",
    description: "Real-world and fictional cars, bikes, aircraft with custom handling and working features.",
    color: "primary",
    href: "#mods",
  },
  {
    icon: Lightbulb,
    title: "Ideas",
    count: "312",
    description: "Concept proposals for future mods. Upvote ideas you'd love to see built by the community.",
    color: "accent",
    href: "#ideas",
  },
  {
    icon: Shield,
    title: "Frameworks",
    count: "35",
    description: "Core frameworks like FiveM resources, vRP/ESX forks, and server infrastructure tools.",
    color: "primary",
    href: "#mods",
  },
];

export default function CategoriesSection() {
  return (
    <section id="scripts" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="text-xs font-mono-gta text-primary tracking-[0.3em] uppercase mb-2">
            &gt; What We Cover
          </div>
          <h2 className="section-title">
            Mod <span className="text-primary">Categories</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const isAccent = cat.color === "accent";
            return (
              <a
                key={cat.title}
                href={cat.href}
                className="group relative p-6 bg-card border border-border hover:border-primary transition-all duration-300 card-hover block"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Number */}
                <div className="absolute top-4 right-4 font-display text-5xl text-border group-hover:text-primary/10 transition-colors duration-300 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div
                  className={`w-12 h-12 border flex items-center justify-center mb-4 transition-all duration-300 ${
                    isAccent
                      ? "border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground"
                      : "border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-display text-2xl tracking-wide text-foreground group-hover:text-primary transition-colors duration-200">
                    {cat.title}
                  </h3>
                  <span
                    className={`font-mono-gta text-xs ${
                      isAccent ? "text-accent" : "text-primary"
                    }`}
                  >
                    {cat.count}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {cat.description}
                </p>

                <div
                  className={`mt-4 text-xs font-mono-gta uppercase tracking-widest flex items-center gap-2 transition-colors duration-200 ${
                    isAccent
                      ? "text-accent group-hover:text-accent"
                      : "text-primary group-hover:text-primary"
                  }`}
                >
                  Browse {cat.title} →
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
