import {CDN_URL} from "../utils/constants";
const ResturantCard = (props) => {
    const { name, cloudinaryImageId, locality, cuisines, avgRatingString, sla } = props?.resData;
    return (
        <div className="restaurant-card">
            <img className="restaurant-image" src={CDN_URL + cloudinaryImageId} alt="Restaurant Image" />
            <div className="restaurant-details">
                <h4 className="restaurant-name">{name}</h4>
                <span className="rating">★ {avgRatingString}</span>
                <span className="delivery-time">  {sla.slaString}</span>
                <p className="additional-info"> {cuisines.join(", ")}</p>
                <p className="additional-info"> {locality}</p>
            </div>
        </div>
    )
}
export default ResturantCard;