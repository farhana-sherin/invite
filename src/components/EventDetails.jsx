import React from 'react';
import { motion } from 'framer-motion';

const EventDetails = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      variants={itemVariants}
      style={{ textAlign: 'center' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Nikah */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--color-gold)', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '3px' }}>Nikah Ceremony</h3>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-gold-light)', margin: '0 auto 10px', opacity: 0.5 }} />
          <p style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-dark)', letterSpacing: '1px' }}>
            <strong>10:00 AM</strong> <span style={{ opacity: 0.8 }}>@ CK Para Juma Masjid</span>
          </p>
        </div>

        {/* Date */}
        <div style={{ margin: '30px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ color: 'var(--color-dark)', margin: 0, display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: '4px', color: 'var(--color-gold-dark)' }}>SUN</span>
            <span style={{ fontSize: '3.8rem', fontWeight: 400, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>31</span>
            <span style={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: '4px', color: 'var(--color-gold-dark)' }}>MAY</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text)', margin: '10px 0 0 0', letterSpacing: '8px' }}>2026</p>
        </div>

        {/* Venue (Wedding Ceremony) */}
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--color-gold)', margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '3px' }}>Wedding Ceremony</h3>
          <div style={{ width: '40px', height: '1px', background: 'var(--color-gold-light)', margin: '0 auto 10px', opacity: 0.5 }} />
          <p style={{ margin: '0', lineHeight: 1.8, fontSize: '1.1rem', color: 'var(--color-dark)' }}>
            <strong style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>Obron Convention Center</strong><br/>
            <span style={{ color: 'var(--color-text-light)' }}>CK Para, Valanchery</span>
          </p>
        </div>

      </div>
    </motion.section>
  );
};

export default EventDetails;
