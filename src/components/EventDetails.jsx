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
        
        {/* Date */}
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-gold)', margin: 0, fontWeight: 500 }}>
            Sun | <span style={{ fontSize: '2rem' }}>31</span> | May
          </h2>
        </div>

        {/* Time */}
        <div>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', margin: '10px 0' }}>
            From 10:00 AM
          </p>
        </div>

        {/* Venue */}
        <div>
          <p style={{ margin: '5px 0 0', opacity: 0.9, lineHeight: 1.6, fontSize: '1rem', color: 'var(--color-dark)' }}>
            <strong>Obron Convention Center</strong><br/>
            CK Para, Valanchery
          </p>
        </div>

      </div>
    </motion.section>
  );
};

export default EventDetails;
