import CDN_URL from "../utils/constants";
const ResturantCard = (props) => {
    const { name, cloudinaryImageId, locality, cuisines, avgRatingString, sla } = props?.resData;
    return (
        <div class="restaurant-card">
            <img class="restaurant-image" src={CDN_URL + cloudinaryImageId} alt="Restaurant Image" />
            <div className="restaurant-details">
                <h4 class="restaurant-name">{name}</h4>
                <span class="rating">★ {avgRatingString}</span>
                <span class="delivery-time">  {sla.slaString}</span>
                <p className="additional-info"> {cuisines.join(", ")}</p>
                <p className="additional-info"> {locality}</p>
            </div>
        </div>
    )
}
export default ResturantCard;