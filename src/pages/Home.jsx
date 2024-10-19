import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.Home}>
      <Navbar />
      <Categories />
    </div>
  );
}

export default Home;
