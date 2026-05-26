'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Transition } from 'framer-motion';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

// One shared spring drives every layout morph so the container, nav links,
// avatar, dividers, and toggle all reach their new positions at the same time.
// This is what kills the "late text" lag — children share the parent's tempo.
const LAYOUT_SPRING: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
  mass: 0.9,
};

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shineActive, setShineActive] = useState(false);

  // Theme initialisation
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement?.classList?.add('dark');
      setIsDark(true);
    }
  }, []);

  // Scroll listener — single threshold drives the morph
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement?.classList?.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement?.classList?.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Animated style targets — driven by `scrolled`
  const containerAnimate = {
    backgroundColor: scrolled
      ? isDark
        ? 'rgba(15,15,15,0.72)'
        : 'rgba(255,255,255,0.72)'
      : 'rgba(255,255,255,0)',
    borderColor: scrolled
      ? isDark
        ? 'rgba(255,255,255,0.10)'
        : 'rgba(0,0,0,0.08)'
      : 'rgba(0,0,0,0)',
    boxShadow: scrolled
      ? isDark
        ? '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)'
        : '0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.8)'
      : '0 0 0 0 rgba(0,0,0,0)',
    borderRadius: scrolled ? 9999 : 12,
  };

  return (
    <>
      <div className="w-full pt-3 pb-2 flex justify-center pointer-events-none">
        <motion.header
          layout
          initial={false}
          animate={containerAnimate}
          transition={LAYOUT_SPRING}
          className={`pointer-events-auto flex items-center border ${
            scrolled ? 'gap-4 px-6 py-3' : 'w-full justify-between gap-3 px-2 py-2'
          }`}
          style={{
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
            WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
            transition: 'backdrop-filter 0.5s ease-in-out, -webkit-backdrop-filter 0.5s ease-in-out',
          }}
        >
          {/* Avatar — same DOM node in both states, framer auto-animates its position */}
          <motion.div
            layout
            transition={LAYOUT_SPRING}
            className="relative cursor-pointer overflow-hidden rounded-full flex-shrink-0"
            style={{ width: 32, height: 32 }}
            onMouseEnter={() => setShineActive(true)}
            onMouseLeave={() => setShineActive(false)}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <AppLogo size={32} className="rounded-full" />
            <AnimatePresence>
              {shineActive && (
                <motion.div
                  key="shine"
                  className="absolute inset-0 pointer-events-none"
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: '200%', opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{
                    background:
                      'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)',
                    transform: 'skewX(-15deg)',
                  }}
                />
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right-side group: stays grouped, framer's layout prop moves it as one cohesive unit */}
          <motion.div layout transition={LAYOUT_SPRING} className="flex items-center gap-3 md:gap-4">
            {/* Divider 1 — collapses to width 0 when not scrolled */}
            <motion.div
              layout
              animate={{
                opacity: scrolled ? 1 : 0,
                width: scrolled ? 1 : 0,
              }}
              transition={LAYOUT_SPRING}
              className="h-4 hidden md:block flex-shrink-0"
              style={{
                background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)',
              }}
              aria-hidden
            />

            {/* Nav links — `layout` on each link keeps the text in lock-step with the pill morph */}
            <motion.nav layout transition={LAYOUT_SPRING} className="hidden md:flex items-center gap-4 md:gap-5">
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  layout
                  transition={LAYOUT_SPRING}
                  href={link.href}
                  className="text-sm font-medium transition-colors whitespace-nowrap"
                  style={{
                    color: scrolled
                      ? isDark
                        ? 'rgba(245,245,245,0.85)'
                        : 'rgba(17,17,17,0.78)'
                      : 'var(--foreground)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = isDark ? '#F5F5F5' : '#111111';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = scrolled
                      ? isDark
                        ? 'rgba(245,245,245,0.85)'
                        : 'rgba(17,17,17,0.78)'
                      : 'var(--foreground)';
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>

            {/* Divider 2 — collapses to width 0 when not scrolled */}
            <motion.div
              layout
              animate={{
                opacity: scrolled ? 1 : 0,
                width: scrolled ? 1 : 0,
              }}
              transition={LAYOUT_SPRING}
              className="h-4 hidden md:block flex-shrink-0"
              style={{
                background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)',
              }}
              aria-hidden
            />

            {/* Theme toggle */}
            <motion.button
              layout
              transition={LAYOUT_SPRING}
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="text-muted-foreground hover:text-foreground transition-colors p-1 flex-shrink-0"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'inline-flex' }}
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Mobile hamburger */}
            <motion.button
              layout
              transition={LAYOUT_SPRING}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden text-foreground p-1 flex-shrink-0"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </motion.button>
          </motion.div>
        </motion.header>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden pointer-events-auto"
            style={{
              background: isDark ? 'rgba(15,15,15,0.95)' : 'rgba(247,247,247,0.95)',
              backdropFilter: 'blur(12px)',
            }}
            onClick={() => setMenuOpen(false)}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="text-2xl font-semibold text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
