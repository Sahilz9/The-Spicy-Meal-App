import { IMG_CDN_URL } from "../Constants";
import { MdStars } from "react-icons/md";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  aggregatedDiscountInfoV3
}) => {
  const discountHeader = aggregatedDiscountInfoV3?.header || "";

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h3 className="heading-name pt-2 text-lg text-slate-900	">{name}</h3>
      <p className="main-rating">
        <MdStars className="rating-star" />
        <h4 className="card-rating">{avgRating}</h4>
      </p>
      <h3 className="card-cuisines">{cuisines.join(", ")}</h3>
      <h4 className="discount">{discountHeader}</h4>
    </div>
  );
};

export default RestaurantCard;
