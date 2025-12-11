import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(45, 212, 191, 0.5)';
        ctx.fill();

        // Draw connections
        particles.slice(i + 1).forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.15 * (1 - dist / 150)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-0" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Terminal Header */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-full mb-8 backdrop-blur-sm animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-red-500" />
          <span className="w-2 h-2 rounded-full bg-yellow-500" />
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="font-mono text-sm text-muted-foreground ml-2">
            ~/leonardo-vallim
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up delay-100">
          <span className="text-foreground">Olá, sou </span>
          <span className="gradient-text">Leonardo Vallim</span>
        </h1>

        {/* Typing Effect */}
        <div className="font-mono text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-up delay-200">
          <span className="text-primary">const</span> role = 
          <span className="text-secondary"> "</span>
          <span className="text-foreground">Data Engineer & Analytics</span>
          <span className="text-secondary">"</span>
          <span className="text-primary animate-pulse">;</span>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up delay-300">
          {['Power BI', 'SQL', 'Python', 'Databricks', 'Automação', 'Lean Six Sigma'].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-card/50 border border-border rounded-lg font-mono text-sm text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] transition-all duration-300"
          >
            <span className="font-mono">viewProjects()</span>
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-tech"
          >
            <span className="font-mono">learnMore()</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}
