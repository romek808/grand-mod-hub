import modderProfile from "@/assets/modder-profile.jpg";
import losSantos from "@/assets/los-santos-night.jpg";
import { MessageSquare, Heart, Share2 } from "lucide-react";

const POSTS = [
  {
    id: 1,
    author: "D3V_Ghost",
    avatar: modderProfile,
    time: "2 hours ago",
    content: "Just dropped NativeUI Redux v3.2! Added async menu support and 8 new themes. Check it out in the Scripts section 🎮",
    likes: 284,
    comments: 47,
    image: null,
  },
  {
    id: 2,
    author: "CineMod_X",
    avatar: null,
    time: "5 hours ago",
    content: "Working on a new ENB preset inspired by Blade Runner. Early screenshots look insane — expect a release by end of week.",
    likes: 512,
    comments: 93,
    image: losSantos,
  },
  {
    id: 3,
    author: "MapCraft_Labs",
    avatar: null,
    time: "1 day ago",
    content: "Blaine County Wilderness just hit 25K downloads! Thank you all. v2.0 with full underground cave system drops next month.",
    likes: 1024,
    comments: 156,
    image: null,
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="text-xs font-mono-gta text-primary tracking-[0.3em] uppercase mb-2">
            &gt; What's Happening
          </div>
          <h2 className="section-title">
            Community <span className="text-primary">Feed</span>
          </h2>
          <div className="section-line" />
        </div>

        <div className="max-w-2xl space-y-4">
          {POSTS.map((post) => (
            <div
              key={post.id}
              className="bg-card border border-border p-6 hover:border-primary/40 transition-all duration-300"
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 overflow-hidden border border-border flex-shrink-0">
                  {post.avatar ? (
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center font-display text-lg text-primary">
                      {post.author[0]}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-mono-gta text-sm text-primary">{post.author}</div>
                  <div className="text-xs font-mono-gta text-muted-foreground">{post.time}</div>
                </div>
              </div>

              {/* Content */}
              <p className="text-foreground/80 font-body text-sm leading-relaxed mb-4">
                {post.content}
              </p>

              {/* Optional image */}
              {post.image && (
                <div className="mb-4 overflow-hidden border border-border">
                  <img src={post.image} alt="Post" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-6 pt-3 border-t border-border">
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 text-xs font-mono-gta uppercase tracking-wider">
                  <Heart className="w-4 h-4" />
                  {post.likes.toLocaleString()}
                </button>
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 text-xs font-mono-gta uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments}
                </button>
                <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors duration-200 text-xs font-mono-gta uppercase tracking-wider ml-auto">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
