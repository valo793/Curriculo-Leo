import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary mb-4 block">// contato</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vamos <span className="gradient-text">Conectar?</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Disponível para oportunidades em Data Analytics, 
            Engenharia de Dados e Automação de Processos.
          </p>
        </div>

        {/* Terminal Contact */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="terminal-card">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 font-mono text-sm text-muted-foreground">contact.sh</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-4">
              <p>
                <span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> $EMAIL
              </p>
              <a 
                href="mailto:leonardoramosvallim@gmail.com" 
                className="block text-foreground hover:text-primary transition-colors pl-4"
              >
                leonardoramosvallim@gmail.com
              </a>
              
              <p>
                <span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> $PHONE
              </p>
              <a 
                href="https://wa.me/5513996328244" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-foreground hover:text-primary transition-colors pl-4"
              >
                (13) 99632-8244
              </a>
              
              <p>
                <span className="text-primary">$</span> <span className="text-muted-foreground">echo</span> $LOCATION
              </p>
              <p className="text-foreground pl-4">Santos, SP - Brasil</p>
              
              <p className="pt-4">
                <span className="text-primary">$</span> <span className="text-secondary">./connect.sh</span>
                <span className="text-primary animate-pulse">_</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:leonardoramosvallim@gmail.com"
            className="card-tech group text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <p className="font-mono text-xs text-muted-foreground mb-1">email</p>
            <p className="font-medium text-foreground text-sm break-all">
              leonardoramosvallim@gmail.com
            </p>
          </a>

          <a
            href="https://wa.me/5513996328244"
            target="_blank"
            rel="noopener noreferrer"
            className="card-tech group text-center"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <p className="font-mono text-xs text-muted-foreground mb-1">whatsapp</p>
            <p className="font-medium text-foreground">(13) 99632-8244</p>
          </a>

          <div className="card-tech text-center">
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-full">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <p className="font-mono text-xs text-muted-foreground mb-1">location</p>
            <p className="font-medium text-foreground">Santos, SP</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://linkedin.com/in/leonardo-vallim"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-card border border-border rounded-xl hover:border-primary hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a
            href="https://github.com/leonardo-vallim"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-card border border-border rounded-xl hover:border-primary hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:leonardoramosvallim@gmail.com"
            className="w-14 h-14 flex items-center justify-center bg-card border border-border rounded-xl hover:border-primary hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all duration-300"
            aria-label="Email"
          >
            <Send className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
