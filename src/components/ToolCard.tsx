import { motion } from "framer-motion";
import { ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import type { AITool } from "@/data/aiTools";

const tagColors: Record<string, string> = {
  "Free Plan": "bg-secondary/15 text-secondary border-secondary/30",
  "Paid": "bg-accent/15 text-accent border-accent/30",
  "API Available": "bg-primary/15 text-primary border-primary/30",
};

const ToolCard = ({ tool }: { tool: AITool }) => {
  return (
    <motion.div
      className="group bg-card border border-border rounded-xl p-5 transition-all duration-300 card-glow flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-lg font-heading font-bold text-primary">
          {tool.name.charAt(0)}
        </div>
        <Badge variant="outline" className="text-[10px] border-border text-muted-foreground">
          {tool.category}
        </Badge>
      </div>

      <h3 className="font-heading font-semibold text-foreground mb-1.5">{tool.name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{tool.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {tool.tags.map((tag) => (
          <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full border ${tagColors[tag]}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <a
          href={tool.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 text-xs bg-muted hover:bg-border text-foreground rounded-lg py-2 transition-colors"
        >
          <ExternalLink className="w-3 h-3" /> Visit
        </a>
        <Link
          to={`/tool/${tool.id}`}
          className="flex-1 flex items-center justify-center gap-1.5 text-xs bg-primary/10 hover:bg-primary/20 text-primary rounded-lg py-2 transition-colors"
        >
          Details <ChevronRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ToolCard;
