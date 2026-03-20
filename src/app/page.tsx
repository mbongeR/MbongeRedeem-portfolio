"use client";

import React, { useState } from "react";
import { 
  Github, 
  Mail, 
  Terminal, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  ExternalLink,
  Server,
  Cloud,
  Code2,
  FileCode,
  MapPin,
  Phone,
  GraduationCap,
  Globe,
  Users,
  X,
  Copy,
  ChevronRight,
  BrainCircuit,
  Linkedin,
  Database,
  Monitor
} from "lucide-react";

export default function Portfolio() {
  const [showContact, setShowContact] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-20 selection:bg-neutral-800 relative">
      
      {/* Name Header */}
      <header className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
        <h2 className="text-xl font-bold tracking-tighter text-white uppercase opacity-80">Mbonge Redeem</h2>
      </header>

      {/* Hero Section */}
      <section className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-neutral-900/50 text-xs text-secondary">
            <Terminal size={12} className="text-emerald-500" />
            <span>Available for New Opportunities</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-neutral-900/50 text-xs text-secondary">
            <MapPin size={12} className="text-blue-500" />
            <span>Bulawayo (Relocation & Remote Ready)</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white leading-tight">
          Backend Developer | <span className="text-neutral-500">Infrastructure & APIs</span>
        </h1>
        <p className="text-lg text-secondary mb-10 max-w-2xl leading-relaxed">
          Building scalable, backend systems, decoupling architectures, and streamlining deployments. 
          Focusing on high availability, GitOps, and system reliability.
        </p>
        
        <div className="flex flex-wrap gap-4 items-center">
          <a 
            href="https://github.com/mbongeR" 
            target="_blank"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition-all duration-300"
          >
            <Github size={18} />
            <span>View GitHub</span>
          </a>
          <button 
            onClick={() => setShowContact(true)}
            className="inline-flex items-center gap-2 border border-border px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-900 transition-all duration-300 text-secondary hover:text-white"
          >
            <Mail size={18} />
            <span>Connect</span>
          </button>
        </div>
      </section>

      {/* Contact Modal/Overlay */}
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-neutral-900 border border-border w-full max-w-md p-8 rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6">Contact Details</h2>
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">LinkedIn</span>
                <div className="flex items-center justify-between bg-black/40 border border-border p-3 rounded-lg group">
                  <div className="flex items-center gap-2 min-w-0">
                    <Linkedin size={16} className="text-blue-500 flex-shrink-0" />
                    <a 
                      href="https://www.linkedin.com/in/mbonge-redeem-b834b0268" 
                      target="_blank" 
                      className="text-sm text-neutral-200 font-mono truncate hover:underline"
                    >
                      mbonge-redeem-b834b0268
                    </a>
                  </div>
                  <ExternalLink size={14} className="text-neutral-600 group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Email</span>
                <div className="flex items-center justify-between bg-black/40 border border-border p-3 rounded-lg group">
                  <span className="text-sm text-neutral-200 font-mono">redeemmbonge792@gmail.com</span>
                  <button onClick={() => copyToClipboard('redeemmbonge792@gmail.com')} className="text-neutral-600 hover:text-white transition-colors">
                    <Copy size={16} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">Phone</span>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-black/40 border border-border p-3 rounded-lg">
                    <span className="text-sm text-neutral-200 font-mono">+263 71 937 2985</span>
                    <button onClick={() => copyToClipboard('+263 71 937 2985')} className="text-neutral-600 hover:text-white transition-colors">
                      <Copy size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-black/40 border border-border p-3 rounded-lg">
                    <span className="text-sm text-neutral-200 font-mono">+263 78 197 2985</span>
                    <button onClick={() => copyToClipboard('+263 78 197 2985')} className="text-neutral-600 hover:text-white transition-colors">
                      <Copy size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Education Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <GraduationCap size={21} className="text-neutral-400" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>

        <div className="space-y-10">
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-border">
            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-neutral-800 border-2 border-border" />
            <div className="flex justify-between items-start mb-1 gap-4">
              <h3 className="text-lg font-medium text-white flex items-center gap-2">
                Mpopoma High School
              </h3>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap pt-1.5">2017 — 2020</span>
            </div>
            <p className="text-secondary text-sm">O Level</p>
          </div>

          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-border">
            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-neutral-800 border-2 border-border" />
            <div className="flex justify-between items-start mb-1 gap-4">
              <h3 className="text-lg font-medium text-white">Gifford High School</h3>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap pt-1.5">2021 — 2022</span>
            </div>
            <p className="text-secondary text-sm">A Level</p>
          </div>

          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-border">
            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-neutral-800 border-2 border-border" />
            <div className="flex justify-between items-start mb-1 gap-4">
              <h3 className="text-lg font-medium text-white">NUST CCE</h3>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap pt-1.5">Jan 2023 — July 2023</span>
            </div>
            <p className="text-secondary text-sm">Computer System Support & Digital Skills Licence</p>
          </div>

          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-border">
            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-neutral-800 border-2 border-border" />
            <div className="flex justify-between items-start mb-1 gap-4">
              <h3 className="text-lg font-medium text-white underline decoration-neutral-700 underline-offset-4">Bachelor of Science Honor's Degree in Informatics and Analytics</h3>
              <span className="text-xs font-mono text-neutral-500 whitespace-nowrap pt-1.5 uppercase tracking-wider">Present</span>
            </div>
            <p className="text-secondary text-sm">National University of Science and Technology (NUST)</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-24 relative">
        <div className="flex items-center gap-3 mb-10">
          <Layers size={21} className="text-neutral-400" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        
        <div className="space-y-12">
          <div className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-border">
            <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-neutral-800 border-2 border-border" />
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-medium text-white">Backend Engineering Intern</h3>
                <p className="text-secondary">KaribuTech-AI | Fintech</p>
              </div>
              <span className="text-xs font-mono text-neutral-500 px-2 py-1 border border-border rounded uppercase tracking-wider">
                Current
              </span>
            </div>
            <ul className="space-y-3 text-secondary leading-relaxed">
              <li className="flex gap-3 hover:text-neutral-300 transition-colors group/item">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-neutral-600 group-hover/item:text-emerald-500 transition-colors" />
                <span>Developed and maintained highly available RESTful APIs using Spring Boot and Java.</span>
              </li>
              <li className="flex gap-3 hover:text-neutral-300 transition-colors group/item">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-neutral-600 group-hover/item:text-emerald-500 transition-colors" />
                <span>Streamlined deployment pipelines using GitLab CI and implemented GitOps deployment strategies with ArgoCD.</span>
              </li>
              <li className="flex gap-3 hover:text-neutral-300 transition-colors group/item">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-neutral-600 group-hover/item:text-emerald-500 transition-colors" />
                <span>Authored comprehensive automated API test suites using Postman to ensure contract reliability.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <Cpu size={21} className="text-neutral-400" />
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group border border-border p-6 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300 md:col-span-2">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 border border-border rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors">
                <BrainCircuit size={20} />
              </div>
              <a href="https://github.com/mbongeR/agri-credit-ai-engine" target="_blank">
                <Github size={18} className="text-neutral-600 hover:text-white transition-colors" />
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-xl font-medium text-white group-hover:underline underline-offset-4 decoration-neutral-800">AgriCredit AI Engine</h3>
              <span className="text-[10px] font-mono text-neutral-500 border border-border px-2 py-0.5 rounded uppercase tracking-widest whitespace-nowrap">AI/ML Engineer & DevOps</span>
            </div>
            <p className="text-secondary text-sm mb-6 leading-relaxed max-w-3xl">
              AI-powered agricultural lending platform providing credit scoring for smallholder farmers. Built a real-time pipeline pulling Sentinel-2 satellite crop health data (AgroMonitoring API) and weather telemetry, processed by a custom TensorFlow neural network for automated risk assessment.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'FastAPI', 'TensorFlow', 'Sentinel-2', 'Docker', 'Railway'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-border rounded text-neutral-500 bg-neutral-900/50 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="group border border-border p-6 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 border border-border rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors">
                <Server size={20} />
              </div>
              <ExternalLink size={18} className="text-neutral-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-white group-hover:underline underline-offset-4 decoration-neutral-800">Smart Greenhouse IoT Gateway</h3>
            <p className="text-secondary text-sm mb-6 leading-relaxed">
              A decoupled, event-driven REST API built with Spring Boot and PostgreSQL to process high-volume sensor telemetry.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Java', 'Spring Boot', 'DTOs', 'Lombok'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-border rounded text-neutral-500 bg-neutral-900/50 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="group border border-border p-6 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 border border-border rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors">
                <Cloud size={20} />
              </div>
              <Github size={18} className="text-neutral-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-white group-hover:underline underline-offset-4 decoration-neutral-800">Production-Ready GitOps Boilerplate</h3>
            <p className="text-secondary text-sm mb-6 leading-relaxed">
              Open-source Spring Boot template configured with Dockerfiles, GitLab CI pipelines, and ArgoCD manifests for immediate deployment.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['Docker', 'GitLab CI', 'ArgoCD'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono px-2 py-0.5 border border-border rounded text-neutral-500 bg-neutral-900/50 uppercase tracking-tighter">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Languages */}
      <section className="mb-24">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-10">
              <Code2 size={21} className="text-neutral-400" />
              <h2 className="text-2xl font-semibold">Tech Stack</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Backend & Foundations */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-white px-2 py-1 border-l-2 border-emerald-500 bg-neutral-900/30">
                  <FileCode size={16} className="text-emerald-500" />
                  Backend & Foundations
                </div>
                <div className="space-y-3 font-mono">
                  {['Java', 'Spring Boot', 'RESTful APIs'].map(skill => (
                    <div key={skill} className="text-sm text-secondary flex items-center gap-2">
                      <ChevronRight size={14} className="text-emerald-900" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Data & Storage */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-white px-2 py-1 border-l-2 border-purple-500 bg-neutral-900/30">
                  <Database size={16} className="text-purple-500" />
                  Data & Storage
                </div>
                <div className="space-y-3 font-mono">
                  {['PostgreSQL', 'MS SQL Server', 'DBeaver'].map(skill => (
                    <div key={skill} className="text-sm text-secondary flex items-center gap-2">
                      <ChevronRight size={14} className="text-purple-900" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Infrastructure & Deployment */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-white px-2 py-1 border-l-2 border-blue-500 bg-neutral-900/30">
                  <Cloud size={16} className="text-blue-500" />
                  Infrastructure & Cloud
                </div>
                <div className="space-y-3 font-mono">
                  {['Docker', 'ArgoCD', 'Azure', 'Hetzner', 'On-Prem'].map(skill => (
                    <div key={skill} className="text-sm text-secondary flex items-center gap-2">
                      <ChevronRight size={14} className="text-blue-900" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Platforms & OS */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-white px-2 py-1 border-l-2 border-neutral-500 bg-neutral-900/30">
                  <Monitor size={16} className="text-neutral-400" />
                  Platforms & OS
                </div>
                <div className="space-y-3 font-mono">
                  {['Ubuntu (Linux)', 'Windows'].map(skill => (
                    <div key={skill} className="text-sm text-secondary flex items-center gap-2">
                      <ChevronRight size={14} className="text-neutral-800" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* API & Testing */}
              <div>
                <div className="flex items-center gap-2 mb-4 text-sm font-medium text-white px-2 py-1 border-l-2 border-orange-500 bg-neutral-900/30">
                  <CheckCircle2 size={16} className="text-orange-500" />
                  API & Testing
                </div>
                <div className="space-y-3 font-mono">
                  {['Postman', 'REST Arch.', 'OpenAPI'].map(skill => (
                    <div key={skill} className="text-sm text-secondary flex items-center gap-2">
                      <ChevronRight size={14} className="text-orange-900" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <Globe size={21} className="text-neutral-400" />
              <h2 className="text-2xl font-semibold">Languages</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'English', level: 'Professional' },
                { name: 'Ndebele', level: 'Native' },
                { name: 'Shona', level: 'Native' }
              ].map(lang => (
                <div key={lang.name} className="flex justify-between items-center border-b border-border pb-2 group hover:border-neutral-700 transition-colors">
                  <span className="text-sm text-white font-medium group-hover:text-emerald-500 transition-colors">{lang.name}</span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <Users size={21} className="text-neutral-400" />
          <h2 className="text-2xl font-semibold">References</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border p-6 rounded-xl bg-neutral-900/20 hover:border-neutral-700 transition-all duration-300">
            <h3 className="text-white font-medium mb-4">Miss T Marume</h3>
            <div className="space-y-2 text-sm text-secondary font-mono">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-neutral-600" />
                <span>+263 77 347 8795</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-neutral-600" />
                <a href="mailto:tendiememoe@yahoo.com" className="hover:text-white transition-colors line-clamp-1">tendiememoe@yahoo.com</a>
              </div>
            </div>
          </div>

          <div className="border border-border p-6 rounded-xl bg-neutral-900/20 hover:border-neutral-700 transition-all duration-300">
            <h3 className="text-white font-medium mb-4">Mrs S Dube</h3>
            <div className="space-y-2 text-sm text-secondary font-mono">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-neutral-600" />
                <span>+263 77 286 2660</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-neutral-600" />
                <a href="mailto:sifisodubet@gmail.com" className="hover:text-white transition-colors line-clamp-1">sifisodubet@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-600">
        <p>© 2026 Mbonge Redeem. Built with Next.js & Lucide React.</p>
        <p className="flex items-center gap-2">
          <Terminal size={12} />
          <span>Last Commit: {new Date().toLocaleDateString()}</span>
        </p>
      </footer>
    </main>
  );
}
