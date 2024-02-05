import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import ResturantCategory from "./ResturantCategory";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const ResturantMenu = () => {
    const {resID} = useParams();
    const [resInfo, setResinfo] = useState(null);
    useEffect(() => {
        fetchResData();
    }, []);
    const fetchResData = async () => {
        try {
            const data = await fetch(MENU_API + resID);
            const json = await data.json();
            console.log(json.data);
            setResinfo(json?.data);
            console.log("resInfo is :" + resInfo);
        } catch (e) {
            console.log("error is " + e);
        }

    };

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