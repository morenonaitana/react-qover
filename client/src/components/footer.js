import React from 'react';

const styles = {
    borderTop: '1px solid rgba(255,255,255, 0.2)',
    padding: '16px 0',
    color: 'rgba(255,255,255, 1)',
    fontSize: '.8rem',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  };

const Footer = () => (
  <footer style={styles}>
    © Qover 2018
  </footer>
);

export default Footer;