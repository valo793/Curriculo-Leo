import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 500);
    const t2 = setTimeout(() => setStep(2), 1500);
    const t3 = setTimeout(() => setStep(3), 2200);
    const t4 = setTimeout(() => onComplete(), 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-md p-8 flex flex-col font-mono text-sm tracking-widest text-muted-foreground uppercase">
        <div className="mb-4">
          <span className="text-primary mr-2">_</span>
          SYSTEM.BOOTSTRAP
        </div>
        
        <div className="h-4">
          {step >= 0 && <span className="text-foreground">INITIALIZING KERNEL... OK</span>}
        </div>
        <div className="h-4 mt-2">
          {step >= 1 && <span className="text-yellow-500">AUTHENTICATING USER_PROTOCOL...</span>}
        </div>
        <div className="h-4 mt-2">
          {step >= 2 && <span className="text-green-500 animate-pulse">ACCESS GRANTED.</span>}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[1px] bg-border mt-8 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-foreground"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>

        <div className="mt-4 text-[10px] text-right">
          {step >= 3 ? "LOADING_UI_ASSETS" : "WAIT..."}
        </div>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div 
          className="min-h-screen bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
};

export default Index;
