// components/Divider.js
"use client";

import { useEffect, useRef } from "react";
import styles from "./Divider.module.css";



const Divider = () => {
  const dividerRef = useRef(null);
  const buttonRef = useRef(null);

 


  return (
    <div ref={dividerRef} className={styles.splitBackground}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Enhance Your Workflow</h2>
        <button ref={buttonRef} className={styles.animatedBtn}>
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Divider;
