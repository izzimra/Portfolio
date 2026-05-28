'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';

// Monochromatic 5-stop scales (lightest → darkest) per react-github-calendar spec.
const calendarTheme = {
  light: ['#ECECEC', '#D4D4D4', '#A3A3A3', '#525252', '#171717'],
  dark: ['#1F1F1F', '#3A3A3A', '#6B6B6B', '#A3A3A3', '#F5F5F5'],
} as const;

function useIsDark() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains('dark'));
    sync();

    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

export default function GithubSection() {
  const isDark = useIsDark();

  return (
    <motion.section
      id="github"
      initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="py-12"
    >
      <div className="mb-6 flex items-baseline justify-between flex-wrap gap-3">
        <span className="badge-outlined">Coding Consistency</span>
        <a
          href="https://github.com/izzimra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          @izzimra ↗
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-xl p-5 sm:p-6 overflow-x-auto"
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
        }}
      >
        <GitHubCalendar
          username="izzimra"
          colorScheme={isDark ? 'dark' : 'light'}
          theme={calendarTheme}
          blockSize={11}
          blockMargin={3}
          blockRadius={2}
          fontSize={12}
          hideColorLegend={false}
          hideTotalCount={false}
          labels={{
            totalCount: '{{count}} contributions in the last year',
          }}
          style={{ color: 'var(--muted-foreground)' }}
        />
      </motion.div>
    </motion.section>
  );
}
