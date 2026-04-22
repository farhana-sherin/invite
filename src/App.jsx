import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import EventDetails from './components/EventDetails';
import Countdown from './components/Countdown';
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

  // Main container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 }
    }
  };

  return (
    <div className="app-container">
      {/* Background Texture Element */}
      <div className="bg-texture"></div>

      <motion.div 
        className="content-wrapper"
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={containerVariants} className="invitation-card">
          <Hero guestName={guestName} />
          
          <div className="divider">✦</div>
          
          <EventDetails />
          
          <div className="divider">✦</div>
          
          <Countdown targetDate="2026-05-31T10:00:00" />
          
          <div className="divider">✦</div>
          
         
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
