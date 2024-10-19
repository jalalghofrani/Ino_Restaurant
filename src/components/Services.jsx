import { NavLink } from "react-router-dom";
import styles from "./Services.module.css";
import { useState } from "react";

function Services({ setData }) {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <ul className={styles.Services}>
      <li
        className={styles.Services_li}
        onClick={() => {
          setData(1);
          setActiveImage(1);
        }}
      >
        <img
          src="https://cdn.topmenumarket.com/storage/category/91/thumbnail/y9jFpeAdM2a4rlPaLczP748Xds77aH0FiewQiDxM.png"
          alt="foodWS"
          className={activeImage === 1 ? styles.activeImage : ""}
        />
        <h6> غذاها به همراه سرویس کامل شاندیز</h6>
      </li>
      <li
        className={styles.Services_li}
        onClick={() => {
          setData(2);
          setActiveImage(2);
        }}
      >
        <img
          src="https://cdn.topmenumarket.com/storage/category/92/conversions/thumbnail/UimuvGQt7XIOSQFl6nygy6AcX7ew4bbYUhitT5wQ-thumbnail.webp"
          alt="foodNS"
          className={activeImage === 2 ? styles.activeImage : ""}
        />
        <h6>غذاها بدون سرویس</h6>
      </li>
      <li
        className={styles.Services_li}
        onClick={() => {
          setData(3);
          setActiveImage(3);
        }}
      >
        <img
          src="https://cdn.topmenumarket.com/storage/category/93/conversions/thumbnail/x8i7RXheik0GuIMGhYCFa6o3iPNXYctY10F367ai-thumbnail.webp"
          alt="Services"
          className={activeImage === 3 ? styles.activeImage : ""}
        />
        <h6> سرویس ها و مخلفات</h6>
      </li>
    </ul>
  );
}

export default Services;
