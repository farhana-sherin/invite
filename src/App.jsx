import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Share from './components/Share';

function App() {
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    // Extract ?name= parameter from URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name) {
      setGuestName(name);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="app-container">
      <div className="bg-texture"></div>

      <motion.div 
        className="content-wrapper"
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={containerVariants} className="invitation-card">
          <div className="arch-border-inner">
            <div className="arch-border-outline"></div>
          </div>
          
          <motion.div variants={itemVariants} className="bismillah-container">
             <h2 className="bismillah-text">بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
          </motion.div>

          <motion.div variants={itemVariants} className="intro-text">
            <p>With the blessings of Almighty Allah <br/> and our beloved parents,</p>
            <p className="invite-label">We cordially invite you to</p>
          </motion.div>

          <motion.div variants={itemVariants} className="event-title-container">
            <h3 className="event-title">Wedding Ceremony</h3>
          </motion.div>

          <motion.div variants={itemVariants} className="stars-divider">
             ✦ <span className="star-sm">✧</span> ✦
          </motion.div>

          <motion.div variants={itemVariants} className="couple-names-container">
            <h1 className="couple-name">Farhana Sherin</h1>
            <span className="ampersand">&</span>
            <h1 className="couple-name">Mohammed Faez</h1>
          </motion.div>

          <motion.div variants={itemVariants} className="datetime-container">
            <div className="date-block">
              <span className="day">Sun</span> | <span className="date-num">31</span> | <span className="month">May</span>
            </div>
            <p className="time-text">From 10:00 AM</p>
          </motion.div>

          <motion.div variants={itemVariants} className="venue-container">
            <p className="venue-name">Obron Convention Center,</p>
            <p className="venue-location">CK Para, Valanchery</p>
          </motion.div>

          <motion.div variants={itemVariants} className="stars-divider">
             ✦ <span className="star-sm">✧</span> ✦
          </motion.div>
          
          <Share initialGuestName={guestName} />
          
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
