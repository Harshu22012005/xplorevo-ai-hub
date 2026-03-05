import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Check, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { aiTools } from "@/data/aiTools";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ToolDetail = () => {
  const { id } = useParams();
  const tool = aiTools.find((t) => t.id === id);

  if (!tool) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-2">Tool not found</h1>
          <Link to="/" className="text-primary hover:underline text-sm">← Back to directory</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Directory
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl font-heading font-bold text-primary shrink-0">
              {tool.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{tool.name}</h1>
                <Badge variant="outline" className="border-border text-muted-foreground">{tool.category}</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{tool.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                ))}
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                <a href={tool.website} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> Visit Website
                </a>
              </Button>
            </div>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Key Features */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-secondary" /> Key Features
              </h3>
              <ul className="space-y-2">
                {tool.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing & Info */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">Pricing & Info</h3>
              <dl className="space-y-3 text-sm">
                <div><dt className="text-muted-foreground text-xs">Pricing</dt><dd className="text-foreground">{tool.pricing}</dd></div>
                <div><dt className="text-muted-foreground text-xs">Startup Stage</dt><dd className="text-foreground">{tool.startupStage}</dd></div>
                <div><dt className="text-muted-foreground text-xs">Best For</dt><dd className="text-foreground">{tool.bestFor}</dd></div>
              </dl>
            </div>

            {/* Use Cases */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4">Startup Use Cases</h3>
              <ul className="space-y-2">
                {tool.useCases.map((uc) => (
                  <li key={uc} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> {uc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ToolDetail;
