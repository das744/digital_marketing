import React from "react";
import styles from "./About.module.css";
import { FaMusic } from "react-icons/fa";

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        {/* Image Side */}
        <div className={styles.imageWrapper}>
          <img
            src="/img/about.jpg"
            alt="About Us"
            className={styles.aboutImage}
          />
          <div className={styles.iconCircle}>
            <FaMusic />
          </div>
        </div>

        {/* Text Side */}
        <div className={styles.textWrapper}>
          <h2 className={styles.heading}>About Us</h2>
          <p className={styles.description}>
          At MGL, we are passionate about helping businesses succeed online. Founded with the mission to make SEO accessible and results-driven, we 
          combine creativity with data to deliver strategies that work.
          </p>
          <p className={styles.description}>
           Whether you are a small business or an enterprise, our team is dedicated to 
           helping you achieve sustainable growth through ethical and effective SEO practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
