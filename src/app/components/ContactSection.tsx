'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Open the user's default email client pre-filled with my address.
      // Including the sender's email in the body so I have it once they hit send.
      const subject = encodeURIComponent('Portfolio Inquiry');
      const body = encodeURIComponent(`Hi Izzi,\n\n\n\n— ${email}`);
      window.location.href = `mailto:izzimrapersonal@gmail.com?subject=${subject}&body=${body}`;

      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="section-divider pb-12">
      <motion.h2
        className="text-2xl font-bold tracking-tight text-foreground mb-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        I&apos;m currently looking for new opportunities. Whether you have a question or want to say
        hi, hit that button.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 max-w-md"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="contact-input"
          required
          aria-label="Your email address"
        />
        <button type="submit" className="send-btn">
          {submitted ? 'Sent ✓' : 'Send Enquiry'}
        </button>
      </motion.form>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-muted-foreground mt-3"
        >
          Thanks! I&apos;ll get back to you soon.
        </motion.p>
      )}
    </section>
  );
}
