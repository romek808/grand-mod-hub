import { Github, Twitter, Youtube, MessageCircle, Zap } from "lucide-react";

const LINKS = {
  Explore: ["Browse Mods", "New Releases", "Top Rated", "Scripts Library", "Mod Ideas"],
  Community: ["Discord Server", "Forums", "Showcase", "Tutorials", "Modding Wiki"],
  Resources: ["Getting Started", "Script API Docs", "FiveM Resources", "OpenIV Guide", "Report a Bug"],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary" fill="currentColor" />
              </div>
              <span className="font-display text-2xl text-primary tracking-widest">
                GTA<span className="text-foreground">MOD</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6 max-w-xs">
              The definitive community hub for Grand Theft Auto V modifications, scripts, and creative ideas.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-display text-xl text-primary tracking-wider mb-4">{group}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-body"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono-gta text-muted-foreground/50 text-center sm:text-left">
            © 2025 GTA Mod Hub. Fan-made community project. Not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono-gta text-muted-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
