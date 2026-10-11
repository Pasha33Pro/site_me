import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  Terminal, Cpu, Wifi, Code2, Server, Smartphone, 
  Github, Linkedin, Mail, ExternalLink, ChevronDown,
  CircuitBoard, Cloud, Database, Shield, Zap, Globe,
  Menu, X, ArrowUpRight, Radio, HardDrive, Layers
} from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentSection, setCurrentSection] = useState('home');
  
  const fullText = 'Full-Stack Developer & IoT Engineer';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-text grid-bg noise-bg relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="font-mono text-primary font-bold text-lg flex items-center gap-2">
              <Terminal size={20} />
              <span>Pasha33<span className="text-secondary">Pro</span></span>
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="font-mono text-sm text-text-dim hover:text-primary transition-colors duration-300 capitalize"
                >
                  <span className="text-primary mr-1">{'>'}</span>{section}
                </a>
              ))}
            </div>

            <button 
              className="md:hidden text-primary"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-bg-card border-b border-border"
            >
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 font-mono text-sm text-text-dim hover:text-primary hover:bg-bg-card-hover transition-all capitalize"
                >
                  <span className="text-primary mr-2">{'>'}</span>{section}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-mono text-xs text-primary">Available for projects</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-text">Hi, I'm </span>
            <span className="gradient-text">Pasha33Pro</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-lg sm:text-xl text-text-dim mb-8 h-8"
          >
            <span className="text-primary">$</span> {typedText}
            <span className="cursor-blink text-primary">▊</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-text-dim text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Building the bridge between software and hardware. From scalable web applications 
            to IoT ecosystems — I craft digital solutions that connect the physical and virtual worlds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-bg-dark font-semibold rounded-lg hover:bg-primary-dim transition-all duration-300 flex items-center gap-2 glow-pulse"
            >
              <Code2 size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={18} />
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center text-text-dim hover:text-primary transition-colors">
              <span className="font-mono text-xs mb-2">scroll</span>
              <ChevronDown size={20} className="animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="font-mono text-sm text-text-dim">
            <span className="text-primary">{'<'}</span>
            <span className="text-secondary">/</span>
            <span className="text-text">Pasha33Pro</span>
            <span className="text-primary">{'>'}</span>
            <span className="text-text-dim ml-2">© 2025 — Built with passion & caffeine</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="About Me" subtitle="whoami" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-green-500"></div>
                  <span className="ml-2 font-mono text-xs text-text-dim">~/pasha33pro/about</span>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed">
                  <p className="text-text-dim mb-2">
                    <span className="text-primary">const</span> <span className="text-secondary">developer</span> = {'{'}
                  </p>
                  <p className="text-text-dim ml-4">
                    <span className="text-accent">name</span>: <span className="text-primary">"Pasha33Pro"</span>,
                  </p>
                  <p className="text-text-dim ml-4">
                    <span className="text-accent">role</span>: <span className="text-primary">"Full-Stack & IoT Engineer"</span>,
                  </p>
                  <p className="text-text-dim ml-4">
                    <span className="text-accent">passion</span>: <span className="text-primary">"Connecting things"</span>,
                  </p>
                  <p className="text-text-dim ml-4">
                    <span className="text-accent">stack</span>: [<span className="text-primary">"web"</span>, <span className="text-primary">"mobile"</span>, <span className="text-primary">"IoT"</span>, <span className="text-primary">"cloud"</span>],
                  </p>
                  <p className="text-text-dim ml-4">
                    <span className="text-accent">motto</span>: <span className="text-primary">"Code that bridges worlds"</span>
                  </p>
                  <p className="text-text-dim">{'}'}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-text-dim leading-relaxed text-lg">
                I'm a full-stack developer who doesn't limit himself to just building websites. 
                My expertise spans from crafting pixel-perfect frontends and robust backends 
                to designing IoT systems that bring intelligence to everyday objects.
              </p>
              <p className="text-text-dim leading-relaxed">
                Whether it's a React application with a Node.js backend, a smart home system 
                with ESP32 microcontrollers, or an industrial IoT dashboard — I love the challenge 
                of making hardware and software work together seamlessly.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <StatCard number="50+" label="Projects" />
                <StatCard number="5+" label="Years Exp" />
                <StatCard number="30+" label="IoT Devices" />
                <StatCard number="∞" label="Curiosity" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-bg-card border border-border rounded-lg p-4 text-center card-glow transition-all duration-300">
      <div className="text-2xl font-bold gradient-text font-mono">{number}</div>
      <div className="text-xs text-text-dim mt-1">{label}</div>
    </div>
  );
}

