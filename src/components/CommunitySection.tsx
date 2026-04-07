import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join the <span className="text-gradient">Xplorevo Tech Network</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Connect with innovators, founders, and AI builders exploring the future of technology.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary font-heading">
            <a href="https://chat.whatsapp.com/GY2GwPUTC8uAXP0gGGTzL7" target="_blank" rel="noopener noreferrer">
              <Users className="mr-2 w-4 h-4" /> Join Community on WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
