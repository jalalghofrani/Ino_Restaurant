import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PostContext = createContext();

function PostProvider({ children }) {
  const BASE_URL = "http://localhost:3000";
  const [isLoading, setIsLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);
  const [userFoods, setUserFoods] = useState([]);
  const [total, setTotal] = useState(0);
  const location = useLocation();
  const [data, setData] = useState(location.state ? location.state : 1);
  const [newFoodList, setNewFoodList] = useState([]);

  const handleFoodAdd = (food) => {
    setUserFoods([...userFoods, food]);
  };
  useEffect(function () {
    async function fetchFoodList() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/foodList`);
        const fData = await res.json();
        setFoodList(fData);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchFoodList();
  }, []);

  return (
    <PostContext.Provider
      value={{
        foodList,
        userFoods,
        handleFoodAdd,
        total,
        setTotal,
        setFoodList,
        data,
        setData,
        newFoodList,
        setNewFoodList,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside of the PostProvider");
  return context;
}

export { PostProvider, usePosts };
