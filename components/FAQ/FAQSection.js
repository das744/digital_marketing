"use client";

import { useState } from "react";
import styles from "./FAQSection.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "Q1. How long does SEO take to show results?",
    answer:
      "SEO is a long-term strategy. Typically, you can start seeing noticeable improvements within 3–6 months, depending on competition and your website’s current condition.",
  },
  {
    id: 2,
    question: "Q2. Do you guarantee #1 ranking on Google?",
    answer:
      "No ethical agency can guarantee a #1 ranking. What we do guarantee is consistent improvements, higher visibility, and strategies that drive quality traffic and conversions.",
  },
  {
    id: 3,
    question: "Q3. How do you track SEO performance?",
    answer:
      "We provide monthly reports that cover keyword rankings, traffic growth, backlinks, and conversion metrics so you can clearly see the impact of our work.",
  },
  {
    id: 4,
    question: "Q4. Is SEO better than paid ads?",
    answer:
      "SEO builds long-term organic growth, while paid ads bring immediate visibility. We recommend combining both for maximum impact, but SEO is more cost-effective in the long run.",
  },
    {
    id: 5,
    question: "Q5. What industries do you specialize in?",
    answer:
      "We’ve worked with businesses across healthcare, e-commerce, technology, legal, real estate, and more. Our strategies are adaptable to any industry.",
  },
];

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.accordion}>
        {faqData.map((item) => (
          <div
            key={item.id}
            className={`${styles.accordionItem} ${
              activeId === item.id ? styles.active : ""
            }`}
          >
            <div
              className={styles.accordionHeader}
              onClick={() => toggleAccordion(item.id)}
            >
              <h3>{item.question}</h3>
              <span className={styles.icon}>
                {activeId === item.id ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            <div className={styles.accordionBody}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
