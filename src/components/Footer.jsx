import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Lucky Wishes</p>
    </footer>
  );
}

export default Footer;
