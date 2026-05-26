'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  description: string;
}

interface YearGroup {
  year: string;
  items: Achievement[];
}

const timeline: YearGroup[] = [
  {
    year: '2026',
    items: [
      {
        title: '3rd Place — FTSM Generative AI Vibe Hackathon',
        description:
          'Built "Rovr", an AI-powered field sales intelligence dashboard for Hilti Asia IT Services. Developed a smart prioritization engine and Mapbox route optimization with a Gemini-powered copilot. Built alongside Arnav Kapoor and Attarasya Adya Jomantara using Next.js 15, Gemini 2.5 Flash, Supabase, and AWS via Kiro IDE.',
      },
    ],
  },
  {
    year: '2025',
    items: [
      {
        title: 'DevFest 2025 KL — Participation',
        description:
          'Attended Google DevFest Kuala Lumpur, engaging with sessions on AI/ML, Flutter, and cloud architecture.',
      },
      {
        title: 'Special Skill Design Bootcamp',
        description:
          'Earned certification in Figma & Atomic Design Systems — a 40-hour intensive covering component libraries and design tokens.',
      },
    ],
  },
  {
    year: '2024',
    items: [
      {
        title: 'Launched Pine.Projectz — 160th client project',
        description:
          'Crossed the milestone of 160 delivered design projects, ranging from brand identities to full product UI kits.',
      },
      {
        title: 'Admitted to UKM Software Engineering',
        description:
          'Secured a place in Universiti Kebangsaan Malaysia\'s Bachelor of Software Engineering program.',
      },
    ],
  },
  {
    year: '2023',
    items: [
      {
        title: 'Green Computer Club — President',
        description:
          'Completed term as President, overseeing IoT projects, mentorship programs, and inter-university hackathon participation.',
      },
    ],
  },
  {
    year: '2021',
    items: [
      {
        title: 'Founded Green Computer Club chapter',
        description:
          'Established a campus tech community focused on hardware, IoT, and open-source software.',
      },
    ],
  },
  {
    year: '2019',
    items: [
      {
        title: 'Started Pine.Projectz',
        description:
          'Began delivering freelance design and creative work, initially focused on Esports branding and social media content.',
      },
    ],
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-divider pb-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <span className="text-sm text-muted-foreground">Timeline of </span>
        <span className="badge-outlined ml-1">Achievements</span>
      </motion.div>

      <div className="relative pl-6">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-2 bottom-2 w-px"
          style={{ background: 'var(--border)' }}
        />

        {timeline.map((group, gi) => (
          <motion.div
            key={group.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ delay: gi * 0.08, duration: 0.5 }}
            className="mb-8"
          >
            {/* Year header */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="absolute left-0 w-px"
                style={{ transform: 'translateX(-50%)' }}
              />
              <span className="font-bold text-sm text-foreground tracking-tight">
                {group.year}
              </span>
            </div>

            {/* Items */}
            <div className="space-y-4">
              {group.items.map((item, ii) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.08 + ii * 0.06, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  {/* Dot on the line */}
                  <div
                    className="timeline-dot absolute"
                    style={{ left: '-0.3rem' }}
                  />
                  <div className="pl-2">
                    <p className="text-sm font-medium text-foreground mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
