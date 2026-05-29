'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Inquiry from ${encodeURIComponent(name)}`;
    const body =
      `Name: ${encodeURIComponent(name)}%0D%0A` +
      `Email: ${encodeURIComponent(email)}%0D%0A%0D%0A` +
      `${encodeURIComponent(message)}`;

    window.location.href = `mailto:izzimrapersonal@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-divider pb-12">
      <div className="max-w-2xl">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-foreground mb-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          I&apos;m open to freelancing offers. Reach out to me to inquire more about my work.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-name" className="text-xs font-bold text-foreground">
              Full name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tyler Durden"
              className="contact-input"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-email" className="text-xs font-bold text-foreground">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tyler@projectmayhem.com"
              className="contact-input"
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="text-xs font-bold text-foreground">
              Message
            </label>
            <textarea
              id="contact-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="You're crazy good, never change."
              rows={5}
              className="contact-input resize-y"
              required
            />
          </div>

          <button type="submit" className="send-btn w-full justify-center">
            {submitted ? 'Sent ✓' : 'Send message'}
          </button>
        </motion.form>

        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-muted-foreground mt-3"
          >
            Thanks! Your email client should have opened — I&apos;ll get back to you soon.
          </motion.p>
        )}
      </div>
    </section>
  );
}
