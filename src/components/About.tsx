import { motion } from 'framer-motion';
import { TickerLine } from './ui/SVGElements';

export function About() {
  return (
    <section id="about" className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border">
      
      {/* Editorial Header */}
      <div className="container-wide mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              01 // LOG
            </span>
          </div>
          <div className="col-span-1 md:col-span-10">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground leading-[0.9]">
              SYSTEM.ARCHITECT &
              <br /> 
              <span className="text-secondary">DATA.ANALYST</span>
            </h2>
          </div>
        </div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-y border-border flex-col-reverse lg:flex-row">
          
          {/* Photo Box */}
          <div className="col-span-1 lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border p-6 md:p-8 relative flex flex-col items-center justify-center bg-card/5">
            <div className="w-full aspect-[3/4] bg-muted/20 border border-border flex items-center justify-center relative overflow-hidden group">
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                [ INSERT_PORTRAIT_HERE ]
              </span>
              {/* Para adicionar sua foto, coloque a tag <img src="sua-foto.jpg" /> aqui, cobrindo o width/height full */}
              
              <div className="absolute inset-0 border border-foreground/0 group-hover:border-foreground/20 transition-colors duration-500 m-4"></div>
            </div>
            
            <div className="mt-6 w-full flex justify-between items-center">
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                SYS_ID: 0x9F4A
              </span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                VERIFIED_OP
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="col-span-1 lg:col-span-8 flex flex-col">
            <div className="flex-grow p-8 md:p-16 flex flex-col justify-center">
              <div className="space-y-6 text-foreground font-mono text-sm leading-relaxed max-w-3xl">
                <p>
                  Sou Engenheiro da Computação com foco em <span className="text-primary font-bold">Data Analytics</span> e 
                  <span className="text-primary font-bold"> Melhoria Contínua</span>. Transformo dados complexos em 
                  insights acionáveis e processos manuais em fluxos automatizados robustos.
                </p>
                
                <p className="text-muted-foreground">
                  Na DP World Santos, desenvolvo soluções de BI que impactam decisões estratégicas, 
                  utilizando Power BI, SQL (Databricks) e metodologias Lean Six Sigma. Projetando sistemas que não apenas
                  processam dados, mas otimizam a arquitetura de negócios inteiros.
                </p>
              </div>
            </div>

            {/* Info Metrics Table */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-border mt-auto">
              {[
                { label: 'NAME', value: 'LEONARDO VALLIM' },
                { label: 'LOCATION', value: 'SANTOS, SP' },
                { label: 'ROLE', value: 'DATA ENGINEER' },
                { label: 'STATUS', value: 'OPERATIONAL', highlight: true },
              ].map((item, i) => (
                <div key={item.label} className={`p-4 md:p-6 flex flex-col gap-2 ${i !== 3 ? 'border-r border-border' : ''}`}>
                  <span className="text-[10px] font-mono tracking-widest text-muted-foreground">{item.label}</span>
                  <span className={`font-mono text-xs md:text-sm uppercase tracking-wider ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <TickerLine text="ENGINEERING CONTINUOUS IMPROVEMENT THROUGH DATA ARCHITECTURE" />
      
    </section>
  );
}
