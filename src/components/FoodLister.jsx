import Food from "./Food";

function FoodLister({ foodList, handleFoodAdd, data }) {
  return (
    <ul style={{ margin: "30px 10px" }}>
      {foodList.map((food, index) => (
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
