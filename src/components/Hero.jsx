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
        <h2 style={{ fontSize: '2rem', fontWeight: 400, color: 'var(--color-gold)', margin: 0 }}>
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </h2>
      </div>

      <motion.div variants={itemVariants} style={{ margin: '20px 0' }}>
        <p style={{ letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '15px' }}>
          With the blessings of Almighty Allah<br/>and our beloved parents,
        </p>
        <p style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '2px', margin: '20px 0 10px' }}>
          We cordially invite you to
        </p>
        <h3 style={{ fontSize: '1.5rem', margin: '5px 0 30px', fontWeight: 600, color: 'var(--color-dark)' }}>
          Wedding Ceremony
        </h3>

        <h1 className="cursive-text" style={{ fontSize: '2.8rem', margin: '15px 0', lineHeight: 1.3 }}>
          Farhana Sherin <br />
          <span style={{ fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-light)' }}>&</span> <br />
          Mohammed Faez
        </h1>
      </motion.div>

      <motion.div variants={itemVariants} style={{ marginTop: '20px' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '5px' }}>
          {guestName ? (
            <>Dear <span style={{ fontWeight: 600, color: 'var(--color-gold)' }}>{guestName}</span>,</>
          ) : (
            <>Dear Guest,</>
          )}
        </p>
        <p style={{ lineHeight: 1.6, fontSize: '0.9rem', opacity: 0.8 }}>
          Please join us in celebrating this joyous occasion.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
