import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { MdStars } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";

const RestaurantMenu = () => {
  const { id } = useParams();

  // const [restaurant, setRestaurant] = useState(null);

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // async function getRestaurantInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.29844139999999&lng=77.99313599999999&restaurantId=" + id
  //   );
  //   const json = await data.json();
  //   console.log(json.data);
  //   setRestaurant(json);
  // }

  // const handleItem = () => {
  //   dispatch(addItem("Grapes"));
  // };

  const restaurant = useRestaurant(id);

  // const [restaurants, menuItems] = Body;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu">
      <div className="restaurant-summary">
        <img
          className="restaurant-img"
          src={
            IMG_CDN_URL +
            restaurant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId
          }
        />

        <div className="restaurant-summary-details">
          {/* <h1>Restaurant id: {id}</h1> */}
          <h2 className="restaurant-title">
            {restaurant?.data?.cards[0]?.card?.card?.info?.name}
          </h2>
          <h2 className="restaurant-tags">
            {restaurant?.data?.cards[0]?.card?.card?.info?.cuisines}
          </h2>
        </div>

        <div className="restaurant-details">
          <div className="restaurant-rating">
            <h3 className="main-rating-cart">
              {" "}
              <MdStars className="avgrating" />
              {restaurant?.data?.cards[0]?.card?.card?.info?.avgRating}
              
            </h3>
            <h3 className="total-rating">
              {restaurant?.data?.cards[0]?.card?.card?.info?.totalRatingsString}
            </h3>
            
          </div>

          <div className="restaurant-rating-slash"></div>
          {/* <div>{restaurant?.sla?.slaString}</div> */}

          <h3 className="delivery-price">
            {restaurant?.data?.cards[0]?.card?.card?.info?.feeDetails
              ?.totalFee / 100}
            <h3 className="delivery-charges">Delivery Charges</h3>
          </h3>
          {/* <h3 className="delivery-charges">Delivery Charges</h3> */}
          <div className="restaurant-rating-slash"></div>
          {/* <div>{restaurant?.costForTwoMessage}</div> */}
          <h3>
            {restaurant?.data?.cards[0]?.card?.card?.info?.costForTwo / 100}
            <h3>Cost for two</h3>
          </h3>
        </div>
      </div>

      <div className="restaurant-menu-content">
        <div className="menu-items-container">
          <div className="menu-title-wrap">
            {/* <h3 className="menu-title">Menu</h3> */}

            {/* <p className="menu-count">{menuItems.length} ITEMS</p> */}
          </div>
          <div className="main-menu-list">
            <div className="menu-items-list">
              <ul>
                <p className="menu-count">
                  Recommended (
                  {
                    Object.values(
                      restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap
                        ?.REGULAR?.cards[1]?.card?.card?.itemCards
                    ).length
                  }
                  )
                </p>
                {/* <div className="menu-top-line"></div> */}
                {Object.values(
                  restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
                    ?.cards[1]?.card?.card?.itemCards
                ).map((itemCards) => (
                  <li
                    className="menu-list-heading"
                    key={itemCards?.card?.info?.id}
                  >
                    <div className="menu-top-line"></div>
                    {itemCards?.card?.info?.name}{" "}
                    <p className="real-amt">
                      {" "}
                      <LiaRupeeSignSolid className="amt-icon" />{" "}
                      {Math.floor(itemCards?.card?.info?.price / 100)}
                    </p>
                    <div className="menu-images">
                      <img
                        key={itemCards?.card?.info?.id}
                        className="menu-item-img"
                        src={IMG_CDN_URL + itemCards?.card?.info?.imageId}
                        alt={itemCards?.card?.info?.name}
                      />
                      <button
                        className="menu-btn p-1 "
                        onClick={() => addFoodItem(itemCards?.card)}
                      >
                        ADD
                      </button>

                      {/* <div className="menu-line"></div> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
      <h3>{restaurant?.data?.cards[0]?.card?.card?.info?.city}</h3> */}

      {/* <div>
        <button className="p-2 m-5 bg-green-100" onClick={() => handleItem()}>
          Add Item
        </button>
      </div> */}
      {/* <div> */}
      {/* {console.log(Object.values(restaurant.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card.info.name))} */}
      {/* <h4>{(restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name)}</h4> */}
      {/* </div> */}
    </div>
  );
};

export default RestaurantMenu;
