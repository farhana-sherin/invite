import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Share2, Check } from 'lucide-react';

const Share = ({ initialGuestName }) => {
  // Allow user to set a dynamic name for sharing
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
    
    // Exactly matching the requested message format:
    // "Dear [Guest Name], you are invited to our wedding.
    // Please check your invitation here: [INVITE_LINK]"
    const message = `Dear ${displayName}, you are invited to our wedding.\nPlease check your invitation here: ${shareUrl}`;

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
      style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '15px' }}
    >
      <h3 style={{ fontSize: '1.2rem', marginBottom: '0px', color: 'var(--color-gold)' }}>Invite Others</h3>
      <p style={{ opacity: 0.8, fontSize: '0.85rem', marginBottom: '5px' }}>
        Generate a personalized link to share.
      </p>

      {/* Input to change the name dynamically for the link */}
      <input 
        type="text" 
        className="input-field" 
        placeholder="Enter recipient's name"
        value={recipientName}
        onChange={(e) => setRecipientName(e.target.value)}
        style={{ textAlign: 'center', background: 'transparent' }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
        <button className="btn-primary" onClick={handleShare} style={{ width: '80%', justifyContent: 'center' }}>
          <Share2 size={16} /> Share on WhatsApp
        </button>

        <button className="btn-secondary" onClick={copyLink} style={{ width: '80%', border: 'none' }}>
          {copied ? <><Check size={16} style={{marginRight: '8px'}} /> Copied!</> : 'Copy Link'}
        </button>
      </div>

    </motion.section>
  );
};

export default Share;
