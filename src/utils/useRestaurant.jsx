import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json);
  }

  return restaurant;
};

export default useRestaurant;
