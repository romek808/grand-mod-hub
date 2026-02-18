const STATS = [
  { label: "Active Modders", value: "24,712" },
  { label: "Mods Published", value: "2,481" },
  { label: "Total Downloads", value: "183,291" },
  { label: "Scripts Shared", value: "891" },
  { label: "New This Week", value: "47" },
  { label: "Ideas Proposed", value: "312" },
  { label: "Countries", value: "94" },
  { label: "Avg Rating", value: "4.7★" },
];

export default function StatsTicker() {
  const doubled = [...STATS, ...STATS];

  return (
    <div className="bg-primary py-3 overflow-hidden relative border-y border-primary">
      <div className="flex animate-ticker whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((stat, i) => (
          <div key={i} className="flex items-center gap-3 mr-12">
            <span className="text-primary-foreground font-mono-gta text-sm uppercase tracking-widest opacity-60">
              {stat.label}
            </span>
            <span className="text-primary-foreground font-display text-xl tracking-wider">
              {stat.value}
            </span>
            <span className="text-primary-foreground/40 text-xl">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
