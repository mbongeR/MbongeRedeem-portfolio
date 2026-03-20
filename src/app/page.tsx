"use client";

import React from "react";
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
  FileCode
} from "lucide-react";

export default function Portfolio() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-20 selection:bg-neutral-800">
      
      {/* Hero Section */}
      <section className="mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-neutral-900/50 text-xs text-secondary mb-6">
          <Terminal size={12} className="text-emerald-500" />
          <span>Available for New Opportunities</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
          Backend Engineer | <span className="text-neutral-500">Infrastructure & APIs</span>
        </h1>
        <p className="text-lg text-secondary mb-10 max-w-2xl leading-relaxed">
          Building scalable, backend systems, decoupling architectures, and streamlining deployments. 
          Focusing on high availability, GitOps, and system reliability.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-200 transition-all duration-300"
          >
            <Github size={18} />
            <span>View GitHub</span>
          </a>
          <a 
            href="mailto:example@email.com" 
            className="inline-flex items-center gap-2 border border-border px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-900 transition-all duration-300 text-secondary hover:text-white"
          >
            <Mail size={18} />
            <span>Contact Me</span>
          </a>
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
              <li className="flex gap-3 hover:text-neutral-300 transition-colors">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-neutral-600" />
                <span>Developed and maintained highly available RESTful APIs using Spring Boot and Java.</span>
              </li>
              <li className="flex gap-3 hover:text-neutral-300 transition-colors">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-neutral-600" />
                <span>Streamlined deployment pipelines using GitLab CI and implemented GitOps deployment strategies with ArgoCD.</span>
              </li>
              <li className="flex gap-3 hover:text-neutral-300 transition-colors">
                <CheckCircle2 size={16} className="mt-1 flex-shrink-0 text-neutral-600" />
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
          <h2 className="text-2xl font-semibold">Selected Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="group border border-border p-6 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 border border-border rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors">
                <Server size={20} />
              </div>
              <ExternalLink size={18} className="text-neutral-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-white">Smart Greenhouse IoT Gateway</h3>
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

          {/* Project 2 */}
          <div className="group border border-border p-6 rounded-xl hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 border border-border rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white transition-colors">
                <Cloud size={20} />
              </div>
              <Github size={18} className="text-neutral-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-lg font-medium mb-2 text-white">Production-Ready GitOps Boilerplate</h3>
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

      {/* Skills Grid */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <Code2 size={21} className="text-neutral-400" />
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-sm font-medium text-white px-2 py-1 border-l-2 border-emerald-500 bg-neutral-900/30">
              <FileCode size={16} className="text-emerald-500" />
              Backend & Frameworks
            </div>
            <div className="space-y-3">
              {['Java', 'Spring Boot', 'RESTful APIs'].map(skill => (
                <div key={skill} className="text-sm text-secondary font-mono flex items-center gap-2">
                  <div className="w-1 h-1 bg-neutral-700 rounded-full" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-sm font-medium text-white px-2 py-1 border-l-2 border-blue-500 bg-neutral-900/30">
              <Server size={16} className="text-blue-500" />
              Infrastructure
            </div>
            <div className="space-y-3">
              {['ArgoCD', 'Docker', 'GitLab CI'].map(skill => (
                <div key={skill} className="text-sm text-secondary font-mono flex items-center gap-2">
                  <div className="w-1 h-1 bg-neutral-700 rounded-full" />
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Testing */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-sm font-medium text-white px-2 py-1 border-l-2 border-orange-500 bg-neutral-900/30">
              <CheckCircle2 size={16} className="text-orange-500" />
              API & Testing
            </div>
            <div className="space-y-3">
              {['Postman', 'REST Architecture', 'OpenAPI/Swagger'].map(skill => (
                <div key={skill} className="text-sm text-secondary font-mono flex items-center gap-2">
                  <div className="w-1 h-1 bg-neutral-700 rounded-full" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-600">
        <p>© 2026 Portfolio. Built with Next.js & Lucide React.</p>
        <p className="flex items-center gap-2">
          <Terminal size={12} />
          <span>Last Commit: {new Date().toLocaleDateString()}</span>
        </p>
      </footer>
    </main>
  );
}
