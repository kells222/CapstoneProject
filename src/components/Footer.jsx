import React from 'react';



function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {currentYear} Lucky Wishes</p>
      <p>Instagram and Facebook Coming Soon</p>
    </footer>
  );
}

export default Footer;
