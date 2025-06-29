"use client";
// import React, { useState } from 'react';
// import styles from "@/ui/navbar.module.css";
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>MyLogo</div>

//       <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
//         <li><a href="#home" onClick={toggleMenu}>Home</a></li>
//         <li><a href="#about" onClick={toggleMenu}>About</a></li>
//         <li><a href="#services" onClick={toggleMenu}>Services</a></li>
//         <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
//       </ul>

//       <div className={styles.menuIcon} onClick={toggleMenu}>
//         {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import styles from "@/ui/navbar.module.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}><span>VOYAGE</span> <br /> TOURS & TRAVELS</h2>

      <div className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
        <li><Link href="#home" onClick={closeMenu}>Home</Link></li>
        <li><Link href="#about" onClick={closeMenu}>About</Link></li>
        <li><Link href="#services" onClick={closeMenu}>Services</Link></li>
        <li><Link href="#contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
