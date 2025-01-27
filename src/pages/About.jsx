import React from "react";
import styles from "./About.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        {/* About Section */}
        <section className={styles.aboutSection}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.subtitle}>
            Learn more about our journey, vision, and team.
          </p>
        </section>

        {/* Our Vision */}
        <section className={styles.visionSection}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p className={styles.text}>
            At CodeCanvas, we aim to make learning programming more
            accessible and enjoyable. Our platform provides high-quality coding
            resources, tutorials, and projects to help developers thrive in their
            careers.
          </p>
        </section>

        {/* Our Mission */}
        <section className={styles.missionSection}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p className={styles.text}>
            Our mission is to empower learners of all levels by providing
            hands-on, real-world coding challenges. We want to foster a global
            community of developers who continuously grow, learn, and contribute
            to the tech ecosystem.
          </p>
        </section>

        {/* Team */}
        <section className={styles.teamSection}>
          <h2 className={styles.sectionTitle}>Meet the Team</h2>
          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <img
                src="about/john.webp"
                alt="Team Member 1"
                className={styles.teamImage}
              />
              <p className={styles.memberName}>John Doe</p>
              <p className={styles.memberRole}>CEO</p>
            </div>

            <div className={styles.teamMember}>
              <img
                src="about/jane.webp"
                alt="Team Member 2"
                className={styles.teamImage}
              />
              <p className={styles.memberName}>Jane Smith</p>
              <p className={styles.memberRole}>Lead Developer</p>
            </div>

            <div className={styles.teamMember}>
              <img
                src="about/david.webp"
                alt="Team Member 3"
                className={styles.teamImage}
              />
              <p className={styles.memberName}>David Brown</p>
              <p className={styles.memberRole}>UX/UI Designer</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
