export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          
          {/* Logo / Signature */}
          <div className="flex flex-col items-center md:items-start text-foreground font-mono">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-lg font-bold tracking-tighter"
            >
              <span className="bg-foreground text-background px-2 py-1 mr-2">LV</span>
              ENGINEER_OS
            </a>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-2 block">
              SYSTEM ONLINE // LOCALHOST
            </span>
          </div>

          {/* Copyright */}
          <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest text-center md:text-right">
            <p>BUILD_VERSION: {currentYear}.1.0</p>
            <p className="mt-1">© ALL_RIGHTS_RESERVED // LEONARDO_VALLIM</p>
          </div>

          {/* Scroller */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors font-mono text-xs uppercase"
          >
            TOP
          </button>
          
        </div>
      </div>
    </footer>
  );
}
