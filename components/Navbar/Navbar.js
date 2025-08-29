

// "use client";

// import styles from "./Navbar.module.css";

// const Navbar = () => {


//   return (
//     <nav className={styles.navbar}>
//       {/* Left Side */}
//       <div className={styles.navbarLeft}>
//         <div className={styles.logo}>MGL</div>
//         <div className={styles.navLinks}>
//           <a href="#about" className="nav-item"> About</a>
//           <a href="#services" className="nav-item"> Services</a>
//           <a href="#feature" className="nav-item"> Feature</a>
//         </div>
//       </div>
//         {/* Sparkle Icon */}
//         <div className="sparkleIcon">✨</div>

//       {/* Right Side */}
//       <div className={styles.navbarRight}>
//         <div className={styles.connect}>
//           <a href="#contact" className="nav-item"> Contact</a>
//         </div>
//         <a href="#contact"> <button className={styles.getQuote}>Get Free Lesson</button></a>  
//       </div>

    
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      {/* Left: Logo */}
      <div className={styles.logo}>MGL</div>

      {/* Middle: Nav Links (desktop only) */}
      <div className={styles.navLinksDesktop}>
        <a href="#about" className={styles.navItem}>About</a>
        <a href="#services" className={styles.navItem}>Services</a>
        <a href="#feature" className={styles.navItem}>Feature</a>
        <a href="#contact" className={styles.navItem}>Contact</a>
      </div>

      {/* Right: Get Quote Button (desktop only) */}
      <div className={styles.navbarRight}>
        <a href="#contact">
          <button className={styles.getQuote}>Get Free Lesson</button>
        </a>
      </div>

      {/* Mobile Controls: Hamburger + Button */}
      <div className={styles.mobileControls}>
        <div className={styles.hamburger} onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </div>
        <a href="#contact">
          <button className={styles.getQuote}>Get Free Lesson</button>
        </a>
      </div>

      {/* Fullscreen Dropdown Menu (mobile only) */}
      {isOpen && (
        <div className={styles.overlayMenu}>
          <a href="#about" className={styles.menuLink} onClick={closeMenu}>About</a>
          <a href="#services" className={styles.menuLink} onClick={closeMenu}>Services</a>
          <a href="#feature" className={styles.menuLink} onClick={closeMenu}>Feature</a>
          <a href="#contact" className={styles.menuLink} onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
