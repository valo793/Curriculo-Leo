import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'rate-limited'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check custom rate limit in localStorage (10 mins)
    const LAST_SENT_KEY = 'lv_portfolio_last_email_sent';
    const lastSentStr = localStorage.getItem(LAST_SENT_KEY);
    if (lastSentStr) {
      const lastSentTime = parseInt(lastSentStr, 10);
      const tenMinutesInMs = 10 * 60 * 1000;
      if (Date.now() - lastSentTime < tenMinutesInMs) {
        setStatus('rate-limited');
        setTimeout(() => setStatus('idle'), 5000);
        return;
      }
    }

    setStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms configuration via Environment Variables (.env)
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey || accessKey === 'your_access_key_here') {
      console.error("Missing valid VITE_WEB3FORMS_ACCESS_KEY in .env");
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    // Convert FormData to plain object for JSON submission
    const object = Object.fromEntries(formData.entries());
    object.access_key = accessKey;
    object.subject = "Novo contato recebido do Portfólio (ENGINEER_OS)";
    object.from_name = formData.get("name")?.toString() || "Portfólio Visitor";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(object)
      });

      const data = await response.json();

      if (response.status === 200 && data.success) {
        setStatus('success');
        localStorage.setItem(LAST_SENT_KEY, Date.now().toString());
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Web3Forms error response:", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
       console.error("Fetch error:", error);
       setStatus('error');
       setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative bg-background pt-24 pb-24 border-t border-border overflow-hidden">
      
      {/* Editorial Header */}
      <div className="container-wide mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              05 // ENDPOINT
            </span>
          </div>
          <div className="col-span-1 md:col-span-10 flex border-b border-border pb-8">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground leading-[0.9]">
              INITIALIZE_CONTACT
            </h2>
          </div>
        </div>
      </div>

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-sm text-foreground uppercase tracking-wide leading-relaxed max-w-sm mb-12">
                Available for opportunities in Data Analytics, Data Engineering, and Process Automation. Ready to integrate into high-performance architectures.
              </p>
              
              <div className="flex flex-col gap-8">
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-2">EMAIL_ADDRESS</span>
                  <a href="mailto:leonardoramosvallim@gmail.com" className="font-mono text-lg text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-1">
                    LEONARDORAMOSVALLIM@GMAIL.COM
                  </a>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-2">COMM_LINK</span>
                  <a href="https://wa.me/5513996328244" target="_blank" rel="noopener noreferrer" className="font-mono text-lg text-foreground hover:text-primary transition-colors hover:underline underline-offset-4 decoration-1">
                    WA DECRYPT (+55 13 99632-8244)
                  </a>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase block mb-2">PHYSICAL_LOCATION</span>
                  <span className="font-mono text-lg text-foreground">
                    SANTOS, SP - BRAZIL
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex gap-4">
              <a
                href="https://linkedin.com/in/leonardo-vallim"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-border bg-card/10 hover:bg-foreground hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/valo793"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center border border-border bg-card/10 hover:bg-foreground hover:text-background transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:leonardoramosvallim@gmail.com"
                className="w-12 h-12 flex items-center justify-center border border-border bg-card/10 hover:bg-foreground hover:text-background transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Minimal Form Side */}
          <div className="border border-border p-8 md:p-12 relative overflow-hidden bg-card/5">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-muted-foreground bg-border pointer-events-none">
              INPUT_STREAM
            </div>
            
            <form className="mt-8 flex flex-col gap-8 relative z-10" onSubmit={handleSubmit}>
              <div className="relative group">
                <input 
                   name="name"
                   type="text" 
                   id="name" 
                   required
                   className="w-full bg-transparent border-b border-border py-4 font-mono text-sm text-foreground focus:outline-none focus:border-foreground transition-colors peer"
                   placeholder=" "
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-4 font-mono text-sm uppercase tracking-widest text-muted-foreground pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-foreground peer-valid:-top-4 peer-valid:text-[10px]"
                >
                  USER_IDENTITY
                </label>
              </div>

              <div className="relative group">
                <input 
                   name="email"
                   type="email" 
                   id="email" 
                   required
                   className="w-full bg-transparent border-b border-border py-4 font-mono text-sm text-foreground focus:outline-none focus:border-foreground transition-colors peer"
                   placeholder=" "
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-4 font-mono text-sm uppercase tracking-widest text-muted-foreground pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-foreground peer-valid:-top-4 peer-valid:text-[10px]"
                >
                  RETURN_ADDRESS
                </label>
              </div>

              <div className="relative group mt-4">
                <textarea 
                   name="message"
                   id="message" 
                   required
                   rows={4}
                   className="w-full bg-transparent border-b border-border py-4 font-mono text-sm text-foreground focus:outline-none focus:border-foreground transition-colors peer resize-none"
                   placeholder=" "
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-4 font-mono text-sm uppercase tracking-widest text-muted-foreground pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-foreground peer-valid:-top-4 peer-valid:text-[10px]"
                >
                  TRANSMIT_DATA
                </label>
              </div>

              <motion.button
                whileHover={status === 'loading' ? {} : { scale: 0.98 }}
                whileTap={status === 'loading' ? {} : { scale: 0.95 }}
                className={`mt-8 py-4 font-mono text-sm tracking-widest uppercase transition-colors flex items-center justify-center gap-2
                  ${status === 'idle' ? 'bg-foreground text-background hover:bg-muted-foreground' : ''}
                  ${status === 'loading' ? 'bg-border text-muted-foreground cursor-not-allowed' : ''}
                  ${status === 'success' ? 'bg-green-500/20 text-green-500 border border-green-500/50' : ''}
                  ${status === 'error' ? 'bg-red-500/20 text-red-500 border border-red-500/50' : ''}
                  ${status === 'rate-limited' ? 'bg-yellow-500/20 text-yellow-500 border border-yellow-500/50' : ''}
                `}
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'idle' && 'EXECUTE // SEND'}
                {status === 'loading' && 'TRANSMITTING...'}
                {status === 'success' && 'PACKET_DELIVERED'}
                {status === 'error' && 'TRANSMISSION_FAILED'}
                {status === 'rate-limited' && 'DELAY_ENFORCED (10m)'}
              </motion.button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
