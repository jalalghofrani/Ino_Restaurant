import { useEffect, useState } from "react";
import { usePosts } from "./PostProvider";
import styles from "./Food.module.css";

function FoodLister() {
  const { newFoodList, handleFoodAdd, data, foodList, setNewFoodList } =
    usePosts();
  useEffect(() => {
    switch (data) {
      case 1:
        setNewFoodList(
          foodList.filter((food) => food.category.includes("withService"))
        );

        break;
      case 2:
        setNewFoodList(
          foodList.filter((food) => food.category.includes("withoutService"))
        );

        break;
      case 3:
        setNewFoodList(
          foodList.filter((food) => food.category.includes("services"))
        );
        break;

      default:
        setNewFoodList(foodList);
    }
  }, [data, foodList]);

  return (
    <ul style={{ margin: "30px 10px" }}>
      {newFoodList.map((food, index) => (
        <Food
          key={index}
          name={food.name}
          engName={food.engName}
          img={food.img}
          ingridiants={food.ingridiants}
          handleFoodAdd={handleFoodAdd}
          price={data === 1 || data === 3 ? food.priceWS : food.priceNS}
          fid={food.id}
        />
      ))}
    </ul>
  );
}

export default FoodLister;
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
