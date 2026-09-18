"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

const nodes = [
  { x: 12, y: 20 },
  { x: 28, y: 35 },
  { x: 45, y: 18 },
  { x: 62, y: 32 },
  { x: 80, y: 20 },
  { x: 18, y: 65 },
  { x: 38, y: 78 },
  { x: 55, y: 60 },
  { x: 72, y: 75 },
  { x: 88, y: 58 },
];

const connections = [
  [0, 1],
  [0, 2],
  [1, 2],
  [1, 5],
  [2, 3],
  [2, 6],
  [3, 4],
  [3, 7],
  [4, 9],
  [5, 6],
  [5, 7],
  [6, 7],
  [7, 8],
  [7, 9],
  [8, 9],
];

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  const moveX = useTransform(smoothX, [-500, 500], [-18, 18]);
  const moveY = useTransform(smoothY, [-500, 500], [-18, 18]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    mouseX.set(x);
    mouseY.set(y);
  }


    return (
      <div
        className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden"
      >
      {/* Main ambient glow */}
      <motion.div
        style={{
          x: moveX,
          y: moveY,
        }}
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.08] blur-[140px]"
      />

      {/* Secondary glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[15%] top-[25%] h-[250px] w-[250px] rounded-full bg-cyan-500/[0.08] blur-[100px]"
      />

      {/* Network */}
      <motion.svg
        style={{
          x: moveX,
          y: moveY,
        }}
        className="absolute inset-0 h-screen w-screen"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Connections */}
        {connections.map(([from, to], index) => {
          const start = nodes[from];
          const end = nodes[to];

          return (
            <motion.line
              key={`${from}-${to}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="currentColor"
              strokeWidth="0.08"
              className="text-blue-400"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.05, 0.25, 0.05],
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.g
            key={index}
            animate={{
              y: [0, -1.5, 0, 1.5, 0],
            }}
            transition={{
              duration: 4 + index * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Outer glow */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="1.2"
              className="fill-blue-500"
              animate={{
                opacity: [0.08, 0.25, 0.08],
                r: [1.2, 1.8, 1.2],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.15,
              }}
            />

            {/* Core */}
            <circle
              cx={node.x}
              cy={node.y}
              r="0.35"
              className="fill-blue-400"
            />
          </motion.g>
        ))}
      </motion.svg>

      {/* Floating data particles */}
      {[...Array(18)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-1 w-1 rounded-full bg-blue-400"
          style={{
            left: `${(index * 17) % 100}%`,
            top: `${(index * 31) % 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0, 0.5, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + (index % 4),
            repeat: Infinity,
            delay: index * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Fade overlay so text stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black/30_70%,black/80_100%)]" />
    </div>
  );
}