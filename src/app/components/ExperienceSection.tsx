'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TechBadge {
  label: string;
  color: string;
  bg: string;
}

interface Experience {
  org: string;
  role: string;
  period: string;
  description: string;
  logoText: string;
  logoColor: string;
  logoBg: string;
  techs: TechBadge[];
}

const experiences: Experience[] = [
  {
    org: 'PPI UKM',
    role: 'Head of IT & Multimedia',
    period: 'Feb 2026 — Current',
    description:
      'Lead the IT & Multimedia department, overseeing official website development, multimedia production pipelines, and a student-driven "Video Edit by Request" system.',
    logoText: 'PPI',
    logoColor: '#1D4ED8',
    logoBg: '#EFF6FF',
    techs: [
      { label: 'Nx', color: '#000', bg: '#F5F5F5' },
      { label: 'Ts', color: '#3178C6', bg: '#EBF2FB' },
      { label: 'Pr', color: '#9999FF', bg: '#F0EFFF' },
    ],
  },
  {
    org: 'Pine.Projectz',
    role: 'Founder',
    period: 'Sep 2019 — Current',
    description:
      'Delivered 160+ custom design projects, directed Esports content creation, and served as Project Manager for the "Mental Note" mental-health journaling app.',
    logoText: 'Pn',
    logoColor: '#059669',
    logoBg: '#ECFDF5',
    techs: [
      { label: 'Fi', color: '#F24E1E', bg: '#FEF0EC' },
      { label: 'Ai', color: '#FF9A00', bg: '#FFF8EC' },
      { label: 'Ps', color: '#31A8FF', bg: '#EBF7FF' },
    ],
  },
  {
    org: 'Green Computer Club',
    role: 'President',
    period: 'Aug 2021 — Mar 2023',
    description:
      'Mentored 40+ members in programming fundamentals, designed a biometric Heartbeat Detector, and developed an automated IoT Rain Detection System for campus use.',
    logoText: 'GCC',
    logoColor: '#16A34A',
    logoBg: '#F0FDF4',
    techs: [
      { label: 'C+', color: '#00599C', bg: '#EBF4FB' },
      { label: 'Py', color: '#3776AB', bg: '#EBF5FB' },
      { label: 'Io', color: '#00979D', bg: '#E8F8F8' },
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-divider pb-12">
      <motion.h2
        className="text-2xl font-bold tracking-tight text-foreground mb-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>

      <motion.p
        className="text-sm text-muted-foreground max-w-md mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Roles where I&apos;ve led teams, shipped products, and created lasting impact.
      </motion.p>

      <div className="border-t border-border pt-2 mb-2">
        <span className="badge-outlined mt-4 inline-block">Worked at reputed organizations</span>
      </div>

      <div className="mt-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.org}
            className="experience-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start justify-between gap-4">
              {/* Left */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                  <span className="font-semibold text-foreground text-sm">{exp.role}</span>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2 max-w-lg">
                  {exp.description}
                </p>
                <div className="flex items-center gap-1.5">
                  {exp.techs.map((tech) => (
                    <div
                      key={tech.label}
                      className="tech-icon-badge"
                      style={{ background: tech.bg, color: tech.color, border: `1px solid ${tech.color}22` }}
                      title={tech.label}
                    >
                      {tech.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Org Logo */}
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-lg font-bold text-sm"
                style={{
                  width: 48,
                  height: 48,
                  background: exp.logoBg,
                  color: exp.logoColor,
                  fontSize: '0.65rem',
                  letterSpacing: '0.02em',
                }}
              >
                {exp.logoText}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
