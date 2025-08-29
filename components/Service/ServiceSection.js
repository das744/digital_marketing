import React from "react";
import styles from "./ServiceSection.module.css";

import { FaSearch, FaPenNib, FaLink, FaBullhorn } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        {/* Left side heading */}
        <div className={styles.heading}>
          <h2>Our Services</h2>
          <p>
           From keyword research and on-page optimization to link building and content marketing, 
           our tailored SEO services are designed to boost visibility and maximize ROI. We don’t believe in “one-size-fits-all.” Instead, we customize solutions based on your industry, audience, and goals.
          </p>
        </div>

        {/* Right side service grid */}
        <div className={styles.serviceGrid}>
          <div className={styles.serviceBox}>
            <div className={styles.icon}>
            <FaSearch />
            </div>
            <h3>Keyword Research</h3>
            <p>We identify high-traffic, low-competition keywords that align with your business goals.</p>
          </div>

          <div className={styles.serviceBox}>
            <div className={styles.icon}>
              <FaPenNib />
            </div>
            <h3>Content Optimization</h3>
            <p>Improve your on-page content with targeted keywords and engaging copy to rank higher.</p>
          </div>

          <div className={styles.serviceBox}>
            <div className={styles.icon}>
              <FaLink />
            </div>
            <h3>Link Building</h3>
            <p>Boost domain authority through high-quality backlinks from trusted websites.</p>
          </div>

          <div className={styles.serviceBox}>
            <div className={styles.icon}>
              <FaBullhorn />
            </div>
            <h3>Local SEO</h3>
            <p>Enhance visibility in local search results with optimized Google Business Profiles.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
