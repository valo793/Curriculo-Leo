import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'DP WORLD SANTOS',
    role: 'DATA ANALYTICS ASSISTANT',
    subtitle: 'OPERATIONAL EXCELLENCE',
    period: '2025 – PRESENT',
    current: true,
    highlights: [
      'Dashboards and KPIs in Power BI (DAX)',
      'Advanced SQL queries in Databricks (Cloud)',
      'Workflow Automation and Process Mapping',
    ],
    link: "https://www.dpworld.com/pt-br/brazil",
    tech: ['POWER BI', 'SQL', 'DATABRICKS', 'AUTOMATION'],
  },
  {
    company: 'DP WORLD SANTOS',
    role: 'INTERN',
    subtitle: 'OPERATIONAL EXCELLENCE',
    period: '2025',
    current: false,
    highlights: [
      'Process mapping and optimization',
      'Technical workflow diagrams',
      'Business requirements gathering',
    ],
    link: "https://www.dpworld.com/pt-br/brazil",
    tech: ['LEAN SIX SIGMA', 'BPMN', 'EXCEL'],
  },
  {
    company: 'OLOS TECNOLOGIA',
    role: 'SOFTWARE DEVELOPER',
    subtitle: '',
    period: '2021 – 2023',
    current: false,
    highlights: [
      'Data manipulation with Python and SQL',
      'Web development with HTML/CSS',
      'Traffic analysis via Google Analytics',
    ],
    link: "https://www.olos.com.br",
    tech: ['PYTHON', 'SQL', 'HTML/CSS', 'ANALYTICS'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-background pt-24 pb-12 border-t border-border overflow-hidden">
      
      {/* Editorial Header */}
      <div className="container-wide mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              03 // LOGS
            </span>
          </div>
          <div className="col-span-1 md:col-span-10">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground leading-[0.9]">
              PROFESSIONAL_HISTORY
            </h2>
          </div>
        </div>
      </div>

      <div className="container-wide relative z-10">
        {/* Abstract Background Text */}
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none select-none overflow-hidden">
          <span className="text-[15vw] font-bold tracking-tighter leading-none">HISTORY</span>
        </div>

        <div className="border-t border-border mt-8">
          {experiences.map((exp, index) => (
            <motion.a
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`block border-b border-border py-12 group hover:bg-card/20 transition-colors ${exp.current ? 'bg-card/5' : ''}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Timeline / Metadata */}
                <div className="col-span-1 md:col-span-3 flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-foreground block rounded-none opacity-50"></span>
                    <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                      {exp.period}
                    </span>
                  </div>
                  {exp.current && (
                    <span className="font-mono text-[10px] tracking-widest text-primary uppercase ml-5 mt-2">
                      [ ACTIVE_NODE ]
                    </span>
                  )}
                </div>

                {/* Role and Company */}
                <div className="col-span-1 md:col-span-5">
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors mb-2">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 border-l border-border pl-4">
                    // {exp.company}
                    <br />
                    {exp.subtitle && `// ${exp.subtitle}`}
                  </div>
                  <ul className="space-y-2 mb-6 max-w-sm">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground font-mono">
                        <span className="text-foreground/50 opacity-50">{'>'}</span>
                        <span className="uppercase tracking-wide">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Tags */}
                <div className="col-span-1 md:col-span-4 flex flex-wrap gap-2 content-start">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 border border-border/50 text-[10px] font-mono text-muted-foreground uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
