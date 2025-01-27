import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          CodeCanvas
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={`${styles.line} ${isMenuOpen ? styles.line1 : ''}`}></span>
        <span className={`${styles.line} ${isMenuOpen ? styles.line2 : ''}`}></span>
        <span className={`${styles.line} ${isMenuOpen ? styles.line3 : ''}`}></span>
      </div>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.activeLink}` : styles.navItem
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.activeLink}` : styles.navItem
            }
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.activeLink}` : styles.navItem
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? `${styles.navItem} ${styles.activeLink}` : styles.navItem
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
