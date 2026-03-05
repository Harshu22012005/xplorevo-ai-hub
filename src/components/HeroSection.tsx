import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-secondary/10 blur-[120px]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-1.5 mb-8 text-xs text-muted-foreground border border-border">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
            Powered by Xplorevo Pvt Ltd
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Explore{" "}
            <span className="text-gradient">100+ Powerful</span>
            <br />
            AI Tools for Startups
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Discover the best AI tools for developers, entrepreneurs, designers, and innovators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary font-heading text-base px-8">
              <a href="#tools">
                Explore Tools <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-muted font-heading text-base px-8">
              <a href="#community">
                <Plus className="mr-2 w-4 h-4" /> Submit AI Tool
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
