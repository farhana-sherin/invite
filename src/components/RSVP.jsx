import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const RSVP = () => {
  const [attending, setAttending] = useState(null);
  const [members, setMembers] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  return (
    <motion.section 
      variants={itemVariants}
      style={{ textAlign: 'center' }}
    >
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', color: 'var(--color-gold)' }}>RSVP</h3>
            <p style={{ marginBottom: '20px', opacity: 0.8, fontSize: '0.9rem' }}>Will you attend our wedding?</p>

            {!attending && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
                <button 
                  className="btn-primary" 
                  onClick={() => setAttending('yes')}
                  style={{ width: '80%' }}
                >
                  <Heart size={16} /> Yes, In Sha Allah
                </button>
                <button 
                  className="btn-secondary" 
                  onClick={() => { setAttending('no'); setSubmitted(true); }}
                  style={{ width: '80%' }}
                >
                  <X size={16} /> Sorry, I can't attend
                </button>
              </div>
            )}

            {attending === 'yes' && (
              <motion.form 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                onSubmit={handleSubmit}
                style={{ marginTop: '15px' }}
              >
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem' }}>
                    How many members will attend?
                  </label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10" 
                    className="input-field"
                    value={members}
                    onChange={(e) => setMembers(e.target.value)}
                    required
                    style={{ width: '100px', textAlign: 'center' }}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '80%' }}>
                  Submit RSVP
                </button>
              </motion.form>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Heart size={30} color="var(--color-gold)" style={{ margin: '0 auto 10px' }} />
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--color-gold)' }}>
              {attending === 'yes' ? 'Alhamdulillah!' : 'Thank You!'}
            </h3>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>
              {attending === 'yes' 
                ? `Your RSVP for ${members} member(s) has been confirmed.` 
                : 'We will miss you! Thank you for letting us know.'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default RSVP;
