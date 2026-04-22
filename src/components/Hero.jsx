import React from 'react';
import { motion } from 'framer-motion';

const Hero = ({ guestName }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      variants={itemVariants}
      style={{ textAlign: 'center' }}
    >
      <div style={{ marginBottom: '25px' }}>
        {/* Bismillah Calligraphy */}
        <h2 style={{ fontSize: '2.2rem', fontWeight: 400, color: 'var(--color-gold)', margin: 0 }}>
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </h2>
      </div>

      <motion.div variants={itemVariants} style={{ margin: '20px 0' }}>
        <p style={{ letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '15px', color: 'var(--color-text)' }}>
          With the blessings of Almighty Allah<br/>and our beloved parents,
        </p>
        <p style={{ textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '3px', margin: '20px 0 10px', color: 'var(--color-text-light)' }}>
          We cordially invite you to
        </p>
        <h3 style={{ fontSize: '1.6rem', margin: '5px 0 30px', fontWeight: 500, color: 'var(--color-dark)', letterSpacing: '2px' }}>
          Wedding Ceremony
        </h3>

        <h1 className="cursive-text" style={{ margin: '20px 0', lineHeight: 1 }}>
          <span style={{ display: 'block', color: 'var(--color-gold)', textShadow: '0 1px 0 rgba(255,255,255,0.8)' }}>Mohammed Faez</span>
          <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-gold-light)', display: 'block', margin: '15px 0' }}>&</span>
          <span style={{ display: 'block', color: 'var(--color-gold)', textShadow: '0 1px 0 rgba(255,255,255,0.8)' }}>Farhana Sherin</span>
        </h1>
      </motion.div>

      <motion.div variants={itemVariants} style={{ marginTop: '30px' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
          {guestName ? (
            <>Dear <span style={{ fontWeight: 600, color: 'var(--color-gold)' }}>{guestName}</span>,</>
          ) : (
            <>Dear Guest,</>
          )}
        </p>
        <p style={{ lineHeight: 1.6, fontSize: '0.95rem', color: 'var(--color-text-light)' }}>
          Please join us in celebrating this joyous occasion.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
