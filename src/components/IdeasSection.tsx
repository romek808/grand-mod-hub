import { Lightbulb, ThumbsUp, MessageSquare, Clock } from "lucide-react";

const IDEAS = [
  {
    id: 1,
    title: "Real-time Weather Sync",
    description: "Sync in-game weather with the real-world weather of Los Angeles using weather APIs. Imagine playing in rain IRL, playing in rain in game.",
    author: "WthrSync_Dev",
    votes: 2847,
    comments: 134,
    posted: "3 days ago",
    status: "Trending",
    statusColor: "primary",
  },
  {
    id: 2,
    title: "Procedural Mission Generator",
    description: "AI-powered system that generates unique missions based on player history, preferred playstyle, and current story position. Never the same mission twice.",
    author: "AI_Modder",
    votes: 1923,
    comments: 89,
    posted: "1 week ago",
    status: "High Interest",
    statusColor: "accent",
  },
  {
    id: 3,
    title: "Dynamic Economy System",
    description: "Full economic simulation where player actions affect stock prices, property values, and NPC behavior. Rob a bank? Nearby businesses board up windows.",
    author: "EconMod_Labs",
    votes: 3412,
    comments: 211,
    posted: "2 weeks ago",
    status: "In Development",
    statusColor: "accent",
  },
  {
    id: 4,
    title: "Multiplayer Heist Director",
    description: "A role separate from players that acts as a Mission Director — controlling camera, spawning enemies, adding objectives mid-heist in real-time.",
    author: "HeistGM_X",
    votes: 1567,
    comments: 73,
    posted: "5 days ago",
    status: "Concept",
    statusColor: "primary",
  },
];

export default function IdeasSection() {
  return (
    <section id="ideas" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-mono-gta text-primary tracking-[0.3em] uppercase mb-2">
              &gt; Community Wishlist
            </div>
            <h2 className="section-title">
              Mod <span className="text-primary">Ideas</span>
            </h2>
            <div className="section-line" />
          </div>
          <a
            href="#submit"
            className="self-start md:self-auto px-5 py-2 border border-primary text-primary font-mono-gta text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center gap-2"
          >
            <Lightbulb className="w-4 h-4" />
            Propose Idea
          </a>
        </div>

        <div className="space-y-4">
          {IDEAS.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IdeaCard({ idea, index }: { idea: typeof IDEAS[0]; index: number }) {
  const isAccent = idea.statusColor === "accent";

  return (
    <div
      className="group bg-card border border-border hover:border-primary p-6 transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-6"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Vote */}
      <div className="flex sm:flex-col items-center sm:items-center gap-3 sm:gap-1 sm:min-w-[60px]">
        <button className="flex flex-col items-center gap-1 group/vote">
          <ThumbsUp className="w-5 h-5 text-muted-foreground group-hover/vote:text-primary transition-colors duration-200" />
          <span className="font-display text-2xl text-foreground group-hover/vote:text-primary transition-colors duration-200 leading-none">
            {idea.votes.toLocaleString()}
          </span>
          <span className="text-xs font-mono-gta text-muted-foreground uppercase tracking-widest">Votes</span>
        </button>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px bg-border self-stretch" />

      {/* Content */}
      <div className="flex-1">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors duration-200 tracking-wide">
            {idea.title}
          </h3>
          <span
            className={`tag-badge ${
              isAccent
                ? "border-accent text-accent"
                : "border-primary text-primary"
            }`}
          >
            {idea.status}
          </span>
        </div>
        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
          {idea.description}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono-gta text-muted-foreground">
          <span>
            by <span className="text-primary">{idea.author}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" /> {idea.posted}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3" /> {idea.comments} comments
          </span>
        </div>
      </div>
    </div>
  );
}
