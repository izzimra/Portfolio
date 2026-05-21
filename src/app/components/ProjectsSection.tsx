'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

interface TechIcon {
  label: string;
  fullName: string;
  color: string;
  bg: string;
  icon: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
  techs: TechIcon[];
}

const projects: Project[] = [
  {
    title: 'GoldFlux',
    description:
      'Gold price prediction & market intelligence platform with real-time analytics and ML-powered forecasting.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b09aca67-1772313899728.png",
    alt: 'Dark financial dashboard showing gold price charts and trading analytics on monitor screen',
    techs: [
      { label: 'Py', fullName: 'Python', color: '#3776AB', bg: '#EBF5FB', icon: '🐍' },
      { label: 'Re', fullName: 'React', color: '#61DAFB', bg: '#E8F8FD', icon: '⚛' },
      { label: 'Fa', fullName: 'FastAPI', color: '#FF6B35', bg: '#FFF0EB', icon: '⚡' },
    ],
  },
  {
    title: 'WeLink',
    description:
      'Student-to-student knowledge sharing platform for universities built with Android Jetpack Compose.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_127dc1782-1769201124220.png",
    alt: 'Students collaborating around laptops in bright university library with natural light',
    techs: [
      { label: 'Kt', fullName: 'Kotlin', color: '#7F52FF', bg: '#F0EBFF', icon: 'K' },
      { label: 'An', fullName: 'Android', color: '#3DDC84', bg: '#E8FBF1', icon: '🤖' },
      { label: 'Fi', fullName: 'Figma', color: '#F24E1E', bg: '#FEF0EC', icon: '🎨' },
    ],
  },
  {
    title: 'Rovr',
    description:
      'AI-powered field sales intelligence for B2B reps — real-time CRM insights and conversation coaching.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12a259989-1766490417832.png",
    alt: 'Dark analytics dashboard with bar charts, KPI metrics, and data visualization on dark background',
    techs: [
      { label: 'TS', fullName: 'TypeScript', color: '#3178C6', bg: '#EBF2FB', icon: 'TS' },
      { label: 'Nx', fullName: 'Next.js', color: '#000000', bg: '#F5F5F5', icon: 'N' },
      { label: 'AI', fullName: 'OpenAI', color: '#10A37F', bg: '#E8F8F3', icon: '🤖' },
    ],
  },
  {
    title: 'Google Homepage',
    description:
      'A pixel-perfect remake of the classic Google homepage with modern CSS techniques and animations.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d71c2a86-1775380590718.png",
    alt: 'Clean white browser interface showing Google search homepage in bright daylight setting',
    techs: [
      { label: 'Ht', fullName: 'HTML5', color: '#E34F26', bg: '#FEF0EC', icon: '🌐' },
      { label: 'Cs', fullName: 'CSS3', color: '#1572B6', bg: '#EBF4FB', icon: '🎨' },
      { label: 'Js', fullName: 'JavaScript', color: '#F7DF1E', bg: '#FEFCE8', icon: 'JS' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

function TechIconWithHover({ tech }: { tech: TechIcon }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex items-center overflow-hidden cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        width: hovered ? 'auto' : 28,
      }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      style={{
        height: 28,
        borderRadius: 999,
        background: tech.bg,
        border: `1px solid ${tech.color}44`,
        boxShadow: hovered ? `0 2px 10px ${tech.color}22` : 'none',
        minWidth: 28,
        paddingLeft: 0,
        paddingRight: 0,
      }}
      title={tech.fullName}
    >
      {/* Circle icon label — always visible */}
      <div
        className="flex items-center justify-center shrink-0"
        style={{
          width: 26,
          height: 26,
          borderRadius: 999,
          color: tech.color,
          fontSize: '0.6rem',
          fontWeight: 700,
          userSelect: 'none',
        }}
      >
        {tech.label}
      </div>

      {/* Expanding text — slides in to the right */}
      <motion.span
        animate={{
          opacity: hovered ? 1 : 0,
          width: hovered ? 'auto' : 0,
        }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          color: tech.color,
          fontSize: '0.7rem',
          fontWeight: 600,
          paddingRight: hovered ? 8 : 0,
          display: 'block',
        }}
      >
        {tech.fullName}
      </motion.span>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-divider pb-12">
      <motion.h2
        className="text-2xl font-bold tracking-tight text-foreground mb-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <motion.p
        className="text-sm text-muted-foreground max-w-md mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        I&apos;m passionate about crafting elegant solutions for complex problems. With expertise in
        full-stack development and UI/UX design, I enjoy building user-centric applications.
      </motion.p>

      <div className="border-t border-border pt-6 mb-4">
        <span className="badge-outlined">I love building things</span>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {projects.map((project) => (
          <motion.div key={project.title} variants={cardVariants} className="project-card group">
            {/* MacBook-style dark image preview */}
            <div
              className="w-full overflow-hidden relative"
              style={{
                height: 180,
                background: '#0d0d0d',
                borderRadius: '0.75rem 0.75rem 0 0',
              }}
            >
              {/* MacBook top bar */}
              <div
                className="absolute top-0 left-0 right-0 flex items-center gap-1.5 px-3"
                style={{ height: 24, background: '#1a1a1a', zIndex: 2 }}
              >
                <div className="w-2 h-2 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: '#FFBD2E' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: '#28C840' }} />
              </div>

              <div className="absolute inset-0 top-6">
                <AppImage
                  src={project.image}
                  alt={project.alt}
                  width={600}
                  height={160}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-foreground text-base mb-1 tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Tech icons with hover-to-pill interaction */}
              <div className="flex items-center gap-2">
                {project.techs.map((tech) => (
                  <TechIconWithHover key={tech.label} tech={tech} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
