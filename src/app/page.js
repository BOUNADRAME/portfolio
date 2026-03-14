'use client';

import { useState } from 'react';
import { personalInfo, certifications, testimonials } from '../data/portfolio';
import { translations } from '../data/translations';
import { portfolioContent } from '../data/portfolioContent';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from '../components/LanguageToggle';

// Base path for assets (empty in dev, /portfolio in production)
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

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
  Download: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>,
  Brain: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
};

const IconComponent = ({ name }) => {
  const Icon = icons[name];
  return Icon ? <Icon /> : null;
};

// Navigation
function Navbar() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  const links = [
    { href: '#projets', label: t.projects },
    { href: '#expertise', label: t.expertise },
    { href: '#parcours', label: t.journey },
    { href: '#contact', label: t.contact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-dark-950/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" className="font-display font-bold text-lg text-white">
          B<span className="text-primary-500">.</span>D
        </a>

        <div className="hidden lg:flex gap-8 flex-1 justify-center">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-dark-300 hover:text-white transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <a href="mailto:bounafode@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-sm rounded-lg transition-all duration-300">
            <IconComponent name="Send" /> {t.contactMe}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
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
          <div className="flex items-center gap-3 pt-3">
            <LanguageToggle />
          </div>
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="min-h-[90vh] md:min-h-[85vh] flex items-center justify-center mesh-gradient relative pt-20 md:pt-16 pb-16 md:pb-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-700/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Photo profile avec effet 3D */}
          <div className="relative group flex-shrink-0 w-full sm:w-auto flex justify-center">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-primary-700 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse-slow" />
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-3xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-primary-500/30 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <img
                  src={`${basePath}/images/photo.jpeg`}
                  alt="Bouna Dramé"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex gap-3">
                    <a href={personalInfo.github} target="_blank" rel="noopener" className="p-3 rounded-xl bg-dark-950/90 backdrop-blur-sm border border-primary-500/30 hover:bg-primary-500/20 text-white transition-all duration-300">
                      <IconComponent name="Github" />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="p-3 rounded-xl bg-dark-950/90 backdrop-blur-sm border border-primary-500/30 hover:bg-primary-500/20 text-white transition-all duration-300">
                      <IconComponent name="Linkedin" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-xl bg-dark-950/90 backdrop-blur-sm border border-primary-500/30 hover:bg-primary-500/20 text-white transition-all duration-300">
                      <IconComponent name="Mail" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu texte */}
          <div className="flex-1 text-center lg:text-left w-full">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary-500/20 bg-primary-500/5 text-primary-400 text-xs sm:text-sm mb-4 sm:mb-6 animate-fade-in">
              <IconComponent name="MapPin" />
              <span className="whitespace-nowrap">{t.hero.location}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 whitespace-nowrap">{t.hero.available}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight animate-slide-up">
              {personalInfo.name}
            </h1>
            <p className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <span className="bg-gradient-to-r from-primary-400 via-purple-400 to-primary-500 bg-clip-text text-transparent">
                {t.hero.subtitle}
              </span>
            </p>
            <p className="text-dark-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-10 leading-relaxed animate-slide-up px-4 sm:px-2 lg:px-0" style={{ animationDelay: '0.2s' }}>
              {t.hero.bio}
            </p>

            {/* Stats en ligne */}
            <div className="flex overflow-x-auto justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-10 animate-slide-up pb-2 scrollbar-hide px-2 sm:px-0" style={{ animationDelay: '0.3s' }}>
              {[
                { value: "7+", label: t.stats.experience },
                { value: "10+", label: t.stats.projects },
                { value: "15+", label: t.stats.technologies },
                { value: "4", label: t.stats.countries },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-dark-900/50 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 group flex-shrink-0 min-w-[90px] sm:min-w-0">
                  <div className="text-center w-full">
                    <div className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white glow-text group-hover:scale-110 transition-transform duration-300">{s.value}</div>
                    <div className="text-dark-400 text-[10px] sm:text-xs mt-0.5 whitespace-nowrap">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-3 animate-slide-up px-4 sm:px-2 lg:px-0" style={{ animationDelay: '0.4s' }}>
              <a
                href={`${basePath}/cv/CV_BOUNA_DRAME.pdf`}
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-primary-600 hover:bg-primary-500 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary-500/20 whitespace-nowrap"
                aria-label="Télécharger le CV"
              >
                <IconComponent name="Download" />
                <span className="hidden sm:inline">{t.hero.ctaDownloadCV || 'Télécharger CV'}</span>
                <span className="sm:hidden">CV</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-dark-800 hover:bg-dark-700 border border-primary-500/30 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                aria-label="Accéder à la section contact"
              >
                <IconComponent name="Send" />
                <span>{t.hero.ctaContact}</span>
              </a>
              <a
                href="#projets"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 border border-primary-500/30 hover:border-primary-500/50 hover:bg-primary-500/5 text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                aria-label="Voir mes projets"
              >
                <span>{t.hero.ctaProjects}</span>
              </a>
            </div>
          </div>
        </div>

        <a href="#projets" className="absolute bottom-4 left-1/2 -translate-x-1/2 text-dark-500 hover:text-primary-400 transition-colors animate-bounce">
          <IconComponent name="ChevronDown" />
        </a>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const [active, setActive] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];
  const projects = portfolioContent[language].projects;

  return (
    <section id="projets" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-500 font-mono text-xs sm:text-sm mb-3 tracking-widest uppercase animate-fade-in">{t.projects.sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-up px-4">{t.projects.title}</h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto animate-slide-up px-4" style={{ animationDelay: '0.1s' }}>
            {t.projects.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="project-card cursor-pointer group"
              onClick={() => setActive(active === project.id ? null : project.id)}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Color accent bar with glow */}
              <div
                className="absolute top-0 left-0 w-1 h-full transition-all duration-500 group-hover:w-2"
                style={{
                  background: project.color,
                  boxShadow: `0 0 20px ${project.color}40`
                }}
              />

              <div className="p-6 sm:p-8 md:p-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <div className="flex items-center flex-wrap gap-2 sm:gap-3 mb-3">
                      <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.isConfidential && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs text-amber-400 border border-amber-400/30 bg-amber-400/10">
                          <IconComponent name="Lock" /> {t.projects.confidential}
                        </span>
                      )}
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono border"
                        style={{
                          borderColor: `${project.color}40`,
                          background: `${project.color}10`,
                          color: project.color
                        }}
                      >
                        {project.category}
                      </span>
                    </div>
                    <p className="text-primary-400 text-base md:text-lg font-medium mb-2">{project.subtitle}</p>
                    <div className="flex items-center gap-4 text-dark-400 text-sm">
                      <span className="flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-primary-500" />
                        {project.client}
                      </span>
                      <span className="font-mono">{project.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-dark-300 leading-relaxed text-base md:text-lg mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>

                {/* Expandable content */}
                {active === project.id && (
                  <div className="mt-8 pt-8 border-t border-white/10 space-y-8 animate-slide-up">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-6 rounded-xl bg-dark-950/50 border border-primary-500/10">
                        <h4 className="text-sm font-mono text-primary-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-6 h-0.5" style={{ background: project.color }} />
                          {t.projects.challenge}
                        </h4>
                        <p className="text-dark-300 leading-relaxed">{project.challenge}</p>
                      </div>
                      <div className="p-6 rounded-xl bg-dark-950/50 border border-primary-500/10">
                        <h4 className="text-sm font-mono text-primary-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <span className="w-6 h-0.5" style={{ background: project.color }} />
                          {t.projects.solution}
                        </h4>
                        <p className="text-dark-300 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                    <div className="p-6 rounded-xl bg-dark-950/50 border border-primary-500/10">
                      <h4 className="text-sm font-mono text-primary-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <span className="w-6 h-0.5" style={{ background: project.color }} />
                        {t.projects.impact}
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.impact.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-dark-300">
                            <span
                              className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                              style={{ background: project.color }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Confidential project notice */}
                    {project.isConfidential && (
                      <div className="p-6 rounded-xl bg-amber-500/5 border border-amber-500/20">
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0">
                            <IconComponent name="Lock" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-mono text-amber-400 uppercase tracking-wider mb-2 font-semibold">
                              {language === 'fr' ? 'Projet Confidentiel' : 'Confidential Project'}
                            </h4>
                            <p className="text-dark-300 text-sm leading-relaxed">
                              {language === 'fr'
                                ? 'Les captures d\'écran et certains détails techniques sont protégés par un accord de confidentialité. Les informations présentées ont été validées pour diffusion publique.'
                                : 'Screenshots and certain technical details are protected by a confidentiality agreement. The information presented has been validated for public disclosure.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Screenshots - Now at the bottom (only for non-confidential projects) */}
                    {project.hasScreenshots && !project.isConfidential && (
                      <div className="pt-4">
                        <h4 className="text-sm font-mono text-primary-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                          <span className="w-6 h-0.5" style={{ background: project.color }} />
                          {language === 'fr' ? 'Captures d\'écran' : 'Screenshots'}
                        </h4>
                        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                          {(() => {
                            // Define screenshots for each project
                            const screenshots = {
                              'kairos-sensemaking': [
                                'dashboard.png',
                                'login.png',
                                'map-gps.png',
                                'keywords.png'
                              ],
                              'pisa': [
                                'Acceuil.png',
                                'tableau_bord_vue_ensemble.png',
                                'Activites_dialogues.png',
                                'tableau_bord_dialogue.png',
                                'activites.png',
                                'workplan.png',
                                'tableau_bord_activite_operationnelle.png',
                                'tableau_bord_participant.png',
                                'Administration.png',
                                'Rapporter.png'
                              ]
                            };
                            const projectScreenshots = screenshots[project.id] || [];
                            return projectScreenshots.map((filename, idx) => {
                              const imagePath = `${basePath}/projects/${project.id}/${encodeURIComponent(filename)}`;
                              return (
                                <div
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setLightbox(imagePath);
                                  }}
                                  className="group relative aspect-video overflow-hidden rounded-lg border border-primary-500/20 hover:border-primary-500/60 transition-all duration-300 cursor-pointer hover:z-10"
                                >
                                  <img
                                    src={imagePath}
                                    alt={`${project.title} - Screenshot ${idx + 1}`}
                                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                                    loading="lazy"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                  </div>
                                </div>
                              );
                            });
                          })()}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Click indicator */}
                <div className="mt-6 text-center">
                  <button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-dark-500 hover:text-primary-400 hover:bg-primary-500/5 transition-all duration-300 text-sm font-medium"
                  >
                    {active === project.id ? (
                      <>
                        <span>{t.projects.reduce}</span>
                        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <span>{t.projects.seeDetails}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10"
              onClick={() => setLightbox(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={lightbox}
              alt="Screenshot agrandie"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}

// Expertise Section
function Expertise() {
  const { language } = useLanguage();
  const t = translations[language];
  const expertise = portfolioContent[language].expertise;

  return (
    <section id="expertise" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 mesh-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-500 font-mono text-xs sm:text-sm mb-3 tracking-widest uppercase">{t.expertise.sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 px-4">
            {t.expertise.title.split(' ')[0]} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t.expertise.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            {t.expertise.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, idx) => (
            <div
              key={item.category}
              className="group p-8 rounded-2xl bg-gradient-to-br from-dark-900/80 to-dark-950/80 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 text-primary-400 group-hover:scale-110 transition-transform duration-300 border border-primary-500/20">
                    <IconComponent name={item.icon} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                    {item.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span key={skill} className="tech-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Certifications Section
function Certifications() {
  const [lightbox, setLightbox] = useState(null);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="certifications" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-500 font-mono text-xs sm:text-sm mb-3 tracking-widest uppercase">{t.certifications.sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 px-4">
            {t.certifications.title.split(' ')[0]} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t.certifications.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            {t.certifications.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={cert.id}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-dark-900/80 to-dark-950/80 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setLightbox(`${basePath}/certificats/${cert.file}`)}
            >
              {/* Color accent */}
              <div
                className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                style={{ background: cert.color }}
              />

              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

              <div className="relative">
                {/* Platform badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-primary-500/10 border border-primary-500/20 text-primary-400">
                    {cert.platform}
                  </span>
                  <svg className="w-5 h-5 text-dark-500 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>

                {cert.instructor && (
                  <p className="text-dark-400 text-sm mb-3">
                    <span className="text-dark-500">Par</span> {cert.instructor}
                  </p>
                )}

                <div className="flex items-center gap-4 text-dark-400 text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {cert.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {cert.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="tech-badge text-xs">{skill}</span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="tech-badge text-xs">+{cert.skills.length - 3}</span>
                  )}
                </div>

                <button className="w-full mt-2 py-2 px-4 rounded-lg bg-primary-500/10 hover:bg-primary-500/20 border border-primary-500/20 hover:border-primary-500/40 text-primary-400 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {t.certifications.viewCertificate}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for PDF */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-white/10"
              onClick={() => setLightbox(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe
              src={lightbox}
              className="w-full h-full max-w-5xl max-h-[90vh] bg-white rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}

// Experience Timeline
function Timeline() {
  const { language } = useLanguage();
  const t = translations[language];
  const experience = portfolioContent[language].experience;

  return (
    <section id="parcours" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-500 font-mono text-xs sm:text-sm mb-3 tracking-widest uppercase">{t.timeline.sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 px-4">
            {t.timeline.title.split(' ')[0]} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t.timeline.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            {t.timeline.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-purple-500 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="relative group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-4 h-4 -translate-x-1/2 rounded-full border-2 border-primary-500 bg-dark-950 group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300 z-10 hidden md:block" />

                {/* Content card */}
                <div className="md:ml-20 p-8 rounded-2xl bg-gradient-to-br from-dark-900/80 to-dark-950/80 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-500 hover:transform hover:scale-[1.02] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

                  <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 font-mono text-sm w-fit">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-dark-400">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="font-medium">{exp.company}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="temoignages" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-primary-500 font-mono text-xs sm:text-sm mb-3 tracking-widest uppercase">{t.testimonials.sectionLabel}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 px-4">
            {t.testimonials.title}
          </h2>
          <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={testimonial.id}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-dark-900/80 to-dark-950/80 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-500" />

              <div className="relative">
                {/* Quote icon */}
                <div className="mb-6 opacity-20">
                  <svg className="w-12 h-12 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial text */}
                <p className="text-dark-300 leading-relaxed mb-8 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Author info */}
                <div className="pt-6 border-t border-white/10">
                  <h4 className="font-display text-lg font-semibold text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-primary-400 text-sm font-medium mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-dark-500 text-xs">
                    {testimonial.company}
                  </p>
                </div>
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
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 mesh-gradient relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-primary-500 font-mono text-xs sm:text-sm mb-3 tracking-widest uppercase">{t.contact.sectionLabel}</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 px-4">
          {t.contact.title.split(' ')[0]} <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">{t.contact.title.split(' ').slice(1).join(' ')}</span>
        </h2>
        <p className="text-dark-300 text-base sm:text-lg md:text-xl mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
          {t.contact.subtitle}
        </p>

        {/* Contact cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-dark-900/80 to-dark-950/80 border border-primary-500/20 hover:border-primary-500/40 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />
            <div className="relative">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <IconComponent name="Mail" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{t.contact.email}</h3>
              <p className="text-primary-400 font-medium">{personalInfo.email}</p>
            </div>
          </a>

          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-dark-900/80 to-dark-950/80 border border-primary-500/20 hover:border-primary-500/40 backdrop-blur-sm transition-all duration-500 hover:transform hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-primary-500/0 group-hover:from-primary-500/10 group-hover:to-purple-500/10 rounded-2xl transition-all duration-500" />
            <div className="relative">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2">{t.contact.phone}</h3>
              <p className="text-primary-400 font-medium">{personalInfo.phone}</p>
            </div>
          </a>
        </div>

        {/* Download CV Button */}
        <div className="mb-8">
          <a
            href={`${basePath}/cv/CV_BOUNA_DRAME.pdf`}
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-purple-600 hover:from-primary-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary-500/20"
          >
            <IconComponent name="Download" />
            <span>{t.contact.downloadCV || 'Télécharger mon CV'}</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener"
            className="p-4 rounded-xl bg-dark-900/50 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 text-dark-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <IconComponent name="Github" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener"
            className="p-4 rounded-xl bg-dark-900/50 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 text-dark-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <IconComponent name="Linkedin" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-4 rounded-xl bg-dark-900/50 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 text-dark-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <IconComponent name="Mail" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-white/5 bg-dark-950/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6 sm:mb-8">
          <div className="text-center md:text-left">
            <a href="#" className="font-display font-bold text-2xl text-white inline-block mb-2">
              B<span className="text-primary-500">.</span>D
            </a>
            <p className="text-dark-400 text-sm">{t.hero.subtitle}</p>
          </div>

          <div className="flex gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener" className="p-3 rounded-xl bg-dark-900/50 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 text-dark-400 hover:text-white transition-all duration-300">
              <IconComponent name="Github" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener" className="p-3 rounded-xl bg-dark-900/50 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 text-dark-400 hover:text-white transition-all duration-300">
              <IconComponent name="Linkedin" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 rounded-xl bg-dark-900/50 border border-white/10 hover:border-primary-500/30 hover:bg-primary-500/10 text-dark-400 hover:text-white transition-all duration-300">
              <IconComponent name="Mail" />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-dark-500 text-sm">
          <p>© {new Date().getFullYear()} Bouna Dramé. {t.footer.rights}</p>
          <p className="flex items-center gap-2">
            {t.footer.madeWith}
            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            {t.footer.by}
          </p>
        </div>
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
      <Certifications />
      <div className="section-divider" />
      <Timeline />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </main>
  );
}
