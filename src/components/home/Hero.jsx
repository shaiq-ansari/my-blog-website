import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.overlay}></div> {/* Overlay for opacity */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Welcome to CodeCanvas</h1>
        <p className={styles.heroSubtitle}>
          Stay updated with the latest articles on Software Development, App Development, Web Development and more!
        </p>
        <a href="/blogs" className={styles.ctaButton}>
          Explore Blogs
        </a>
      </div>
    </section>
  );
};

export default Hero;
