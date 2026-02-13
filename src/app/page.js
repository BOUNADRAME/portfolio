'use client';

import { useState } from 'react';
import { personalInfo, stats, projects, expertise, experience } from '../data/portfolio';

// Icons as inline SVGs to avoid dependency issues
const icons = {
  MapPin: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>,
  Github: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
  Linkedin: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>,
  ExternalLink: () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>,
  Lock: () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  ChevronDown: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
  BarChart3: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>,
  Server: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>,
  Monitor: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>,
  Database: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>,
  Cloud: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>,
  MapPinLg: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  Send: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>,
};

const IconComponent = ({ name }) => {
  const Icon = icons[name];
  return Icon ? <Icon /> : null;
};

// Navigation
function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#projets', label: 'Projets' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#parcours', label: 'Parcours' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-dark-950/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display font-bold text-lg text-white">
          B<span className="text-primary-500">.</span>D
        </a>
        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-dark-300 hover:text-white transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>
        <a href="mailto:bounafode@gmail.com" className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm rounded-lg transition-all duration-300">
          <IconComponent name="Send" /> Me contacter
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12"/> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-dark-950/95 border-b border-white/5">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-dark-300 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center mesh-gradient relative pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-700/5 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-400 text-sm mb-8">
          <IconComponent name="MapPin" />
          <span>{personalInfo.location}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-green-400">Disponible</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="font-display text-xl md:text-2xl text-primary-400 mb-6">
          {personalInfo.subtitle}
        </p>
        <p className="text-dark-300 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {stats.map((s, i) => (
            <div key={i} className="stat-card">
              <div className="font-display text-2xl md:text-3xl font-bold text-white glow-text">{s.value}</div>
              <div className="text-dark-400 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a href={personalInfo.github} target="_blank" rel="noopener" className="p-3 rounded-xl border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/5 text-dark-400 hover:text-white transition-all duration-300">
            <IconComponent name="Github" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="p-3 rounded-xl border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/5 text-dark-400 hover:text-white transition-all duration-300">
            <IconComponent name="Linkedin" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-xl border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/5 text-dark-400 hover:text-white transition-all duration-300">
            <IconComponent name="Mail" />
          </a>
        </div>

        <a href="#projets" className="inline-block mt-16 text-dark-500 hover:text-primary-400 transition-colors animate-bounce">
          <IconComponent name="ChevronDown" />
        </a>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-500 font-mono text-sm mb-3 tracking-widest uppercase">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Projets Majeurs</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card cursor-pointer"
              onClick={() => setActive(active === project.id ? null : project.id)}
            >
              {/* Color accent bar */}
              <div className="absolute top-0 left-0 w-1 h-full" style={{ background: project.color }} />

              <div className="p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                      {project.isConfidential && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs text-amber-400 border border-amber-400/20 bg-amber-400/5">
                          <IconComponent name="Lock" /> Confidentiel
                        </span>
                      )}
                    </div>
                    <p className="text-primary-400 text-sm">{project.subtitle}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center gap-4 text-dark-400 text-sm">
                    <span>{project.client}</span>
                    <span className="font-mono">{project.year}</span>
                  </div>
                </div>

                <p className="text-dark-300 leading-relaxed mb-4">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Expandable content */}
                {active === project.id && (
                  <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
                    <div>
                      <h4 className="text-sm font-mono text-primary-400 uppercase tracking-wider mb-2">Défi</h4>
                      <p className="text-dark-300 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-primary-400 uppercase tracking-wider mb-2">Solution</h4>
                      <p className="text-dark-300 leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-mono text-primary-400 uppercase tracking-wider mb-2">Impact</h4>
                      <ul className="space-y-2">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-dark-300">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: project.color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {project.hasScreenshots && (
                      <div className="mt-6 p-8 rounded-xl border border-dashed border-primary-500/20 bg-primary-500/5 text-center">
                        <p className="text-primary-400 text-sm">📸 Captures d'écran disponibles sur demande</p>
                        <p className="text-dark-500 text-xs mt-1">Remplacez ce bloc par vos images dans /public/images/</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Click indicator */}
                <div className="mt-4 text-center">
                  <span className="text-dark-500 text-xs">{active === project.id ? '▲ Réduire' : '▼ Voir les détails'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Expertise Section
function Expertise() {
  return (
    <section id="expertise" className="py-24 px-6 mesh-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-500 font-mono text-sm mb-3 tracking-widest uppercase">Compétences</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Expertise Technique</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item) => (
            <div key={item.category} className="p-6 rounded-2xl bg-dark-900/50 border border-white/5 hover:border-primary-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400">
                  <IconComponent name={item.icon} />
                </div>
                <h3 className="font-display font-semibold text-white">{item.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span key={skill} className="tech-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Experience Timeline
function Timeline() {
  return (
    <section id="parcours" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary-500 font-mono text-sm mb-3 tracking-widest uppercase">Parcours</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">Expérience</h2>
        </div>

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <div key={i} className="flex gap-6 group">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="timeline-dot group-hover:bg-primary-500 transition-colors duration-300" />
                {i < experience.length - 1 && <div className="timeline-line flex-1 min-h-[80px]" />}
              </div>
              {/* Content */}
              <div className="pb-10">
                <span className="font-mono text-xs text-primary-400">{exp.period}</span>
                <h3 className="font-display text-lg font-semibold text-white mt-1">{exp.title}</h3>
                <p className="text-dark-400 text-sm">{exp.company} — {exp.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 mesh-gradient">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary-500 font-mono text-sm mb-3 tracking-widest uppercase">Contact</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Travaillons ensemble</h2>
        <p className="text-dark-300 text-lg mb-12 leading-relaxed">
          Disponible pour des missions de consultance, du développement de systèmes d'information,
          et de l'assistance technique aux instituts statistiques.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-medium transition-all duration-300 glow-blue">
            <IconComponent name="Mail" /> {personalInfo.email}
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 hover:border-primary-500/30 text-white rounded-xl font-medium transition-all duration-300">
            {personalInfo.phone}
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a href={personalInfo.github} target="_blank" rel="noopener" className="text-dark-400 hover:text-white transition-colors">
            <IconComponent name="Github" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="text-dark-400 hover:text-white transition-colors">
            <IconComponent name="Linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-dark-500 text-sm">
        <p>© {new Date().getFullYear()} Bouna Dramé. Tous droits réservés.</p>
        <p>Conçu et développé par mes soins.</p>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Expertise />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
