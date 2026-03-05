import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const nodes = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
}));

const connections = nodes.slice(0, 12).map((node, i) => ({
  from: node,
  to: nodes[(i + 3) % nodes.length],
}));

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return p + 2;
      });
    }, 90);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {connections.map((conn, i) => (
          <motion.line
            key={i}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="hsl(42 92% 56%)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 0.5, 0.2] }}
            transition={{ duration: 2, delay: conn.from.delay, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="3"
            fill="hsl(42 92% 56%)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0.3], scale: [0, 1.2, 0.8] }}
            transition={{ duration: 2, delay: node.delay, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </svg>

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Xplorevo Tech Network
        </motion.h1>
        <motion.p
          className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          AI Buddies
        </motion.p>
        <motion.p
          className="text-muted-foreground text-sm md:text-base mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Connecting You With The Future of AI Tools
        </motion.p>

        <div className="w-64 md:w-80 mx-auto h-1.5 rounded-full bg-muted overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: "linear-gradient(90deg, hsl(42 92% 56%), hsl(30 80% 55%))",
              width: `${progress}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>
        <p className="text-muted-foreground text-xs mt-3">{progress}%</p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
