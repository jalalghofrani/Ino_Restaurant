import styles from "./Services.module.css";
import { usePosts } from "./PostProvider";

function Services() {
  const { setData, data } = usePosts();

  return (
    <ul className={styles.Services}>
      <li
        className={styles.Services_li}
        onClick={() => {
          setData(1);
        }}
      >
        <img
          src="https://cdn.topmenumarket.com/storage/category/91/thumbnail/y9jFpeAdM2a4rlPaLczP748Xds77aH0FiewQiDxM.png"
          alt="foodWS"
          className={data === 1 ? styles.activeImage : ""}
        />
        <h6> غذاها به همراه سرویس کامل شاندیز</h6>
      </li>
      <li
        className={styles.Services_li}
        onClick={() => {
          setData(2);
        }}
      >
        <img
          src="https://cdn.topmenumarket.com/storage/category/92/conversions/thumbnail/UimuvGQt7XIOSQFl6nygy6AcX7ew4bbYUhitT5wQ-thumbnail.webp"
          alt="foodNS"
          className={data === 2 ? styles.activeImage : ""}
        />
        <h6>غذاها بدون سرویس</h6>
      </li>
      <li
        className={styles.Services_li}
        onClick={() => {
          setData(3);
        }}
      >
        <img
          src="https://cdn.topmenumarket.com/storage/category/93/conversions/thumbnail/x8i7RXheik0GuIMGhYCFa6o3iPNXYctY10F367ai-thumbnail.webp"
          alt="Services"
          className={data === 3 ? styles.activeImage : ""}
        />
        <h6> سرویس ها و مخلفات</h6>
      </li>
    </ul>
  );
}

export default Services;
