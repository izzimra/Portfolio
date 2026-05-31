'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

interface TechBadge {
  label: string;
  iconImage: string;
}

interface Experience {
  org: string;
  role: string;
  period: string;
  description: string;
  logoImage: string;
  techs: TechBadge[];
}

const experiences: Experience[] = [
  {
    org: 'PPI UKM',
    role: 'Head of IT & Multimedia',
    period: 'Feb 2026 — Current',
    description:
      'Lead the IT & Multimedia department, overseeing official website development, multimedia production pipelines, and a student-driven "Video Edit by Request" system.',
    logoImage: '/image-portfolio/ppi.png',
    techs: [
      { label: 'Next.js', iconImage: '/image-portfolio/nextjs.png' },
      { label: 'TypeScript', iconImage: '/image-portfolio/ts.png' },
      { label: 'Premiere Pro', iconImage: '/image-portfolio/premiere.png' },
    ],
  },
  {
    org: 'Pine.Projectz',
    role: 'Founder',
    period: 'Sep 2019 — Current',
    description:
      'Delivered 160+ custom design projects, directed Esports content creation, and served as Project Manager for the "Mental Note" mental-health journaling app.',
    logoImage: '/image-portfolio/pine.png',
    techs: [
      { label: 'Figma', iconImage: '/image-portfolio/figma.png' },
      { label: 'Illustrator', iconImage: '/image-portfolio/illustrator.png' },
      { label: 'Photoshop', iconImage: '/image-portfolio/photoshop.png' },
    ],
  },
  {
    org: 'Green Computer Club',
    role: 'President',
    period: 'Aug 2021 — Mar 2023',
    description:
      'Mentored 40+ members in programming fundamentals, designed a biometric Heartbeat Detector, and developed an automated IoT Rain Detection System for campus use.',
    logoImage: '/image-portfolio/gcc.png',
    techs: [
      { label: 'C++', iconImage: '/image-portfolio/cpp.png' },
      { label: 'Python', iconImage: '/image-portfolio/python.png' },
      { label: 'IoT / Hardware', iconImage: '/image-portfolio/iot.png' },
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
                <div className="flex items-center gap-2">
                  {exp.techs.map((tech) => (
                    <div
                      key={tech.label}
                      className="w-7 h-7 flex items-center justify-center"
                      title={tech.label}
                    >
                      <AppImage
                        src={tech.iconImage}
                        alt={tech.label}
                        width={28}
                        height={28}
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Org Logo */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gray-50 dark:bg-neutral-800 overflow-hidden flex items-center justify-center">
                <AppImage
                  src={exp.logoImage}
                  alt={`${exp.org} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
