import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Hero abstract wireframe
export const MonolithWireframe = () => {
  const { scrollY } = useScroll(); // Usa o scroll global da página em pixels

  // Transforma o scrollY (pixels) para os efeitos desejados
  // Conforme o usuário desce 500px, a forma desce 250px (parallax) e gira
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const rotate = useTransform(scrollY, [0, 500], [0, 90]);

  return (
    <motion.div 
      style={{ y, opacity }}
      className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[20rem] md:max-w-lg aspect-square flex items-center justify-center pointer-events-none"
    >
      <motion.svg 
        viewBox="0 0 100 100" 
        className="w-full h-full text-foreground/10" 
        style={{ rotate }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M50 5 L50 95" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M5 25 L95 75" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <path d="M95 25 L5 75" fill="none" stroke="currentColor" strokeWidth="0.5" />
        
        {/* Inner hexagon */}
        <motion.path 
          d="M50 25 L75 35 L75 65 L50 75 L25 65 L25 35 Z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        
        {/* Abstract core shape */}
        <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </motion.svg>
    </motion.div>
  );
};

// Subtle background grid lines
export const BackgroundGridLines = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex justify-center">
      <div className="w-[1px] h-full bg-border/50 absolute left-4 md:left-12 lg:left-20" />
      <div className="w-[1px] h-full bg-border/50 absolute right-4 md:right-12 lg:right-20" />
      <div className="w-[1px] h-full bg-border/30 absolute left-1/4" />
      <div className="w-[1px] h-full bg-border/30 absolute left-1/2" />
      <div className="w-[1px] h-full bg-border/30 absolute right-1/4" />
    </div>
  );
};

// Mouse follower for subtle interactive feel on cards
export const HoverCursorInteraction = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative group overflow-hidden layout-border hover:bg-card/80 transition-colors duration-500">
      {children}
    </div>
  );
};

// Minimalist Ticker Line
export const TickerLine = ({ text }: { text: string }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-border py-2 my-12 bg-card/20 mix-blend-difference">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="inline-block"
      >
        <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase mr-8">
          {Array(20).fill(text).join(" • ")}
        </span>
      </motion.div>
    </div>
  );
};
