import React from "react";
import styles from "./Feature.module.css";
import { FaRocket, FaMobileAlt, FaLock, FaUsers } from "react-icons/fa";

const featureData = [
  {
    id: 1,
    icon: <FaRocket />,
    title: "Fast Performance",
    description: "Experience lightning fast load times and smooth interactions.",
  },
  {
    id: 2,
    icon: <FaMobileAlt />,
    title: "Mobile Friendly",
    description: "Optimized for all devices to give a seamless experience.",
  },
  {
    id: 3,
    icon: <FaLock />,
    title: "Secure Platform",
    description: "Your data is protected with the latest security measures.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    title: "User Focused",
    description: "Designed with your needs and preferences in mind.",
  },
];

const FeatureSection = () => {
  return (
    <section className={styles.featureSection}>
      <div className={styles.container}>
        {/* Feature List */}
        <div className={styles.features}>
          {featureData.map((feature) => (
            <div key={feature.id} className={styles.featureBox}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Heading on Right Side */}
        <div className={styles.heading}>
          <h2>Why Choose Us</h2>
          <p>With years of proven experience, a dedicated team of SEO specialists, and a track record of delivering measurable results, we’re not just another agency. We’re your growth partner. Our transparent approach ensures you always know what is happening, why it matters, and how it impacts your business.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
