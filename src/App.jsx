import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import Products from "./pages/Products";
import PageNotFound from "./pages/PageNotFound";

const BASE_URL = "http://localhost:3000";

function App() {
  const [foodList, setFoodList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userFoods, setUserFoods] = useState([]);
  const [total, setTotal] = useState(0);

  const handleFoodAdd = (food) => {
    setUserFoods([...userFoods, food]);
  };
  console.log(userFoods);

  useEffect(function () {
    async function fetchFoodList() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/foodList`);
        const data = await res.json();
        setFoodList(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchFoodList();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="products"
          element={
            <Products
              foodList={foodList}
              userFoods={userFoods}
              handleFoodAdd={handleFoodAdd}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
