import { motion } from "framer-motion";
import { Rocket, Code, Megaphone, Palette, Zap } from "lucide-react";

const stacks = [
  { icon: Rocket, title: "AI for Founders", desc: "Tools to validate ideas, manage operations, and scale fast.", color: "text-primary" },
  { icon: Code, title: "AI for Developers", desc: "Code assistants, APIs, and deployment tools.", color: "text-secondary" },
  { icon: Megaphone, title: "AI for Marketing", desc: "Content creation, SEO, and campaign automation.", color: "text-accent" },
  { icon: Palette, title: "AI for Designers", desc: "Image generation, UI tools, and creative assets.", color: "text-primary" },
  { icon: Zap, title: "AI for Automation", desc: "Workflow automation and integration platforms.", color: "text-secondary" },
];

const StartupStack = () => {
  return (
    <section className="py-20 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            Best AI Tools for <span className="text-gradient">Startups</span>
          </h2>
          <p className="text-muted-foreground">Curated stacks for every startup role.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {stacks.map((stack, i) => (
            <motion.div
              key={stack.title}
              className="bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <stack.icon className={`w-8 h-8 mx-auto mb-3 ${stack.color}`} />
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{stack.title}</h3>
              <p className="text-muted-foreground text-xs">{stack.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartupStack;
