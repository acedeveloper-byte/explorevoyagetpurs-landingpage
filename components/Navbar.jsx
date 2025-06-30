"use client";
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
      <h2 className={styles.logo}><span>EXPLORE</span> <br /> TOURS & TRAVELS</h2>

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
