import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import AchievementsSection from '@/app/components/AchievementsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    /* Outer wrapper: full-page diagonal line gutter pattern */
    <div
      className="min-h-screen relative"
      style={{
        background: 'var(--background)',
        backgroundImage: `repeating-linear-gradient(-45deg,transparent,transparent 4px,rgba(0,0,0,0.028) 4px,rgba(0,0,0,0.028) 5px)`,
      }}
    >
      {/* Dark mode gutter pattern override */}
      <style>{`.dark #page-root {background-image: repeating-linear-gradient(-45deg,transparent,transparent 4px,rgba(255,255,255,0.028) 4px,rgba(255,255,255,0.028) 5px) !important;}`}</style>

      {/* Header sits outside the white content column so it spans full width */}
      <div className="relative z-50">
        <div className="max-w-5xl mx-auto px-6">
          <Header />
        </div>
      </div>

      {/* White central content column */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '56rem',
          background: 'var(--background)',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.04), 0 0 60px rgba(0,0,0,0.04)',
          minHeight: '100vh',
        }}
      >
        <div className="px-6 sm:px-8">
          <main>
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <AchievementsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