function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe size={24} />,
      color: "text-primary",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Three.js"]
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      color: "text-secondary",
      skills: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "IoT & Hardware",
      icon: <Cpu size={24} />,
      color: "text-accent",
      skills: ["ESP32/ESP8266", "Arduino", "Raspberry Pi", "MQTT", "Zigbee", "LoRa"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      color: "text-primary",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"]
    },
    {
      title: "Mobile",
      icon: <Smartphone size={24} />,
      color: "text-secondary",
      skills: ["React Native", "Flutter", "PWA", "BLE", "NFC", "Push Notifications"]
    },
    {
      title: "Security",
      icon: <Shield size={24} />,
      color: "text-accent",
      skills: ["OAuth2", "JWT", "TLS/SSL", "Penetration Testing", "IoT Security", "Encryption"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Tech Stack" subtitle="skills --list" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300 card-glow group"
              >
                <div className={`flex items-center gap-3 mb-4 ${category.color}`}>
                  {category.icon}
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-bg-dark border border-border rounded-full text-xs font-mono text-text-dim group-hover:border-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Smart Home Hub",
      description: "Centralized IoT platform for managing 50+ smart devices. Real-time monitoring, automation rules, and voice control integration.",
      tags: ["IoT", "React", "Node.js", "MQTT", "ESP32"],
      category: "iot",
      icon: <CircuitBoard size={24} />,
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      status: "Live"
    },
    {
      title: "Industrial Monitoring Dashboard",
      description: "Real-time sensor data visualization for manufacturing. Predictive maintenance alerts and historical analytics.",
      tags: ["IoT", "React", "D3.js", "InfluxDB", "LoRa"],
      category: "iot",
      icon: <Radio size={24} />,
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      status: "Live"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured marketplace with payment processing, inventory management, and AI-powered recommendations.",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      category: "web",
      icon: <Layers size={24} />,
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      status: "Live"
    },
    {
      title: "Weather Station Network",
      description: "Distributed weather monitoring with custom-built sensor nodes. Data aggregation and forecasting API.",
      tags: ["IoT", "Python", "Raspberry Pi", "Grafana"],
      category: "iot",
      icon: <Wifi size={24} />,
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
      status: "Beta"
    },
    {
      title: "Task Management SaaS",
      description: "Collaborative project management tool with real-time updates, Kanban boards, and team analytics.",
      tags: ["React", "Socket.io", "MongoDB", "Docker"],
      category: "web",
      icon: <Code2 size={24} />,
      color: "from-indigo-500/20 to-violet-500/20",
      borderColor: "border-indigo-500/30",
      status: "Live"
    },
    {
      title: "Smart Agriculture System",
      description: "Automated irrigation and environmental control for greenhouses. Soil sensors, weather adaptation, and mobile alerts.",
      tags: ["IoT", "Arduino", "Flutter", "Firebase"],
      category: "iot",
      icon: <HardDrive size={24} />,
      color: "from-teal-500/20 to-green-500/20",
      borderColor: "border-teal-500/30",
      status: "Dev"
    },
    {
      title: "API Gateway Service",
      description: "Microservices gateway with rate limiting, authentication, request transformation, and comprehensive logging.",
      tags: ["Go", "gRPC", "Docker", "K8s"],
      category: "backend",
      icon: <Server size={24} />,
      color: "from-red-500/20 to-rose-500/20",
      borderColor: "border-red-500/30",
      status: "Live"
    },
    {
      title: "Portfolio CMS",
      description: "Headless CMS with markdown support, image optimization, and multi-channel content delivery.",
      tags: ["Next.js", "Sanity", "Vercel", "TypeScript"],
      category: "web",
      icon: <Database size={24} />,
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      status: "Live"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'iot', label: 'IoT & Hardware' },
    { key: 'web', label: 'Web Apps' },
    { key: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle title="Projects" subtitle="ls ~/projects" />
          
          <div className="flex flex-wrap gap-3 justify-center mt-8 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-primary text-bg-dark font-semibold'
                    : 'bg-bg-card border border-border text-text-dim hover:border-primary/30 hover:text-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <motion.div layout className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`bg-bg-card border ${project.borderColor} rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 card-glow group`}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                        {project.icon}
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-mono ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-dim text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-bg-dark rounded text-xs font-mono text-text-dim border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <a href="#" className="flex items-center gap-1 text-sm text-primary hover:text-primary-dim transition-colors font-mono">
                        <Github size={14} /> Source
                      </a>
                      <a href="#" className="flex items-center gap-1 text-sm text-secondary hover:text-secondary/80 transition-colors font-mono">
                        <ExternalLink size={14} /> Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <SectionTitle title="Get In Touch" subtitle="echo 'hello'" />
          
          <p className="text-text-dim text-lg mt-6 mb-12 max-w-2xl mx-auto">
            Have an interesting project? Want to build something cool with IoT? 
            Or just want to say hi? My inbox is always open.
          </p>

          <div className="terminal-window max-w-2xl mx-auto mb-12">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="ml-2 font-mono text-xs text-text-dim">contact@pasha33pro</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <p className="text-text-dim">
                <span className="text-primary">$</span> cat contact_info.json
              </p>
              <p className="text-text-dim mt-2">{'{'}</p>
              <p className="text-text-dim ml-4">
                <span className="text-accent">"email"</span>: <span className="text-primary">"hello@pasha33pro.dev"</span>,
              </p>
              <p className="text-text-dim ml-4">
                <span className="text-accent">"telegram"</span>: <span className="text-primary">"@pasha33pro"</span>,
              </p>
              <p className="text-text-dim ml-4">
                <span className="text-accent">"github"</span>: <span className="text-primary">"github.com/Pasha33Pro"</span>,
              </p>
              <p className="text-text-dim ml-4">
                <span className="text-accent">"response_time"</span>: <span className="text-primary">"&lt; 24h"</span>
              </p>
              <p className="text-text-dim">{'}'}</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:hello@pasha33pro.dev"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-bg-dark font-semibold rounded-lg hover:bg-primary-dim transition-all duration-300"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a
              href="https://github.com/Pasha33Pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href="https://t.me/pasha33pro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-secondary/30 text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300"
            >
              <Zap size={18} />
              Telegram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <span className="font-mono text-sm text-primary mb-2 block">
        <span className="text-text-dim">$</span> {subtitle}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold gradient-text">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full"></div>
    </div>
  );
}

export default App;
