import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import GithubSection from '@/app/components/GithubSection';
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

      {/* Central content column — header is the first child so it visually connects to the top */}
      <div
        className="relative mx-auto"
        style={{
          maxWidth: '56rem',
          background: 'var(--background)',
          boxShadow: '0 0 0 1px rgba(0,0,0,0.04), 0 0 60px rgba(0,0,0,0.04)',
          minHeight: '100vh',
        }}
      >
        {/* Sticky header — same column width, same horizontal padding as content */}
        <div className="sticky top-0 z-50 px-6 sm:px-8">
          <Header />
        </div>

        <div className="px-6 sm:px-8">
          <main>
            <HeroSection />
            <GithubSection />
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
