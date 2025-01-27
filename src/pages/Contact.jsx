import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Disable the button while processing
    setIsSubmitting(true);
    setStatusMessage('');
  
    // Access environment variables using import.meta.env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  
    // console.log("Service ID:", serviceId);
    // console.log("Template ID:", templateId);
    // console.log("User ID:", userId);
  
    try {
      // Send email using EmailJS
      const response = await emailjs.send(serviceId, templateId, formData, userId);
  
      console.log('SUCCESS!', response.status, response.text);
      setStatusMessage('Form submitted successfully ✅');
      setIsSuccess(true);
  
      // Clear form data after submission
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('FAILED...', err);
      setStatusMessage('Form Submission Failed ❌');
      setIsSuccess(false);
    } finally {
      // Re-enable the button and hide message after 3 seconds
      setTimeout(() => {
        setStatusMessage('');
      }, 3000);
      setIsSubmitting(false);
    }
  };
  
  
  return (
    <>
      <Navbar />
      <div className={styles.contactContainer}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We'd love to hear from you! Fill out the form below!</p>
        </header>

        <section className={styles.contactFormSection}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label htmlFor="name" className={styles.label}>
              Full Name
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </label>

            <label htmlFor="email" className={styles.label}>
              Email Address
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.inputField}
              />
            </label>

            <label htmlFor="message" className={styles.label}>
              Message
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.textareaField}
              />
            </label>

            <button
              type="submit"
              className={`${styles.submitButton} ${isSubmitting ? styles.disabledButton : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>

          {/* Status Message */}
          {statusMessage && (
            <div
              className={`${styles.statusMessage} ${
                isSuccess ? styles.success : styles.error
              }`}
            >
              {statusMessage}
            </div>
          )}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
