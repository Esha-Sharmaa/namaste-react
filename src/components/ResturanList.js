import { useState, useEffect} from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const ResturantList = () => {
    const [searchText, setSearchText] = useState("")
    const [resturantList, setResturantList] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    console.log(resturantList);
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124007&lng=78.1772053&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
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
    }, []);
   
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
            const filteredResturant = resturantList.filter((resturant) => resturant.info.avgRating > 4)
            filteredResturant(filteredResturant);
            }}>
            Filter Top Resturant
        </button>
        <div className="title"> <h2 > Restaurants With Online in Gwalior</h2></div>
        <div className="resturant-list">
            {
                filteredResturant.map((resturant) => <ResturantCard key={resturant.info.id} resData={resturant.info} />)
            }
        </div>
    </>
    return resturantList.length ? cards : <Shimmer />;
}
export default ResturantList;