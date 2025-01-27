import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksSection}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.links}>
            <li>
              <a href="/" className={styles.link}>Home</a>
            </li>
            <li>
              <a href="/blogs" className={styles.link}>Blogs</a>
            </li>
            <li>
              <a href="/about" className={styles.link}>About</a>
            </li>
            <li>
              <a href="/contact" className={styles.link}>Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.socialSection}>
          <h3 className={styles.heading}>Follow Us</h3>
          <ul className={styles.socialLinks}>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.link}>
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.link}>
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.link}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyRight}>
        &copy; {new Date().getFullYear()} Thank You
      </div>
    </footer>
  );
};

export default Footer;
