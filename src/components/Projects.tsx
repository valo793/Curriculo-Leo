import { ExternalLink, Github, Folder } from 'lucide-react';
import dashboardImg from '@/assets/project-dashboard.jpg';
import sqlImg from '@/assets/project-sql.jpg';
import automationImg from '@/assets/project-automation.jpg';
import chairImg from '@/assets/gallery-chair.jpg';

const projects = [
  {
    title: 'Dashboard de Performance',
    category: 'Power BI',
    image: dashboardImg,
    description: 'KPIs e métricas operacionais em tempo real para tomada de decisão estratégica.',
    tech: ['Power BI', 'DAX', 'SQL'],
    featured: true,
  },
  {
    title: 'Pipeline ETL',
    category: 'Data Engineering',
    image: sqlImg,
    description: 'Automação de tratamento e análise de dados em ambiente cloud.',
    tech: ['Databricks', 'SQL', 'Python'],
    featured: true,
  },
  {
    title: 'Automação de Fluxos',
    category: 'Automation',
    image: automationImg,
    description: 'Eliminação de tarefas manuais repetitivas com ganho de produtividade.',
    tech: ['Automação', 'SharePoint'],
    featured: false,
  },
  {
    title: 'Process Mapping',
    category: 'Lean Six Sigma',
    image: chairImg,
    description: 'Documentação e otimização de processos operacionais.',
    tech: ['BPMN', 'Visio', 'Lean'],
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <span className="font-mono text-sm text-primary mb-4 block">// projetos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Trabalhos <span className="gradient-text">Selecionados</span>
            </h2>
          </div>
          <p className="text-muted-foreground mt-4 md:mt-0 max-w-md">
            Projetos que demonstram minhas habilidades em dados, automação e otimização de processos.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="font-mono text-xs text-primary mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted text-xs font-mono text-muted-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project) => (
            <div
              key={project.title}
              className="card-tech group"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
