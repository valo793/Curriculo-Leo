import { Terminal, Code2 } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Terminal className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm">
              <span className="text-primary">&lt;</span>
              LVallim
              <span className="text-primary">/&gt;</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center font-mono flex items-center gap-2">
            <span>© {currentYear}</span>
            <span className="text-primary">|</span>
            <span>Built with</span>
            <Code2 className="w-4 h-4 inline" />
            <span>+ React + Tailwind</span>
          </p>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            scrollToTop()
          </button>
        </div>
      </div>
    </footer>
  );
}
