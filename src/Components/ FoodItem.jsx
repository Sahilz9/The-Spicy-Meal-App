import { IMG_CDN_URL } from "../Constants";
import { PiCurrencyInrDuotone } from "react-icons/pi";

const FoodItem = ({ name, description, imageId, price }) => {
  return (
    <div className="foodItemContainer">
      <div className="foodItem">
        <h3 className="cart-items-name font-bold py-4 text-sm">
          {name}
          <h3 className="cuisines">
            {description}{" "}
            <h4 className="rating">
              {" "}
              <PiCurrencyInrDuotone className="cart-price" /> {price / 100}{" "}
            </h4>
          </h3>
        </h3>
        <img className="foodItemImg" src={IMG_CDN_URL + imageId} />
        {/* <h4 className="areaname">{areaName}</h4> */}
      </div>
    </div>
  );
};

export default FoodItem;
