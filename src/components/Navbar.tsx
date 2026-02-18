import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Mods", href: "#mods" },
  { label: "Scripts", href: "#scripts" },
  { label: "Ideas", href: "#ideas" },
  { label: "Submit", href: "#submit" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-8 h-8 border-2 border-primary flex items-center justify-center group-hover:border-glow transition-all duration-300">
            <Zap className="w-4 h-4 text-primary" fill="currentColor" />
          </div>
          <div>
            <span className="font-display text-2xl text-primary tracking-widest leading-none">
              GTA<span className="text-foreground">MOD</span>
            </span>
            <div className="text-[9px] font-mono-gta text-muted-foreground uppercase tracking-[0.3em] leading-none">
              San Andreas Network
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#submit"
            className="px-5 py-2 bg-primary text-primary-foreground font-display text-lg tracking-widest uppercase hover:bg-primary/80 transition-all duration-200 border border-primary"
          >
            Upload Mod
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/98 border-t border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#submit"
            className="mt-2 px-5 py-2 bg-primary text-primary-foreground font-display text-lg tracking-widest uppercase text-center"
          >
            Upload Mod
          </a>
        </div>
      )}
    </nav>
  );
}
