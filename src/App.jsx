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

  // Main container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
          
          <motion.div variants={itemVariants} className="greeting-container">
            <h2 className="cursive-text guest-greeting">
              {guestName ? `Dear ${guestName},` : 'Dear Guest,'}
            </h2>
            <p className="greeting-subtext">
              You are joyfully invited.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="card-image-container">
            {/* Using the template image. Placed in public/template.jpg */}
            <img src="/template.jpg" alt="Wedding Invitation Card" className="template-image" />
          </motion.div>
          
          <Share initialGuestName={guestName} />
          
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
