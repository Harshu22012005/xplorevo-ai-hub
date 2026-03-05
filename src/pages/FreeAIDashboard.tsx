import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, ArrowLeft, ExternalLink, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const freeTools = [
  { name: "ChatGPT", url: "https://chat.openai.com", desc: "AI chatbot for conversations, coding, and content.", category: "Writing" },
  { name: "Google Gemini", url: "https://gemini.google.com", desc: "Google's multimodal AI assistant.", category: "Writing" },
  { name: "Claude", url: "https://claude.ai", desc: "Anthropic's safe & helpful AI assistant.", category: "Writing" },
  { name: "Canva", url: "https://canva.com", desc: "Free design tool with AI features.", category: "Graphics" },
  { name: "Remove.bg", url: "https://remove.bg", desc: "AI background removal tool.", category: "Graphics" },
  { name: "Gamma", url: "https://gamma.app", desc: "AI-powered presentations and documents.", category: "Writing" },
  { name: "Hugging Face", url: "https://huggingface.co", desc: "Open-source AI model hub and playground.", category: "APIs" },
  { name: "Perplexity", url: "https://perplexity.ai", desc: "AI-powered search engine with citations.", category: "Writing" },
  { name: "Poe", url: "https://poe.com", desc: "Access multiple AI bots in one platform.", category: "Writing" },
  { name: "Leonardo AI", url: "https://leonardo.ai", desc: "Free AI image generation platform.", category: "Graphics" },
  { name: "Ideogram", url: "https://ideogram.ai", desc: "AI image generation with text rendering.", category: "Graphics" },
  { name: "Clipdrop", url: "https://clipdrop.co", desc: "AI-powered visual editing suite.", category: "Graphics" },
  { name: "Grammarly", url: "https://grammarly.com", desc: "AI writing assistant for grammar and clarity.", category: "Writing" },
  { name: "QuillBot", url: "https://quillbot.com", desc: "AI paraphrasing and summarization tool.", category: "Writing" },
  { name: "Descript", url: "https://descript.com", desc: "AI-powered video & podcast editing.", category: "Video Editing" },
  { name: "Loom", url: "https://loom.com", desc: "AI-enhanced screen recording and messaging.", category: "Video Editing" },
  { name: "Notion AI", url: "https://notion.so", desc: "AI assistant for writing and productivity.", category: "Writing" },
  { name: "Vercel v0", url: "https://v0.dev", desc: "AI-powered UI generation tool.", category: "Web Development" },
  { name: "Replit", url: "https://replit.com", desc: "AI-powered collaborative coding platform.", category: "Application Development" },
  { name: "Zapier", url: "https://zapier.com", desc: "Workflow automation with AI features.", category: "Automation" },
];

const FreeAIDashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === "XTN2030") {
      setAuthenticated(true);
      toast.success("Access granted! Enjoy free AI tools.");
    } else {
      toast.error("Invalid passkey. Please try again.");
    }
  };

  const filteredTools = freeTools.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-[70vh] px-4">
          <motion.div
            className="w-full max-w-md bg-card border border-border rounded-2xl p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <Lock className="w-7 h-7 text-primary" />
            </div>
            <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Xplorevo Free AI Tools</h1>
            <p className="text-muted-foreground text-sm mb-6">Enter the passkey to access our curated collection of free AI tools.</p>
            <form onSubmit={handleUnlock} className="space-y-4">
              <Input
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="Enter passkey..."
                className="bg-muted border-border text-center text-lg tracking-widest"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
                <Unlock className="w-4 h-4 mr-2" /> Unlock Dashboard
              </Button>
            </form>
            <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground text-xs mt-4">
              <ArrowLeft className="w-3 h-3" /> Back to Home
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">
              Free AI Tools <span className="text-gradient-gold">Dashboard</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Click "Open Tool" to launch any AI tool in a new tab.</p>
          </div>
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm">
            <ArrowLeft className="w-4 h-4 inline mr-1" /> Home
          </Link>
        </div>

        {/* Search */}
        <div className="flex items-center bg-muted rounded-lg px-3 py-2 w-full max-w-md mb-8">
          <Search className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search free tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full"
          />
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="bg-card border border-border rounded-xl p-5 flex flex-col hover:border-primary/30 transition-all card-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-heading font-bold text-primary text-lg">
                  {tool.name.charAt(0)}
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                  {tool.category}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{tool.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{tool.desc}</p>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary rounded-lg py-2.5 transition-colors font-medium"
              >
                <ExternalLink className="w-4 h-4" /> Open Tool
              </a>
            </motion.div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No tools found matching your search.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FreeAIDashboard;
