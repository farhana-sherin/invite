import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const timeBlockStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '60px',
  };

  const numberStyle = {
    fontSize: '2rem',
    fontWeight: 600,
    fontFamily: 'var(--font-heading)',
    color: 'var(--color-gold)',
    lineHeight: 1
  };

  const labelStyle = {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginTop: '8px',
    opacity: 0.7
  };

  return (
    <motion.section 
      variants={itemVariants}
      style={{ textAlign: 'center' }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={timeBlockStyle}>
          <span style={numberStyle}>{timeLeft.days}</span>
          <span style={labelStyle}>Days</span>
        </div>
        <div style={timeBlockStyle}>
          <span style={numberStyle}>{timeLeft.hours}</span>
          <span style={labelStyle}>Hours</span>
        </div>
        <div style={timeBlockStyle}>
          <span style={numberStyle}>{timeLeft.minutes}</span>
          <span style={labelStyle}>Mins</span>
        </div>
        <div style={timeBlockStyle}>
          <span style={numberStyle}>{timeLeft.seconds}</span>
          <span style={labelStyle}>Secs</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Countdown;
