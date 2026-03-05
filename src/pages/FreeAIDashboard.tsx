import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Unlock, ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const freeTools = [
  { name: "ChatGPT", url: "https://chat.openai.com", embed: "https://chat.openai.com", desc: "AI chatbot for conversations, coding, and content." },
  { name: "Google Gemini", url: "https://gemini.google.com", embed: "https://gemini.google.com", desc: "Google's multimodal AI assistant." },
  { name: "Claude", url: "https://claude.ai", embed: "https://claude.ai", desc: "Anthropic's safe & helpful AI assistant." },
  { name: "Canva", url: "https://canva.com", embed: "https://canva.com", desc: "Free design tool with AI features." },
  { name: "Remove.bg", url: "https://remove.bg", embed: "https://remove.bg", desc: "AI background removal tool." },
  { name: "Gamma", url: "https://gamma.app", embed: "https://gamma.app", desc: "AI-powered presentations and documents." },
  { name: "Hugging Face", url: "https://huggingface.co", embed: "https://huggingface.co", desc: "Open-source AI model hub and playground." },
  { name: "Perplexity", url: "https://perplexity.ai", embed: "https://perplexity.ai", desc: "AI-powered search engine with citations." },
  { name: "Poe", url: "https://poe.com", embed: "https://poe.com", desc: "Access multiple AI bots in one platform." },
  { name: "Leonardo AI", url: "https://leonardo.ai", embed: "https://leonardo.ai", desc: "Free AI image generation platform." },
  { name: "Ideogram", url: "https://ideogram.ai", embed: "https://ideogram.ai", desc: "AI image generation with text rendering." },
  { name: "Clipdrop", url: "https://clipdrop.co", embed: "https://clipdrop.co", desc: "AI-powered visual editing suite." },
];

const FreeAIDashboard = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState("");
  const [selectedTool, setSelectedTool] = useState<typeof freeTools[0] | null>(null);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === "XTN2030") {
      setAuthenticated(true);
      toast.success("Access granted! Enjoy free AI tools.");
    } else {
      toast.error("Invalid passkey. Please try again.");
    }
  };

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">
              Free AI Tools <span className="text-gradient-gold">Dashboard</span>
            </h1>
            <p className="text-muted-foreground text-sm mt-1">Click any tool to open it. Enjoy exploring!</p>
          </div>
          <Link to="/" className="text-muted-foreground hover:text-foreground text-sm">
            <ArrowLeft className="w-4 h-4 inline mr-1" /> Home
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tool list */}
          <div className="space-y-3">
            {freeTools.map((tool) => (
              <motion.button
                key={tool.name}
                onClick={() => setSelectedTool(tool)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedTool?.name === tool.name
                    ? "bg-primary/10 border-primary/40"
                    : "bg-card border-border hover:border-primary/20"
                }`}
                whileHover={{ x: 4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center font-heading font-bold text-primary">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm">{tool.name}</h3>
                    <p className="text-muted-foreground text-xs">{tool.desc}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Embed area */}
          <div className="lg:col-span-2">
            {selectedTool ? (
              <motion.div
                key={selectedTool.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <h2 className="font-heading font-semibold text-foreground">{selectedTool.name}</h2>
                  <Button asChild size="sm" variant="outline" className="border-border text-foreground">
                    <a href={selectedTool.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Open in New Tab
                    </a>
                  </Button>
                </div>
                <div className="w-full h-[600px] bg-muted flex items-center justify-center">
                  <iframe
                    src={selectedTool.embed}
                    className="w-full h-full border-0"
                    title={selectedTool.name}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              </motion.div>
            ) : (
              <div className="bg-card border border-border rounded-2xl h-[600px] flex items-center justify-center text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <Unlock className="w-7 h-7 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground font-heading">Select a tool from the list to get started</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FreeAIDashboard;
