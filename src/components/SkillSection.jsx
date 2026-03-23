import { Code2, Cpu, Database, Layout, Sparkles, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "PROGRAMMING LANGUAGES",
    icon: <Terminal size={18} />,
    skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML5", "CSS3", "PHP"],
    accent: "bg-editorial-red text-white",
  },
  {
    title: "WEB FRAMEWORKS & LIBS",
    icon: <Layout size={18} />,
    skills: ["React.js", "Node.js", "Express.js", "Flask", "Django", "Angular", "Tailwind CSS"],
    accent: "bg-ink-black text-white",
  },
  {
    title: "DATA & DATABASES",
    icon: <Database size={18} />,
    skills: ["MySQL", "Oracle", "MongoDB", "MS SQL", "JDBC", "Data Analytics"],
    accent: "bg-neutral-200 text-ink-black",
  },
  {
    title: "AI & MACHINE LEARNING",
    icon: <Cpu size={18} />,
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "NumPy", "Deep Learning"],
    accent: "bg-editorial-red text-white",
  },
  {
    title: "TOOLS & ENVIRONMENT",
    icon: <Code2 size={18} />,
    skills: ["Git/GitHub", "VS Code", "Vite", "ESLint", "Postman", "Linux"],
    accent: "bg-ink-black text-white",
  },
  {
    title: "SOFT SKILLS",
    icon: <Sparkles size={18} />,
    skills: ["Problem Solving", "Collaboration", "Debugging", "Adaptability"],
    accent: "border-1 border-ink-black",
  },
];

export const SkillSection = () => {
  return (
    <section id="skills" className="newsprint-section border-x-1 lg:border-x-0 bg-newsprint-bg newsprint-texture">
      {/* Section Headline */}
      <div className="flex flex-col md:flex-row justify-between items-center border-y-4 border-ink-black py-8 mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-center">TECHNICAL INDEX.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-1 border-t-1 border-ink-black">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-8 border-r-1 border-b-1 border-ink-black hover:bg-neutral-100 transition-colors group">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="p-2 border-1 border-ink-black bg-white group-hover:bg-editorial-red group-hover:text-white transition-all">
                  {category.icon}
                </span>
                <h3 className="newsprint-label text-[10px]">{category.title}</h3>
              </div>
              <span className="newsprint-mono text-[10px] opacity-30">#0{idx + 1}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-1 border-1 border-ink-black newsprint-mono text-[10px] hover:bg-ink-black hover:text-white transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t-1 border-divider-grey border-dashed flex justify-between items-center opacity-40 group-hover:opacity-100 transition-all">
               <span className="newsprint-mono text-[9px] uppercase">Documentation Available</span>
               <div className="w-2 h-2 rounded-full bg-editorial-red animate-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Editorial Quote Footer */}
      <div className="mt-16 text-center py-8 border-t-1 border-ink-black border-dashed">
         <p className="font-serif-body italic text-neutral-400">
           "The speed at which information is processed determines the relevance of the publication."
         </p>
         <div className="py-4 text-neutral-300 font-serif text-2xl tracking-[1em]">
           &#x2727; &#x2727; &#x2727;
         </div>
      </div>
    </section>
  );
};