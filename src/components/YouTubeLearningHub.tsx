import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ExternalLink, Star, Play } from "lucide-react";

type Channel = {
  name: string;
  category: string;
  level: string;
  link: string;
  bestFor: string;
  contentType: string[];
  rating: number;
};

const channels: Channel[] = [
  // AI Tools
  { name: "Matt Wolfe", category: "AI Tools", level: "Beginner", link: "https://www.youtube.com/@mreflow", bestFor: "AI tools updates", contentType: ["Tutorials", "News"], rating: 5 },
  { name: "AI Advantage", category: "AI Tools", level: "Beginner", link: "https://www.youtube.com/@AIAdvantage", bestFor: "ChatGPT workflows", contentType: ["Tutorials"], rating: 5 },
  { name: "Future Tools", category: "AI Tools", level: "Beginner", link: "https://www.youtube.com/@FutureTools", bestFor: "Tool discovery", contentType: ["News"], rating: 4 },
  { name: "Wes Roth", category: "AI Tools", level: "Intermediate", link: "https://www.youtube.com/@WesRoth", bestFor: "AI trends", contentType: ["News"], rating: 4 },
  { name: "Skill Leap AI", category: "AI Tools", level: "Beginner", link: "https://www.youtube.com/@SkillLeapAI", bestFor: "Practical AI", contentType: ["Tutorials"], rating: 4 },
  { name: "Krishnaik", category: "AI Tools", level: "Intermediate", link: "https://www.youtube.com/@krishnaik06", bestFor: "AI apps", contentType: ["Tutorials"], rating: 5 },
  { name: "All About AI", category: "AI Tools", level: "Beginner", link: "https://www.youtube.com/@AllAboutAI", bestFor: "AI guides", contentType: ["Tutorials"], rating: 4 },
  // AI Coding
  { name: "Fireship", category: "Coding", level: "Intermediate", link: "https://www.youtube.com/@Fireship", bestFor: "Dev + AI", contentType: ["Tutorials"], rating: 5 },
  { name: "NetworkChuck", category: "Coding", level: "Beginner", link: "https://www.youtube.com/@NetworkChuck", bestFor: "Hands-on labs", contentType: ["Projects"], rating: 5 },
  { name: "Codebasics", category: "Coding", level: "Beginner", link: "https://www.youtube.com/@codebasics", bestFor: "ML projects", contentType: ["Tutorials"], rating: 5 },
  { name: "Sentdex", category: "Coding", level: "Advanced", link: "https://www.youtube.com/@sentdex", bestFor: "Python ML", contentType: ["Tutorials"], rating: 5 },
  { name: "freeCodeCamp", category: "Coding", level: "Beginner", link: "https://www.youtube.com/@freecodecamp", bestFor: "Full courses", contentType: ["Tutorials"], rating: 5 },
  { name: "Tech With Tim", category: "Coding", level: "Intermediate", link: "https://www.youtube.com/@TechWithTim", bestFor: "Python AI", contentType: ["Tutorials"], rating: 4 },
  { name: "Corey Schafer", category: "Coding", level: "Beginner", link: "https://www.youtube.com/@coreyms", bestFor: "Python basics", contentType: ["Tutorials"], rating: 5 },
  // Generative AI
  { name: "Kriscoart", category: "Gen AI", level: "Beginner", link: "https://www.youtube.com/@kriscoart", bestFor: "Midjourney", contentType: ["Tutorials"], rating: 5 },
  { name: "MattVidPro AI", category: "Gen AI", level: "Intermediate", link: "https://www.youtube.com/@MattVidPro", bestFor: "AI experiments", contentType: ["Tutorials"], rating: 4 },
  { name: "Nick St Pierre", category: "Gen AI", level: "Intermediate", link: "https://www.youtube.com/@NickStPierre", bestFor: "Prompting", contentType: ["Tutorials"], rating: 4 },
  { name: "Futurepedia", category: "Gen AI", level: "Beginner", link: "https://www.youtube.com/@Futurepedia", bestFor: "Tools", contentType: ["News"], rating: 4 },
  // Fundamentals
  { name: "3Blue1Brown", category: "Fundamentals", level: "Beginner", link: "https://www.youtube.com/@3blue1brown", bestFor: "Math AI", contentType: ["Tutorials"], rating: 5 },
  { name: "DeepLearning AI", category: "Fundamentals", level: "Intermediate", link: "https://www.youtube.com/@DeepLearningAI", bestFor: "AI courses", contentType: ["Tutorials"], rating: 5 },
  { name: "StatQuest", category: "Fundamentals", level: "Beginner", link: "https://www.youtube.com/@statquest", bestFor: "ML concepts", contentType: ["Tutorials"], rating: 5 },
  { name: "Yannic Kilcher", category: "Fundamentals", level: "Advanced", link: "https://www.youtube.com/@YannicKilcher", bestFor: "Research", contentType: ["Tutorials"], rating: 5 },
  // Research
  { name: "Two Minute Papers", category: "Research", level: "Beginner", link: "https://www.youtube.com/@TwoMinutePapers", bestFor: "Papers", contentType: ["News"], rating: 5 },
  { name: "AI Explained", category: "Research", level: "Intermediate", link: "https://www.youtube.com/@AIExplained", bestFor: "LLMs", contentType: ["News"], rating: 5 },
  { name: "Lex Fridman", category: "Research", level: "Advanced", link: "https://www.youtube.com/@lexfridman", bestFor: "Interviews", contentType: ["Podcasts"], rating: 5 },
  // Indian Creators
  { name: "CodeWithHarry", category: "Indian", level: "Beginner", link: "https://www.youtube.com/@CodeWithHarry", bestFor: "Coding", contentType: ["Tutorials"], rating: 5 },
  { name: "Ansh Mehra", category: "Indian", level: "Beginner", link: "https://www.youtube.com/@AnshMehra", bestFor: "AI productivity", contentType: ["Tutorials"], rating: 4 },
  { name: "Ishaan Sharma", category: "Indian", level: "Beginner", link: "https://www.youtube.com/@IshaanSharma7390", bestFor: "Career AI", contentType: ["Tutorials"], rating: 4 },
  { name: "WsCube Tech", category: "Indian", level: "Beginner", link: "https://www.youtube.com/@wscubetech", bestFor: "AI + marketing", contentType: ["Tutorials"], rating: 4 },
];

