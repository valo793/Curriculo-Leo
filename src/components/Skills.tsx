import { Award, GraduationCap } from 'lucide-react';

const skillsData = {
  analytics: [
    { name: 'Power BI (DAX, Modelagem)', level: 95 },
    { name: 'SQL (Databricks, Consultas)', level: 90 },
    { name: 'Automação', level: 80 },
    { name: 'Lean Six Sigma (Green Belt)', level: 75 },
  ],
  development: [
    { name: 'Python (Data)', level: 70 },
    { name: 'HTML & CSS', level: 60 },
    { name: 'Docker', level: 50 },
    { name: 'Java SE 7', level: 45 },
  ],
};

const certifications = [
  { title: 'Lean Six Sigma', subtitle: 'Green Belt - FM2S/DP World', icon: Award },
  { title: 'Java SE 7', subtitle: 'Programmer I', icon: Award },
  { title: 'Docker', subtitle: 'Containers & Deploy', icon: Award },
  { title: 'Inglês Avançado', subtitle: 'CNA', icon: Award },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground text-sm">{name}</span>
        <span className="font-mono text-xs text-primary">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-4 block">// habilidades</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stack <span className="gradient-text">Técnica</span>
          </h2>
          <p className="text-muted-foreground">
            Tecnologias e ferramentas que uso no dia a dia
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Analytics Column */}
          <div className="card-tech">
            <h3 className="font-mono text-sm text-primary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Data Analytics & Automação
            </h3>
            {skillsData.analytics.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          {/* Development Column */}
          <div className="card-tech">
            <h3 className="font-mono text-sm text-secondary mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Programação & Infra
            </h3>
            {skillsData.development.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-center font-mono text-sm text-primary mb-8">// certificações</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="card-tech text-center py-6"
              >
                <cert.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="font-medium text-foreground text-sm mb-1">{cert.title}</p>
                <p className="text-xs text-muted-foreground">{cert.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <a
            href="https://unisanta.br/#!"
            target="_blank"
            rel="noopener noreferrer"
            className="card-tech text-center py-8 block hover:border-primary/50 transition-colors"
          >
            <GraduationCap className="w-10 h-10 text-primary mx-auto mb-4" />
            <span className="font-mono text-xs text-primary block mb-2">formação acadêmica</span>
            <h4 className="text-xl font-semibold text-foreground mb-1">
              Engenharia da Computação
            </h4>
            <p className="text-muted-foreground">
              Universidade Santa Cecília • 2021-2025
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
