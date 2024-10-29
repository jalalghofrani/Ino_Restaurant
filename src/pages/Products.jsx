import Navbar from "../components/Navbar";
import Services from "../components/Services";
import FoodLister from "../components/FoodLister";
import styles from "./Products.module.css";
import UBasket from "../components/UBasket";

function Products() {
  return (
    <div className={styles.Products}>
      <Navbar></Navbar>
      <Services />
      <FoodLister />
      <UBasket />
    </div>
  );
}

export default Products;
