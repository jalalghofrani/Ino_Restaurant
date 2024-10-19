import { Link } from "react-router-dom";
import styles from "./Categories.module.css";

function Categories() {
  return (
    <div className={styles.category}>
      <Link
        to={{ pathname: "products", state: 1 }}
        className={`${styles.services} ${styles.backg1}`}
      >
        غذاها به همراه سرویس کامل شاندیز
      </Link>
      <Link
        to={{ pathname: "products", state: 2 }}
        className={`${styles.services} ${styles.backg2}`}
      >
        غذاها بدون سرویس
      </Link>
      <Link
        to={{ pathname: "products", state: 3 }}
        className={`${styles.services} ${styles.backg3}`}
      >
        سرویس ها و مخلفات
      </Link>
    </div>
  );
}

export default Categories;
