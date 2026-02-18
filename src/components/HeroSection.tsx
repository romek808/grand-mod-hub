import { useEffect, useRef, useState } from "react";
import { ChevronDown, Users, Download, Star } from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/gta-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay layers */}
      <div className="absolute inset-0 bg-black/60" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      {/* Scanline effect */}
      <div className="absolute inset-0 scanline opacity-20" />

      {/* Corner decorations */}
      <div className="absolute top-24 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/60 animate-pulse-border" />
      <div className="absolute top-24 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/60 animate-pulse-border" />
      <div className="absolute bottom-16 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/60 animate-pulse-border" />
      <div className="absolute bottom-16 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/60 animate-pulse-border" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <div
          className={`transition-all duration-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/40 bg-primary/10 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono-gta text-primary tracking-[0.3em] uppercase">
              Grand Theft Auto V — Modification Network
            </span>
          </div>

          {/* Main title */}
          <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] leading-none mb-4 text-foreground">
            <span className="animate-shimmer block">GTA</span>
            <span
              className="block text-foreground"
              style={{
                textShadow: "0 0 60px rgba(255,180,0,0.3)",
              }}
            >
              MOD HUB
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-2xl text-foreground/60 font-body tracking-widest uppercase mb-10 max-w-2xl mx-auto"
            style={{ animationDelay: "0.3s" }}
          >
            Scripts • Visual Mods • New Ideas • Custom Maps
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#mods"
              className="px-8 py-3 bg-primary text-primary-foreground font-display text-2xl tracking-widest uppercase border border-primary hover:bg-transparent hover:text-primary hover:border-glow transition-all duration-300 min-w-[200px]"
            >
              Browse Mods
            </a>
            <a
              href="#submit"
              className="px-8 py-3 bg-transparent text-foreground font-display text-2xl tracking-widest uppercase border border-foreground/30 hover:border-primary hover:text-primary transition-all duration-300 min-w-[200px]"
            >
              Share Yours
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {[
              { icon: Users, value: "24.7K", label: "Modders" },
              { icon: Download, value: "183K", label: "Downloads" },
              { icon: Star, value: "2.4K", label: "Mods" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="font-display text-3xl text-primary leading-none animate-flicker">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-mono-gta">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#mods"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 animate-bounce"
      >
        <span className="text-xs font-mono-gta tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </a>
    </section>
  );
}
