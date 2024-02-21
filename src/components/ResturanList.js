import { useState, useEffect} from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LIST_API } from "../utils/constants";
const ResturantList = () => {
    const [searchText, setSearchText] = useState("")
    const [resturantList, setResturantList] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    console.log(resturantList);
    const fetchData = async () => {
        try {
            const data = await fetch(LIST_API);
            const json = await data.json();
            //  optional chaning
            fetchedData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setResturantList(fetchedData); 
            setFilteredResturant(fetchedData);
        } catch (e) {
            console.log(e);
        }   
    } 
    useEffect(() => {
        fetchData();
    },[]);
   
    const cards = <>
        <div className="search-container">
            <input
                className="search"
                type="text"
                placeholder="kiya khana hai batao"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
            />
            <button
                onClick={() => {
                   const filtered =  resturantList.filter((restaurant) =>
                        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredResturant(filtered)
                }} >
                search
            </button>
        </div>
        <button
            className="filter-btn"
            onClick={() => {
            const filtered = resturantList.filter((resturant) => resturant.info.avgRating > 4)
                setFilteredResturant(filtered);
            }}>
            Filter Top Resturant
        </button>
        <div className="title"> <h2 > Restaurants With Online in Gwalior</h2></div>
        <div className="resturant-list">
            {
                filteredResturant.map((resturant) => <Link key={resturant.info.id} to={`/resturantMenu/${resturant.info.id}`}> <ResturantCard  resData={resturant.info} /></Link>)
            }
        </div>
    </>
    if (!useOnlineStatus()) return <h1> Looks like you are offline. Please check your internet Connection 🙏🏽</h1>;
    return resturantList.length ? cards : <Shimmer />;
}
export default ResturantList;