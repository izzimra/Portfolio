'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [shineActive, setShineActive] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement?.classList?.add('dark');
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
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

  return (
    <div className="sticky top-0 z-50 flex justify-center pt-4 pb-2 pointer-events-none">
      {/* Transparent top nav (default state) */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            key="top-nav"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto w-full max-w-5xl px-6 flex items-center justify-between"
          >
            {/* Avatar with shine effect */}
            <div
              ref={avatarRef}
              className="relative cursor-pointer overflow-hidden rounded-full"
              style={{ width: 36, height: 36 }}
              onMouseEnter={() => setShineActive(true)}
              onMouseLeave={() => setShineActive(false)}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <AppLogo size={36} className="rounded-full" />
              {/* Diagonal shine overlay */}
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
                      background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.55) 50%, transparent 70%)',
                      transform: 'skewX(-15deg)',
                    }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-5">
              <button
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <AnimatePresence mode="wait">
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
              </button>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="nav-link-item text-sm">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <button onClick={toggleDark} aria-label="Toggle dark mode" className="text-muted-foreground p-1">
                {isDark ? <SunIcon /> : <MoonIcon />}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="text-foreground p-1"
              >
                {menuOpen ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <line x1="3" y1="18" x2="21" y2="18"/>
                  </svg>
                )}
              </button>
            </div>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Floating glassmorphism pill (scrolled state) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="pill-nav"
            initial={{ opacity: 0, y: -20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.94 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto flex items-center gap-3 px-4 py-2 rounded-full"
            style={{
              background: isDark
                ? 'rgba(15,15,15,0.72)'
                : 'rgba(255,255,255,0.72)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: isDark
                ? '1px solid rgba(255,255,255,0.1)'
                : '1px solid rgba(0,0,0,0.08)',
              boxShadow: isDark
                ? '0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05) inset'
                : '0 8px 32px rgba(0,0,0,0.12), 0 1px 0 rgba(255,255,255,0.8) inset',
            }}
          >
            {/* Avatar */}
            <div
              className="relative cursor-pointer overflow-hidden rounded-full flex-shrink-0"
              style={{ width: 28, height: 28 }}
              onMouseEnter={() => setShineActive(true)}
              onMouseLeave={() => setShineActive(false)}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <AppLogo size={28} className="rounded-full" />
              <AnimatePresence>
                {shineActive && (
                  <motion.div
                    key="pill-shine"
                    className="absolute inset-0 pointer-events-none"
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '200%', opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{
                      background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)',
                      transform: 'skewX(-15deg)',
                    }}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div
              className="w-px h-4 flex-shrink-0"
              style={{ background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)' }}
            />

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs font-medium transition-colors"
                  style={{ color: isDark ? 'rgba(245,245,245,0.8)' : 'rgba(17,17,17,0.75)' }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = isDark ? '#F5F5F5' : '#111111';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = isDark ? 'rgba(245,245,245,0.8)' : 'rgba(17,17,17,0.75)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Divider */}
            <div
              className="w-px h-4 flex-shrink-0 hidden md:block"
              style={{ background: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)' }}
            />

            {/* Dark mode toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="transition-colors p-0.5"
              style={{ color: isDark ? 'rgba(245,245,245,0.7)' : 'rgba(17,17,17,0.6)' }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={isDark ? 'sun-pill' : 'moon-pill'}
                  initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'inline-flex' }}
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Mobile hamburger in pill */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="md:hidden p-0.5"
              style={{ color: isDark ? 'rgba(245,245,245,0.8)' : 'rgba(17,17,17,0.75)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
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
    </div>
  );
}
