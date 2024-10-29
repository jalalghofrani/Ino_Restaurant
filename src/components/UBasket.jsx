import { useEffect, useState } from "react";
import styles from "./UBasket.module.css";
import { usePosts } from "./PostProvider";

function UBasket() {
  const [isExpanded, setIsExpanded] = useState(false);

  const { userFoods, total, setTotal, handleFoodRemove } = usePosts();

  const toggleBasket = () => {
    setIsExpanded(!isExpanded);
  };

  const calculateTotal = () => {
    let newTotal = 0;
    userFoods.forEach((food) => {
      newTotal += food.price;
    });
    setTotal(newTotal);
  };

  useEffect(() => {
    calculateTotal();
  }, [userFoods]);

  return (
    <div className={`${styles.Ubasket} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.basketIcon} onClick={toggleBasket}>
        🧺
      </div>

      {isExpanded && (
        <div className={styles.basketContent}>
          {userFoods.map((food, index) => (
            <div key={index} className={styles.foodItem}>
              <h1 className={styles.foodName}>{food.name}</h1>
              <h1 className={styles.foodPrice}>{food.price}</h1>
              <button
                className={styles.deleteButton}
                onClick={() => handleFoodRemove(food.name)}
              >
                ❌
              </button>
            </div>
          ))}
          <div className={styles.total}>
            <p>قابل پرداخت : {total}</p>
            <button className={styles.paymentButton}>پرداخت</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UBasket;
