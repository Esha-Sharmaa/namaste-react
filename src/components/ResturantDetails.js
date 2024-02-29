import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import delivery from "../../images/png/Delivery_fee_new_cjxumu.avif";
import ResturantCategory from "./ResturantCategory";
const ResturantDetails = () => {
    const { resID } = useParams();
    const [resInfo, setResinfo] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchResData();
    }, []);
    const fetchResData = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2124007&lng=78.1772053&restaurantId=${resID}`);
            const json = await data.json();
            setResinfo(json?.data);
            setLoading(false);
        } catch (e) {
            console.log("error is " + e);
            setLoading(false);
        }
    };

    if (loading) return <Shimmer />
    const { id, name, cloudinaryImageId, areaName, costForTwoMessage, cuisines, feeDetails, avgRating, totalRatings, String, sla } = resInfo?.cards[0]?.card?.card?.info;
    const recommendedCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const categories = recommendedCards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");  ;
    return (
        <div className="w-6/12 mx-auto mt-6">
            <div className="border-gray-300 border-b border-dashed py-6">
                <p className="text-[1.43rem] font-semibold mb-2"> {name}</p>
                <p className="text-sm font-light "> {cuisines.join(", ")}</p>
                <p className="text-sm font-light "> {areaName}</p>
                <div className="flex gap-2 mt-3">
                    <img src={delivery} alt="delivery" />
                    <p className="text-sm font-light "> {feeDetails.message}</p>
                </div>
            </div>
            <div className="mt-6"> 
                    {
                        categories.map((cat) => <ResturantCategory key={cat?.card?.card?.title } data={cat?.card?.card} />)
                    }
            </div>
        </div>
    )
}

export default ResturantDetails;