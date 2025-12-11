import { Calendar, Building2, ArrowRight } from 'lucide-react';

const experiences = [
  {
    company: 'DP World Santos',
    role: 'Assistente Administrativo',
    subtitle: 'Data Analytics & Excelência Operacional',
    period: '2025 – Atual',
    current: true,
    highlights: [
      'Dashboards e KPIs em Power BI com modelagem DAX',
      'Consultas SQL avançadas no Databricks (cloud)',
      'Automações de fluxos',
      'Mapeamento e documentação de processos',
    ],
    tech: ['Power BI', 'SQL', 'Databricks', 'Automações'],
  },
  {
    company: 'DP World Santos',
    role: 'Estagiário',
    subtitle: 'Excelência Operacional',
    period: '2025',
    current: false,
    highlights: [
      'Mapeamento e otimização de processos',
      'Elaboração de fluxos e diagramas técnicos',
      'Levantamento de requisitos de negócio',
    ],
    tech: ['Lean Six Sigma', 'BPMN', 'Excel'],
  },
  {
    company: 'Olos Tecnologia',
    role: 'Software Developer',
    subtitle: '',
    period: '2021 – 2023',
    current: false,
    highlights: [
      'Manipulação de dados com Python e SQL',
      'Desenvolvimento web com HTML/CSS',
      'Análises de tráfego via Google Analytics',
    ],
    tech: ['Python', 'SQL', 'HTML/CSS', 'Google Analytics'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-4 block">// experiência</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Jornada <span className="gradient-text">Profissional</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className={`relative mb-12 last:mb-0 pl-12 md:pl-0 ${
                index % 2 === 0 ? 'md:pr-[52%]' : 'md:pl-[52%]'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 left-0 md:left-1/2 w-8 h-8 rounded-full border-2 flex items-center justify-center md:-translate-x-1/2 ${
                  exp.current 
                    ? 'bg-primary border-primary shadow-[0_0_20px_rgba(45,212,191,0.5)]' 
                    : 'bg-card border-border'
                }`}
              >
                {exp.current ? (
                  <span className="w-2 h-2 bg-primary-foreground rounded-full" />
                ) : (
                  <span className="w-2 h-2 bg-muted-foreground rounded-full" />
                )}
              </div>

              {/* Content Card */}
              <div className={`card-tech ${exp.current ? 'border-primary/30' : ''}`}>
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-primary" />
                    <h3 className="font-semibold text-foreground">{exp.company}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono">{exp.period}</span>
                  </div>
                </div>

                {/* Role */}
                <p className="text-primary font-medium mb-1">{exp.role}</p>
                {exp.subtitle && (
                  <p className="text-sm text-muted-foreground mb-4">{exp.subtitle}</p>
                )}

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs font-mono text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
