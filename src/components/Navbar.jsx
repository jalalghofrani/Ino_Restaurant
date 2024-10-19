import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showMenu && !event.target.closest(".Nav_ul_div2, .menu")) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className={styles.Nav}>
      <ul className={styles.Nav_ul}>
        <li>
          <div className={styles.Nav_ul_div}>
            <div className={styles.Nav_ul_div_back}></div>
            <button className={styles.Nav_ul_back_button}></button>
          </div>
        </li>
        <li className={styles.Nav_ul_li}>
          <h3>شایان شاندیز</h3>
          <img
            src="https://cdn.topmenumarket.com/storage/provider/11/conversions/logo/ArdDNVqceoP4lPvpLOajTQCIpYFLffhIjBfIW3Og-logo.webp"
            alt="logo"
          ></img>
        </li>
        <li className={styles.threedot}>
          <div className={styles.Nav_ul_div2}>
            <button
              className={styles.Nav_ul_button}
              onClick={() => toggleMenu()}
            ></button>
          </div>
          {showMenu && (
            <div className={styles.menu}>
              <a href="#"> سفارشات من</a>
              <a href="#">درباره این مجموعه</a>
              <a href="#">درباره تاپ منو مارکت</a>
              <a href="#">وارد شوید </a>
            </div>
          )}
        </li>
      </ul>
      <div>
        <a></a>
        <a></a>
      </div>
    </div>
  );
}

export default Navbar;
