import { useState } from "react";
import { motion } from "framer-motion";
import { Send, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { categories } from "@/data/aiTools";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const SubmitTool = () => {
  const [form, setForm] = useState({
    toolName: "",
    website: "",
    category: "",
    description: "",
    pricing: "",
    submitterName: "",
    submitterEmail: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.toolName || !form.website || !form.category || !form.description) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! Your AI tool has been submitted for review.");
    setForm({ toolName: "", website: "", category: "", description: "", pricing: "", submitterName: "", submitterEmail: "" });
  };

  const update = (key: string, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-2xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-2">
            Submit an <span className="text-gradient-gold">AI Tool</span>
          </h1>
          <p className="text-muted-foreground mb-8">Know a great AI tool? Submit it to be featured in our directory.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Tool Name *</label>
              <Input value={form.toolName} onChange={(e) => update("toolName", e.target.value)} placeholder="e.g. ChatGPT" className="bg-card border-border" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Website URL *</label>
              <Input value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="https://..." className="bg-card border-border" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Category *</label>
              <select
                value={form.category}
                onChange={(e) => update("category", e.target.value)}
                className="w-full h-10 rounded-md border border-border bg-card px-3 text-sm text-foreground"
              >
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Description *</label>
              <textarea
                value={form.description}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Brief description of the tool..."
                rows={3}
                className="w-full rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Pricing</label>
              <Input value={form.pricing} onChange={(e) => update("pricing", e.target.value)} placeholder="Free / Freemium / Paid" className="bg-card border-border" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                <Input value={form.submitterName} onChange={(e) => update("submitterName", e.target.value)} placeholder="Name" className="bg-card border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Your Email</label>
                <Input value={form.submitterEmail} onChange={(e) => update("submitterEmail", e.target.value)} placeholder="email@example.com" className="bg-card border-border" />
              </div>
            </div>
            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-heading">
              <Send className="w-4 h-4 mr-2" /> Submit Tool
            </Button>
          </form>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmitTool;
