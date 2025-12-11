import { BarChart3, Cog, Zap, Database, GitBranch, LineChart } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Data Analytics & BI',
    code: 'buildDashboard()',
    description:
      'Dashboards estratégicos em Power BI, modelagem DAX e visualizações que transformam números em narrativas claras.',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    code: 'processData()',
    description:
      'Consultas SQL avançadas, pipelines ETL no Databricks e garantia de qualidade dos dados em escala.',
  },
  {
    icon: Cog,
    title: 'Process Excellence',
    code: 'optimizeFlow()',
    description:
      'Mapeamento e otimização de processos com Lean Six Sigma. Identificação de gargalos e melhorias mensuráveis.',
  },
  {
    icon: Zap,
    title: 'Automation',
    code: 'automate()',
    description:
      'Fluxos automatizados e scripts Python/SQL para eliminar tarefas repetitivas.',
  },
  {
    icon: LineChart,
    title: 'KPI Monitoring',
    code: 'trackMetrics()',
    description:
      'Definição e monitoramento de KPIs operacionais em tempo real para tomada de decisão baseada em dados.',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    code: 'commitChanges()',
    description:
      'Gestão de código e documentação técnica com Git, garantindo rastreabilidade e colaboração.',
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-sm text-primary mb-4 block">// serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que eu <span className="gradient-text">faço</span>
          </h2>
          <p className="text-muted-foreground">
            Transformando dados em valor e processos em eficiência
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-tech group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              {/* Code Tag */}
              <span className="font-mono text-xs text-secondary mb-3 block">
                {service.code}
              </span>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
