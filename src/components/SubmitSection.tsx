import { useState } from "react";
import { Upload, Send, CheckCircle } from "lucide-react";

const MOD_TYPES = ["Script (LUA)", "Script (ASI)", "Visual / ENB", "Vehicle", "Map / Interior", "Framework", "Concept / Idea", "Other"];

export default function SubmitSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    type: "",
    description: "",
    link: "",
    tags: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="submit" className="py-24 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-mono-gta text-primary tracking-[0.3em] uppercase mb-2">
              &gt; Share With The Community
            </div>
            <h2 className="section-title">Submit <span className="text-primary">Your Mod</span></h2>
            <div className="section-line mx-auto" />
            <p className="text-muted-foreground font-body mt-4">
              Scripts, visual mods, maps, or just a killer idea — we want to see it.
            </p>
          </div>

          {submitted ? (
            <div className="border border-accent bg-accent/10 p-12 text-center animate-scale-in">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="font-display text-4xl text-accent mb-2 tracking-wide">Submission Received</h3>
              <p className="text-muted-foreground font-body">
                Your mod has been submitted. Our team will review it within 24-48 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 border border-accent text-accent font-mono-gta text-sm uppercase tracking-widest hover:bg-accent hover:text-accent-foreground transition-all duration-200"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-border bg-card p-8 space-y-5"
            >
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-gta uppercase tracking-widest text-muted-foreground">
                    Mod Title *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="My Awesome Mod"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    className="w-full bg-input border border-border px-4 py-2.5 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200 text-sm"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-gta uppercase tracking-widest text-muted-foreground">
                    Your Handle *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="GTA_Modder"
                    value={form.author}
                    onChange={(e) => setForm({ ...form, author: e.target.value })}
                    className="w-full bg-input border border-border px-4 py-2.5 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200 text-sm"
                  />
                </div>
              </div>

              {/* Type */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono-gta uppercase tracking-widest text-muted-foreground">
                  Mod Type *
                </label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full bg-input border border-border px-4 py-2.5 text-foreground font-body focus:outline-none focus:border-primary transition-colors duration-200 text-sm"
                >
                  <option value="" disabled>Select type...</option>
                  {MOD_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono-gta uppercase tracking-widest text-muted-foreground">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe what your mod does, features, installation notes..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full bg-input border border-border px-4 py-2.5 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200 text-sm resize-none"
                />
              </div>

              {/* Link */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono-gta uppercase tracking-widest text-muted-foreground">
                  Download / GitHub Link
                </label>
                <input
                  type="url"
                  placeholder="https://github.com/..."
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  className="w-full bg-input border border-border px-4 py-2.5 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200 text-sm"
                />
              </div>

              {/* Tags */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono-gta uppercase tracking-widest text-muted-foreground">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="LUA, NativeUI, Online, FiveM"
                  value={form.tags}
                  onChange={(e) => setForm({ ...form, tags: e.target.value })}
                  className="w-full bg-input border border-border px-4 py-2.5 text-foreground font-body placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-200 text-sm"
                />
              </div>

              {/* File upload hint */}
              <div className="border border-dashed border-border p-6 text-center cursor-pointer hover:border-primary transition-colors duration-200 group">
                <Upload className="w-8 h-8 text-muted-foreground group-hover:text-primary mx-auto mb-2 transition-colors duration-200" />
                <p className="text-muted-foreground text-sm font-body">
                  Drag & drop screenshots or preview images here
                </p>
                <p className="text-xs font-mono-gta text-muted-foreground/50 mt-1">PNG, JPG up to 10MB</p>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-primary text-primary-foreground font-display text-2xl tracking-widest uppercase hover:bg-primary/80 transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                Submit Mod
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
