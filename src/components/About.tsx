import { Code2, User, MapPin, Mail, Briefcase } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Code Block / Terminal */}
          <div className="relative">
            <div className="terminal-card p-0 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 font-mono text-sm text-muted-foreground">about.ts</span>
              </div>
              
              {/* Code Content */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-secondary">interface</span> <span className="text-primary">Developer</span> {'{'}
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">name:</span> <span className="text-green-400">"Leonardo Vallim"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">role:</span> <span className="text-green-400">"Computer Engineer"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">focus:</span> <span className="text-green-400">"Data Analytics"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">location:</span> <span className="text-green-400">"Santos, SP"</span>;
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">skills:</span> [
                </p>
                <p className="pl-8 text-green-400">"Power BI", "SQL", "Python",</p>
                <p className="pl-8 text-green-400">"Databricks", "Automação"</p>
                <p className="pl-4">];
                </p>
                <p className="pl-4">
                  <span className="text-muted-foreground">available:</span> <span className="text-primary">true</span>;
                </p>
                <p className="text-muted-foreground">{'}'}</p>
              </div>
            </div>
            
            {/* Floating decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-primary" />
              <span className="font-mono text-sm text-primary">// sobre mim</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Engenheiro com paixão por{' '}
              <span className="gradient-text">dados e automação</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Sou Engenheiro da Computação com foco em <span className="text-primary">Data Analytics</span> e 
                <span className="text-primary"> Melhoria Contínua</span>. Transformo dados complexos em 
                insights acionáveis e processos manuais em fluxos automatizados.
              </p>
              
              <p>
                Na DP World Santos, desenvolvo soluções de BI que impactam decisões estratégicas, 
                utilizando Power BI, SQL (Databricks) e metodologias Lean Six Sigma.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: User, label: 'Nome', value: 'Leonardo Vallim' },
                { icon: MapPin, label: 'Local', value: 'Santos, SP' },
                { icon: Mail, label: 'Email', value: 'leonardoramosvallim@gmail.com', small: true },
                { icon: Briefcase, label: 'Status', value: 'Disponível', highlight: true },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 bg-card/50 rounded-lg border border-border">
                  <item.icon className="w-4 h-4 text-primary mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className={`font-medium ${item.small ? 'text-xs' : 'text-sm'} ${item.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://linkedin.com/in/leonardo-vallim"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] transition-all duration-300"
            >
              <span className="font-mono">connect()</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
