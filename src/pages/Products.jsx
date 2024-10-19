import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import FoodLister from "../components/FoodLister";
import styles from "./Products.module.css";
import UBasket from "../components/UBasket";

function Products({ foodList, handleFoodAdd, userFoods, total, setTotal }) {
  const location = useLocation();
  const [data, setData] = useState(location.state || 1);

  const [newFoodList, setNewFoodList] = useState([]);

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
    <div className={styles.Products}>
      <Navbar></Navbar>
      <Services setData={setData} />
      <FoodLister
        foodList={newFoodList}
        handleFoodAdd={handleFoodAdd}
        data={data}
      />
      <UBasket userFoods={userFoods} total={total} setTotal={setTotal} />
    </div>
  );
}

export default Products;
