import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check } from 'lucide-react';

const Share = ({ initialGuestName }) => {
  const [recipientName, setRecipientName] = useState(initialGuestName || '');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialGuestName) {
      setRecipientName(initialGuestName);
    }
  }, [initialGuestName]);

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const getShareUrl = () => {
    const baseUrl = window.location.origin;
    if (recipientName.trim() !== '') {
      return `${baseUrl}/?name=${encodeURIComponent(recipientName.trim())}`;
    }
    return baseUrl;
  };

  const handleShare = () => {
    const shareUrl = getShareUrl();
    const displayName = recipientName.trim() ? recipientName.trim() : "Guest";
    
    // Formatting exactly as requested in the screenshot
    const message = `*Wedding Invitation*\n\nDear *${displayName}*, you are cordially invited to the wedding of:\n\n*Farhana Sherin & Mohammed Faez*\n\nPlease check your invitation here:\n${shareUrl}`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(getShareUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section 
      variants={itemVariants}
      className="share-section"
      style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '15px', zIndex: 10, position: 'relative' }}
    >
      <p style={{ opacity: 0.8, fontSize: '0.85rem', marginBottom: '5px' }}>
        Create a personalized invite link:
      </p>

      <input 
        type="text" 
        className="input-field" 
        placeholder="Enter recipient's name"
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
        style={{ textAlign: 'center', background: 'rgba(255, 255, 255, 0.4)' }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
        <button className="btn-primary" onClick={handleShare} style={{ width: '100%', justifyContent: 'center' }}>
          <Share2 size={16} /> Share on WhatsApp
        </button>

        <button className="btn-secondary" onClick={copyLink} style={{ width: '100%', border: 'none' }}>
          {copied ? <><Check size={16} style={{marginRight: '8px'}} /> Copied!</> : 'Copy Link'}
        </button>
      </div>

    </motion.section>
  );
};

export default Share;
