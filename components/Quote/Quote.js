'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Quote.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faAppStore,
  faGooglePay
} from "@fortawesome/free-brands-svg-icons";

const quoteImg = "/img/img5.png";

export default function Quote() {
  const formRef = useRef(null);
  const contentRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", requirement: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: '', text: '' }); // Clear any previous messages

    try {
      const response = await fetch('/api/freeLesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatusMessage({ type: 'success', text: 'Your request has been submitted successfully!' });
        setFormData({ name: "", email: "", requirement: "", message: "" });
      } else {
        setStatusMessage({ type: 'error', text: data.message || 'Failed to submit. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatusMessage({ type: 'error', text: 'An error occurred. Please try again later.' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide} ref={contentRef}>
        {/* <div className={styles.imageContainer}>
          <img src={quoteImg} alt="Guitar" className={styles.wideImage} />
        </div> */}
        <h2 className={styles.heading}>Drive More Traffic. Get More  <span>L</span>eads.  <span>I</span>ncrease  <span> S</span>ales. </h2>
        <p className={styles.text}>We help businesses dominate search results and grow their digital presence. Our SEO experts use 
          cutting-edge strategies to optimize your website, improve rankings, and drive targeted traffic that converts.</p>
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebookF} className={styles.icon} /></a>
          <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} className={styles.icon} /></a>
          <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className={styles.icon} /></a>
        </div>
        <div className={styles.appStyle}>
          <a href="#"><FontAwesomeIcon icon={faAppStore} className={styles.appIcon} /></a>
           <a href="#"><FontAwesomeIcon icon={faGooglePay} className={styles.appIcon} /></a>

        </div>
      </div>

      <div className={styles.rightSide} ref={formRef}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h3 className={styles.formHeading}>Request for a Complimentary Quote</h3>

          <div className={styles.formGroup}>
           <label> <p> Name</p></label>
            <input type="text" name="name" className={styles.input} value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label> <p>Email </p></label>
            <input type="email" name="email" className={styles.input} value={formData.email} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label> <p>Requirement </p></label>
            <select name="requirement" className={styles.select} value={formData.requirement} onChange={handleChange} required>
              <option value="">  <p>Select an option  </p></option>
              <option value="online">  <p>Web Design </p></option>
              <option value="online">  <p>Social Media Marketing </p></option>
              <option value="in-person">  <p>PPC (Google Ads) </p></option>
            </select>
          </div>
          <div className={styles.formGroup}>
            <label> <p>Message </p></label>
            <textarea name="message" className={styles.textarea} rows="4" value={formData.message} onChange={handleChange} required></textarea>
          </div>

          <button className={styles.button} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Get Quote'}
          </button>

          {/*  Message below form */}
          {statusMessage.text && (
            <p
              className={`${styles.statusMessage} ${
                statusMessage.type === 'success' ? styles.success : styles.error
              }`}
            >
              {statusMessage.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
