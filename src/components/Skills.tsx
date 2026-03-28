import { HoverCursorInteraction } from './ui/SVGElements';
import { motion } from 'framer-motion';

const techStack = [
  { group: 'ANALYTICS & BI', skills: [
    { name: 'POWER BI', desc: 'DAX / MODELING' },
    { name: 'TABLEAU', desc: 'DATA VISUALIZATION' },
    { name: 'DATABRICKS', desc: 'LAKEHOUSE ARCHITECTURE' },
    { name: 'SQL', desc: 'QUERY OPTIMIZATION' },
  ]},
  { group: 'ENGINEERING & DEVOPS', skills: [
    { name: 'PYTHON', desc: 'DATA PIPELINES / AUTOMATION' },
    { name: 'DOCKER', desc: 'CONTAINERIZATION' },
    { name: 'JAVA SE 7', desc: 'CORE LOGIC' },
    { name: 'GIT', desc: 'VERSION CONTROL' },
  ]},
];

const certifications = [
  { title: 'LEAN SIX SIGMA', subtitle: 'GREEN BELT - FM2S/DP WORLD' },
  { title: 'JAVA SE 7', subtitle: 'PROGRAMMER I' },
  { title: 'DOCKER', subtitle: 'CONTAINERS & DEPLOY' },
  { title: 'ADVANCED ENGLISH', subtitle: 'CNA' },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-background pt-24 pb-12 overflow-hidden border-t border-border">
      
      {/* Editorial Header */}
      <div className="container-wide mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              02 // STACK
            </span>
          </div>
          <div className="col-span-1 md:col-span-10">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground leading-[0.9]">
              TECH_STACK
            </h2>
          </div>
        </div>
      </div>

      <div className="container-wide relative z-10">
        
        {/* Tech Stack Grid Area */}
        <div className="border border-border p-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border">
            {techStack.flatMap(group => 
              group.skills.map((skill, idx) => (
                <HoverCursorInteraction key={`${group.group}-${idx}`}>
                  <div className="bg-background h-full p-6 flex flex-col justify-between min-h-[160px]">
                    <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-8">
                      {group.group}
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground font-mono text-lg uppercase tracking-tight">{skill.name}</h3>
                      <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mt-2">{skill.desc}</p>
                    </div>
                  </div>
                </HoverCursorInteraction>
              ))
            )}
          </div>
        </div>

        {/* Certifications & Education Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                02.1 // CERTS
              </span>
            </div>
            <div className="col-span-1 md:col-span-10">
              <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground">
                CERTIFICATIONS & ACADEMICS
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-border pt-8">
            
            {/* Certs List */}
            <div className="flex flex-col gap-4">
              {certifications.map((cert, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between border-b border-border/50 pb-4 group"
                >
                  <span className="font-bold font-mono text-sm tracking-widest uppercase text-foreground group-hover:text-primary transition-colors">{cert.title}</span>
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider text-right">{cert.subtitle}</span>
                </motion.div>
              ))}
            </div>

            {/* Degree Card */}
            <div className="border border-border p-8 flex flex-col justify-center relative overflow-hidden bg-card/10 mix-blend-difference">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-muted-foreground">STATUS: COMPLETED</div>
              <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-4">DEGREE_GRANT</span>
              <h4 className="text-2xl font-bold uppercase tracking-tighter text-foreground mb-2">COMPUTER ENGINEERING</h4>
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">UNIVERSIDADE SANTA CECÍLIA // 2021-2025</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
