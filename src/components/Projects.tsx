import { motion } from 'framer-motion';
import dashboardImg from '@/assets/project-dashboard.jpg';
import sqlImg from '@/assets/project-sql.jpg';
import automationImg from '@/assets/project-automation.jpg';
import chairImg from '@/assets/gallery-chair.jpg';

const projects = [
  {
    title: 'PERFORMANCE DASHBOARD',
    category: 'POWER BI',
    image: dashboardImg,
    description: 'KPIs AND METRICS IN REAL-TIME FOR STRATEGIC DECISIONS.',
    tech: ['POWER BI', 'DAX', 'SQL'],
    featured: true,
  },
  {
    title: 'ETL PIPELINE',
    category: 'DATA ENG',
    image: sqlImg,
    description: 'AUTOMATED DATA PROCESSING IN CLOUD ENVIRONMENTS.',
    tech: ['DATABRICKS', 'SQL', 'PYTHON'],
    featured: true,
  },
  {
    title: 'FLOW AUTOMATION',
    category: 'AUTOMATION',
    image: automationImg,
    description: 'BOTTLE-NECK REDUCTION THROUGH REPETITIVE TASK AUTOMATION.',
    tech: ['AUTOMATION', 'SHAREPOINT'],
    featured: true,
  },
  {
    title: 'PROCESS MAPPING',
    category: 'LEAN SIX SIGMA',
    image: chairImg,
    description: 'DOCUMENTATION AND OPTIMIZATION OF OPERATIONAL FLOWS.',
    tech: ['BPMN', 'VISIO', 'LEAN'],
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-background pt-24 pb-24 border-t border-border overflow-hidden">
      
      {/* Editorial Header */}
      <div className="container-wide mb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-1 md:col-span-2">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
              04 // CORE
            </span>
          </div>
          <div className="col-span-1 md:col-span-10 flex border-b border-border pb-8">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-foreground leading-[0.9]">
              SELECTED_WORKS
            </h2>
          </div>
        </div>
      </div>

      <div className="container-wide relative z-10">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {projects.map((project, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: idx * 0.1 }}
               className="bg-background group relative flex flex-col md:flex-row h-full min-h-[300px]"
             >
               {/* Grayscale Architectural Image */}
               <div className="w-full md:w-1/2 relative overflow-hidden bg-card/50 aspect-square md:aspect-auto">
                 <div className="absolute inset-0 bg-background/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                 <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute top-4 left-4 z-20">
                   <span className="bg-background text-foreground font-mono text-[10px] tracking-widest uppercase px-2 py-1">
                     {project.category}
                   </span>
                 </div>
               </div>
               
               {/* Project Metadata */}
               <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                 <h3 className="text-xl font-bold uppercase tracking-tighter text-foreground mb-4">
                   {project.title}
                 </h3>
                 <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide leading-relaxed mb-8">
                   {project.description}
                 </p>
                 
                 <div className="flex flex-wrap gap-2 mt-auto">
                   {project.tech.map((t) => (
                     <span key={t} className="border border-border text-[9px] font-mono uppercase tracking-widest px-2 py-1 text-muted-foreground">
                       {t}
                     </span>
                   ))}
                 </div>
               </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
