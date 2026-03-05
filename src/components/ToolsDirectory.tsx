import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { aiTools, categories, type ToolCategory } from "@/data/aiTools";
import ToolCard from "./ToolCard";

const ToolsDirectory = ({ searchQuery = "" }: { searchQuery?: string }) => {
  const [activeCategory, setActiveCategory] = useState<ToolCategory | "All">("All");

  const filtered = useMemo(() => {
    return aiTools.filter((tool) => {
      const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
            AI Tools <span className="text-gradient">Directory</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Browse our curated collection of 100+ AI tools across {categories.length} categories.
          </p>
        </motion.div>

        {/* Category filters */}
        <div id="categories" className="flex flex-wrap gap-2 justify-center mb-10">
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === "All"
                ? "bg-primary text-primary-foreground glow-primary"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All ({aiTools.length})
          </button>
          {categories.map((cat) => {
            const count = aiTools.filter((t) => t.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No tools found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default ToolsDirectory;
