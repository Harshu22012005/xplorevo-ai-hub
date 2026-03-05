import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { aiTools } from "@/data/aiTools";

const FeaturedTools = () => {
  const featured = aiTools.filter((t) => t.featured);

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
            <Star className="inline w-7 h-7 text-secondary mr-2 mb-1" />
            Featured <span className="text-gradient">AI Tools</span>
          </h2>
          <p className="text-muted-foreground">The most popular AI tools used by startups worldwide.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tool, i) => (
            <motion.div
              key={tool.id}
              className="relative bg-card border border-primary/20 rounded-xl p-6 glow-primary overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center font-heading font-bold text-xl text-primary">
                    {tool.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground">{tool.category}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                <Link
                  to={`/tool/${tool.id}`}
                  className="text-sm text-primary hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTools;
