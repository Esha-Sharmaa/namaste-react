import { useState } from "react";
import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";

const ResturantList = () => {
    const [resturantList, setResturantList] = useState(resList);

    return (
        <>
            <button className="filter-btn" onClick={() => {
                const filteredResturant = resturantList.filter((resturant) => resturant.info.avgRating > 4)
                setResturantList(filteredResturant);
            }}> Filter Top Resturant </button>
            <div className="resturant-list">
                {
                    resturantList.map((resturant) => <ResturantCard key={resturant.info.id} resData={resturant.info} />)
                }
            </div>
        </>
    );
}
export default ResturantList;