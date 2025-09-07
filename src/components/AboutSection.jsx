import { Briefcase, Code, User, Rocket, Star, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export const AboutSection = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate floating particles
    const particleArray = [];
    for (let i = 0; i < 20; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Cosmic Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
        
        {/* Orbital Rings */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-purple-500/20 rounded-full animate-spin opacity-30" style={{animationDuration: '20s'}} />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 border border-blue-500/20 rounded-full animate-spin opacity-20" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Enhanced Header with Cosmic Animation */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
           <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center cosmic-text" style={{lineHeight: '1.2', paddingBottom: '0.25em', fontFamily: 'Segoe UI, sans-serif'}}>
          About <span className="cosmic-text whitespace-nowrap">Me</span>
        </h2>
        </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-pink-600/10 rounded-xl blur-xl" />
              <div className="relative bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Rocket className="w-8 h-8 text-purple-400" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Passionate Software Developer & Full Stack Developer
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-foreground/80 leading-relaxed">
                    I have a strong passion for software development, full-stack applications, 
                    database management, and web technologies. With hands-on experience in building, 
                    debugging, and shipping projects, I enjoy turning ideas into real-world solutions 
                    that are both functional and impactful.
                  </p>

                  <p className="text-foreground/80 leading-relaxed">
                    My skills include Python, Java, C/C++, HTML, CSS, JavaScript, and frameworks 
                    like React, Angular, Node.js, Flask, Django, and Tailwind CSS. I also work with MySQL, 
                    Oracle, MongoDB and MS SQL, and use tools like VSCode, Power BI, and Excel.
                  </p>

                  <p className="text-foreground/80 leading-relaxed">
                    Beyond coding, I value problem-solving, collaboration, and leadership, with a 
                    drive to learn and create scalable, impactful solutions.
                  </p>
                </div>

                <div className="flex justify-center pt-8">
                  <a href="#contact" className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <button className="relative px-8 py-4 bg-black rounded-full text-white font-medium flex items-center gap-3 hover:scale-105 transition-transform">
                      <Zap className="w-5 h-5" />
                      Get In Touch
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Cards */}
          <div className="space-y-6">
            {[
              {
                icon: Code,
                title: "Software Development",
                description: "Building efficient and scalable software solutions tailored to solve real-world problems.",
                color: "from-purple-500 to-purple-700"
              },
              {
                icon: User,
                title: "Full Stack Development", 
                description: "Creating responsive and dynamic web applications using modern frameworks and tools.",
                color: "from-blue-500 to-blue-700"
              },
              {
                icon: Briefcase,
                title: "Database Management",
                description: "Designing, managing, and analyzing databases to ensure data integrity and extract insights.",
                color: "from-pink-500 to-pink-700"
              }
            ].map((skill, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-75 rounded-xl transition-opacity blur" style={{background: `linear-gradient(135deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})`}} />
                <div className="relative bg-card/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${skill.color} shadow-lg`}>
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-xl text-foreground mb-3">{skill.title}</h4>
                      <p className="text-foreground/75 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Education & Experience Section */}
        <div className="mt-20 space-y-12">
          {/* Education Section */}
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Education</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/40 to-blue-500/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative bg-card/70 backdrop-blur-md border border-purple-400/30 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mx-auto mb-4 animate-pulse" />
                    <h4 className="font-bold text-lg text-foreground mb-3">M.Sc Software Systems</h4>
                    <p className="text-foreground/70 text-sm mb-3">Coimbatore Institute of Technology, Coimbatore</p>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-xl text-sm font-medium border border-purple-400/30">
                      2023-2028
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative bg-card/70 backdrop-blur-md border border-blue-400/30 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mx-auto mb-4 animate-pulse" style={{animationDelay: '0.3s'}} />
                    <h4 className="font-bold text-lg text-foreground mb-3">HSC</h4>
                    <p className="text-foreground/70 text-sm mb-3">Sri Chaitanya Techno School, Coimbatore</p>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 rounded-xl text-sm font-medium border border-blue-400/30">
                      2021-2023
                    </span>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-pink-500/40 to-purple-500/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative bg-card/70 backdrop-blur-md border border-pink-400/30 rounded-2xl p-6 h-full hover:scale-105 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-3 h-3 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full mx-auto mb-4 animate-pulse" style={{animationDelay: '0.6s'}} />
                    <h4 className="font-bold text-lg text-foreground mb-3">SSLC</h4>
                    <p className="text-foreground/70 text-sm mb-3">Yuvabharathi Public School, Coimbatore</p>
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 rounded-xl text-sm font-medium border border-pink-400/30">
                      2011-2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="relative">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-br from-blue-500 to-pink-500">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Experience</h3>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Joint Secretary at SDC-CIT",
                    period: "May 2025-Present",
                    description: "Overseeing all student activities and events, ensuring smooth execution and engagement and mentoring junior members.",
                    gradient: "from-purple-500/20 to-blue-500/20",
                    border: "border-purple-400/30",
                    badge: "from-purple-500/20 to-blue-500/20",
                    text: "text-purple-300",
                    badgeBorder: "border-purple-400/30",
                    glow: "from-purple-500/40 to-blue-500/40",
                    dot: "from-purple-400 to-blue-400",
                    delay: "0s"
                  },
                  {
                    title: "Video Editor at The Snippet",
                    period: "Sep 2024-Present", 
                    description: "Creating and editing engaging video content for various platforms, enhancing viewer experience and app growth.",
                    gradient: "from-blue-500/20 to-cyan-500/20",
                    border: "border-blue-400/30",
                    badge: "from-blue-500/20 to-cyan-500/20",
                    text: "text-blue-300",
                    badgeBorder: "border-blue-400/30",
                    glow: "from-blue-500/40 to-cyan-500/40",
                    dot: "from-blue-400 to-cyan-400",
                    delay: "0.2s"
                  },
                  {
                    title: "Media Production Lead at SDC-CIT",
                    period: "Sep 2024-Apr 2025",
                    description: "Led the media production team in creating promotional content, managing social media presence, and coordinating event coverage.",
                    gradient: "from-pink-500/20 to-purple-500/20",
                    border: "border-pink-400/30",
                    badge: "from-pink-500/20 to-purple-500/20",
                    text: "text-pink-300",
                    badgeBorder: "border-pink-400/30",
                    glow: "from-pink-500/40 to-purple-500/40",
                    dot: "from-pink-400 to-purple-400",
                    delay: "0.4s"
                  },
                  {
                    title: "Media Head at GDSC-CIT",
                    period: "Jun 2024-Sep 2024",
                    description: "Managed the media team, creating content for events and workshops, and enhancing the club's online presence.",
                    gradient: "from-indigo-500/20 to-blue-500/20",
                    border: "border-indigo-400/30",
                    badge: "from-indigo-500/20 to-blue-500/20",
                    text: "text-indigo-300",
                    badgeBorder: "border-indigo-400/30",
                    glow: "from-indigo-500/40 to-blue-500/40",
                    dot: "from-indigo-400 to-blue-400",
                    delay: "0.6s"
                  }
                ].map((exp, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${exp.glow} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
                    <div className={`relative bg-card/70 backdrop-blur-md border ${exp.border} rounded-2xl p-6 h-full hover:scale-[1.02] transition-all duration-300`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-3 h-3 bg-gradient-to-br ${exp.dot} rounded-full animate-pulse flex-shrink-0 mt-1`} style={{animationDelay: exp.delay}} />
                        <span className={`ml-auto px-3 py-1 bg-gradient-to-r ${exp.badge} ${exp.text} rounded-lg text-xs font-medium border ${exp.badgeBorder}`}>
                          {exp.period}
                        </span>
                      </div>
                      <h4 className="font-bold text-lg text-foreground mb-3">{exp.title}</h4>
                      <p className="text-foreground/75 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};