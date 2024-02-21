import Shimmer from "./Shimmer";
import ResturantCategory from "./ResturantCategory";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";


const ResturantMenu = () => {
    const { resID } = useParams();
    const resInfo = useResturantMenu(resID);

    if(resInfo === null) return <Shimmer/>
    const { name, cloudinaryImageId, areaName, costForTwoMessage, cuisines, feeDetails, avgRatingString, sla } = resInfo?.cards[0]?.card?.card?.info;

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards;
    console.log(itemCards);
    return (
        <div className="menu">
            <p> {name}</p>
            <p> {cuisines.join(", ")}</p>
            <p> {areaName}</p>
            <p> {feeDetails.message}</p>
            <div className="recommended"> 
                <h1> recommended </h1>
                {
                    itemCards.map((item) => <ResturantCategory key={item.card.info.id} resData={item.card.info} />)
                }
            </div>
        </div>
    )
}

export default ResturantMenu;