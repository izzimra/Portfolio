'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

const polaroidImages = [
  {
    src: "https://images.unsplash.com/photo-1645013937286-7f283262c61d",
    alt: 'Mountain landscape with lush green forest and misty peaks under overcast sky',
    label: 'Bandung',
    rotate: -8,
    x: -160,
    y: 10,
    zIndex: 1
  },
  {
    src: "https://images.unsplash.com/photo-1720617782216-21db14005f0b",
    alt: 'Vibrant city street at night with neon lights and rain-slicked pavement',
    label: 'Kuala Lumpur',
    rotate: -3,
    x: -60,
    y: -15,
    zIndex: 2
  },
  {
    src: "https://images.unsplash.com/photo-1621692359226-070bd08a954d",
    alt: 'Tropical beach with turquoise water, white sand, and palm trees in bright sunlight',
    label: 'Bali',
    rotate: 4,
    x: 50,
    y: 5,
    zIndex: 3
  },
  {
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1613df677-1773636157940.png",
    alt: 'Ancient temple ruins surrounded by jungle greenery in warm golden afternoon light',
    label: 'Yogyakarta',
    rotate: 10,
    x: 155,
    y: -10,
    zIndex: 4
  }
];

const badgeTexts = ['Software Engineer', 'Creative Lead'];

function RollingBadge() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % badgeTexts.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="badge-outlined overflow-hidden"
      style={{ height: '1.6rem', minWidth: 140, position: 'relative', display: 'inline-flex', alignItems: 'center' }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={badgeTexts[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'absolute', whiteSpace: 'nowrap', left: '50%', x: '-50%' }}
        >
          {badgeTexts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function PolaroidCard({
  src,
  alt,
  label,
  rotate,
  x,
  y,
  zIndex,
  index,
}: {
  src: string;
  alt: string;
  label: string;
  rotate: number;
  x: number;
  y: number;
  zIndex: number;
  index: number;
}) {
  return (
    <motion.div
      className="polaroid-card"
      style={{ rotate, x, y, zIndex, width: 110 }}
      initial={{ opacity: 0, y: 40, rotate: rotate - 5 }}
      animate={{ opacity: 1, y, rotate }}
      transition={{
        delay: 0.6 + index * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: y - 12,
        rotate: rotate * 0.5,
        zIndex: 10,
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      <div className="w-full overflow-hidden" style={{ height: 80 }}>
        <AppImage
          src={src}
          alt={alt}
          width={110}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-center mt-1" style={{ fontSize: '0.6rem', color: '#666', fontWeight: 500 }}>
        {label}
      </p>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section id="about" className="pt-6 pb-16">
      {/* Name + Rolling Badge — blur/fade/slide-up entrance */}
      <motion.div
        initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-wrap items-baseline gap-3 mb-3"
      >
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-tight uppercase">
          IZZI MUHAMMAD RIZKY AZZAHRA
        </h1>
        <RollingBadge />
      </motion.div>

      {/* Bio — blur/fade/slide-up entrance with slight delay */}
      <motion.p
        initial={{ opacity: 0, y: 22, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.18, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-sm text-muted-foreground max-w-lg leading-relaxed mb-10"
      >
        Second-year Software Engineering student at UKM. Passionate about crafting elegant solutions
        for complex problems. With expertise in full-stack development and UI/UX design, I enjoy
        building user-centric applications that make a difference.
      </motion.p>

      {/* Polaroid Cluster */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mb-4"
      >
        <span className="badge-outlined mb-6 inline-block">Travelling is in my blood</span>
        <div className="relative w-full overflow-hidden" style={{ height: 180 }}>
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: 300 }}
          >
            {polaroidImages.map((img, i) => (
              <PolaroidCard key={img.label} {...img} index={i} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