const categoryTabs = ["All", "AI Tools", "Coding", "Gen AI", "Fundamentals", "Research", "Indian"];
const levelTabs = ["All", "Beginner", "Intermediate", "Advanced"];

const YouTubeLearningHub = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = channels.filter((ch) => {
    const matchCategory = activeCategory === "All" || ch.category === activeCategory;
    const matchLevel = activeLevel === "All" || ch.level === activeLevel;
    const matchSearch =
      ch.name.toLowerCase().includes(search.toLowerCase()) ||
      ch.bestFor.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchLevel && matchSearch;
  });

  return (
    <section id="youtube" className="py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 rounded-full px-4 py-1.5 mb-4 text-xs text-red-400 border border-red-500/20">
            <Play className="w-3 h-3" /> AI Learning Hub
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            📺 Top AI <span className="text-gradient-gold">YouTube Channels</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Curated collection of the best YouTube channels to learn AI tools, coding, generative AI, and research.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex items-center bg-muted rounded-lg px-3 py-2 w-full max-w-md mx-auto">
            <Search className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search channels..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {levelTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveLevel(tab)}
                className={`px-3 py-1 rounded-full text-[11px] font-medium transition-all border ${
                  activeLevel === tab
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((ch, i) => (
            <motion.a
              key={ch.name}
              href={ch.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card border border-border rounded-xl p-5 flex flex-col hover:border-red-500/30 transition-all group card-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center font-heading font-bold text-red-400 text-lg">
                  <Play className="w-5 h-5" />
                </div>
                <div className="flex gap-1.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                    {ch.category}
                  </span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border ${
                    ch.level === "Beginner" ? "border-green-500/30 text-green-400" :
                    ch.level === "Intermediate" ? "border-yellow-500/30 text-yellow-400" :
                    "border-red-500/30 text-red-400"
                  }`}>
                    {ch.level}
                  </span>
                </div>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-red-400 transition-colors">{ch.name}</h3>
              <p className="text-muted-foreground text-sm mb-2 flex-1">{ch.bestFor}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: ch.rating }).map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <div className="flex gap-1">
                  {ch.contentType.map((t) => (
                    <span key={t} className="text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-3 flex items-center justify-center gap-2 text-sm bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg py-2 transition-colors font-medium">
                <ExternalLink className="w-3.5 h-3.5" /> Watch Channel
              </div>
            </motion.a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No channels found matching your search.</p>
        )}

        <p className="text-center text-muted-foreground text-xs mt-8">
          {filtered.length} channels • Curated by Xplorevo Tech Network
        </p>
      </div>
    </section>
  );
};

export default YouTubeLearningHub;
