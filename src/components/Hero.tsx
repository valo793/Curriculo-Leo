import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { BackgroundGridLines, MonolithWireframe } from './ui/SVGElements';
import { useEffect, useState } from 'react';

export function Hero() {
  const [targetExp, setTargetExp] = useState(0);

  // Motion values for the counters
  const countExp = useMotionValue(0);
  const countData = useMotionValue(0);
  const countUptime = useMotionValue(0);

  // Transform values for display
  const displayExp = useTransform(countExp, (latest) => latest.toFixed(2));
  const displayData = useTransform(countData, (latest) => Math.round(latest));
  const displayUptime = useTransform(countUptime, (latest) => Math.round(latest));

  useEffect(() => {
    // Calculando a partir do final de 2025 (ex: 1 de Dezembro de 2025)
    const startDate = new Date('2025-12-01T00:00:00').getTime();
    
    const calculateExperience = () => {
      const now = new Date().getTime();
      const diffTime = Math.max(0, now - startDate);
      const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
      return diffYears;
    };

    const target = calculateExperience();
    setTargetExp(target);

    // Animate all numbers together over 2.5 seconds
    const controls = [
      animate(countExp, target, { duration: 2.5, ease: "easeOut", delay: 0.5 }),
      animate(countData, 500, { duration: 2.5, ease: "easeOut", delay: 0.5 }),
      animate(countUptime, 100, { duration: 2.5, ease: "easeOut", delay: 0.5 })
    ];

    return () => controls.forEach(anim => anim.stop());
  }, [countExp, countData, countUptime]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 overflow-hidden bg-background">
      <BackgroundGridLines />
      <MonolithWireframe />

      {/* Main Content */}
      <div className="container-wide relative z-10 w-full flex flex-col items-start justify-end flex-grow pb-12">
        <div className="flex flex-col max-w-5xl">
          
          {/* Status Label */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-foreground"></div>
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Status_Initialized // Current State: Ready
            </span>
          </motion.div>

          {/* Huge Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-[12vw] sm:text-[8vw] md:text-[6vw] font-bold leading-[0.85] tracking-tighter uppercase text-foreground"
          >
            Data.
            <br />
            <span className="text-secondary-foreground italic pr-4">Analytics.</span>
            <br />
            Precision.
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <div className="border-l border-border pl-6 max-w-sm">
              <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase leading-relaxed">
                Transformando dados abstratos em engrenagens de decisão logística e arquitetura corporativa.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button className="btn-solid" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                Initialize_Projects
              </button>
              <button className="btn-outline" onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}>
                View_Data_Logs
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* KPI Footer Divider */}
      <div className="border-t border-border mt-auto">
        <div className="container-wide py-6 relative z-10 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col">
              <motion.span className="text-3xl font-bold font-mono">{displayExp}</motion.span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mt-1">Yrs_Experience</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-3xl font-bold font-mono">
                <motion.span>{displayData}</motion.span>
                <span className="text-xl">MB+</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mt-1">Daily_Data_Vol</span>
            </div>

            <div className="flex flex-col">
              <span className="text-3xl font-bold font-mono">
                <motion.span>{displayUptime}</motion.span>
                <span className="text-xl">%</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-muted-foreground mt-1">System_Uptime</span>
            </div>

            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 1.1 }}
               className="flex flex-col md:items-end justify-center h-full"
            >
              <span className="text-[10px] font-mono tracking-widest text-muted-foreground">SCROLL_TO_DESCEND ↓</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
