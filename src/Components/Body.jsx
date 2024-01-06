import { useEffect, useState } from "react";
import { restaurantList } from "../Constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //Updating the restaurantList
  const [searchText, setsearchText] = useState(""); //Return  an Array return = [variable name, function to update the value]

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6304203&lng=77.21772159999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    //https://thingproxy.freeboard.io/fetch/
    const json = await data.json();
    console.log(json);

    setAllRestaurants(
      //Optional Chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      //Optional Chaining
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // console.log("render()");

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Check your Internet Connection</h1>;
  }

  //Early return (Not rendering the components)
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0) return <h2>no result found....</h2>;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/* Search input  */}
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value); //setsearchText-> updating the variable
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //Filter the data
            const data = filterData(searchText, allRestaurants);
            //Update the state - restaurants
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="body">
        {/* Whatever you've passes in this attribute is called as props in React */}
        {/* React wraps up all the properties that've mention below */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
        {/* <RestaurantCard {...restaurantList[1].info} />
        <RestaurantCard {...restaurantList[2].info} />
        <RestaurantCard {...restaurantList[0].info} /> */}
      </div>
    </>
  );
};

export default Body;
