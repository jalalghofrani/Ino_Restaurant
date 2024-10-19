import styles from "./Food.module.css";
import { useState } from "react";

function Food({ name, engName, ingridiants, img, price, handleFoodAdd, fid }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    handleFoodAdd({ name, engName, ingridiants, img, fid, price });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <li className={styles.Food}>
      <div className={styles.Food_Fdiv}>
        <img src={img} className={isAdded ? styles.shake : ""} />
        <button
          className={styles.addButton}
          onClick={() => handleAdd()}
          disabled={isAdded}
        >
          {isAdded ? "اضافه شده" : "+ اضافه کردن"}
        </button>
      </div>
      <div className={styles.Food_Sdiv}>
        <h3 style={{ backgroundColor: "inherit" }}>{name}</h3>
        <h4>{engName}</h4>
        <p style={{ color: "#a8a8b1" }}>{ingridiants}</p>

        <p className={styles.price}>{price} تومان</p>
      </div>
    </li>
  );
}

export default Food;
