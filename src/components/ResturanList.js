import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LIST_API } from "../utils/constants";
import ResturantCard, { withClosedLabel } from "./ResturantCard";
import Shimmer from "./Shimmer";
import CarouselItem from "./Carousel ";

const ResturantList = () => {
    const [searchText, setSearchText] = useState("");
    const [resturantList, setResturantList] = useState([]);
    const [filteredResturant, setFilteredResturant] = useState([]);
    const [dishesList, setDishesList] = useState([]);
    const [topResturantList, setTopResturantList] = useState([]);
    const [loading, setLoading] = useState(true);
    const isOnline = useOnlineStatus();

    const ResturantCardClosed = withClosedLabel(ResturantCard);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(LIST_API);
                const { data } = await response.json();
                const { cards } = data;

                const dishes = cards[0]?.card?.card?.gridElements?.infoWithStyle?.info || [];
                const topResturant = cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
                const resturant = cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

                setResturantList(resturant);
                setFilteredResturant(resturant);
                setDishesList(dishes);
                setTopResturantList(topResturant);
                setLoading(false);
                console.log(resturantList);

            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        const filtered = resturantList.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredResturant(filtered);
    };

    const handleFilterTopRestaurants = () => {
        const filtered = resturantList.filter((restaurant) => restaurant.info.avgRating > 4);
        setFilteredResturant(filtered);
    };

    const renderCards = () => (
        <div className="w-10/12 mx-auto px-6">
            <div className=" border-gray-200 border-b-2">
                <div className="flex justify-between mt-8">
                    <h2 className="text-2xl font-bold"> What's on your mind? </h2>
                    <div>
                        <button className="text-4xl">  &#8592;</button>
                        <button className="text-4xl ml-8"> &#8594;</button>
                    </div>
                </div>
                <div className="flex gap-8 mb-8">
                    {
                        dishesList.map((dish, i) => <CarouselItem key={dish.id} dish={dish} display={i > 5? "hidden":"inline"} />)
                    }
                </div>
            </div>
            <div>
                <div className="flex justify-between mt-8">
                    <h2 className="text-2xl font-bold mb-8"> Top Restaurants Chain in Gwalior</h2>
                    <div>
                        <button className="text-4xl">  &#8592;</button>
                        <button className="text-4xl ml-8"> &#8594;</button>
                    </div>
                </div>
                <div className="flex gap-14 overflow-hidden">
                    {
                        topResturantList.map((resturant) => <Link key={resturant.info.id} to={`/resturantMenu/${resturant.info.id}`}> <ResturantCard resData={resturant.info} /></Link>)
                    }
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-4">Restaurants With Online food delivery in Gwalior</h2>
            <button
                className="text-sm font-light tracking-tight p-2 rounded-lg mb-4 border-2 border-solid bg-slate-50"
                onClick={handleFilterTopRestaurants}
            >
                Filter Top Restaurants
            </button>
            <div className="search-container">
                <input
                    className="search"
                    type="text"
                    placeholder="kiya khana hai batao"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="flex flex-wrap gap-16 justify-stretch">
                {filteredResturant.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={`/ResturantDetails/${restaurant.info.id}`}
                    >
                        {
                            restaurant.info.isOpen ? <ResturantCard resData={restaurant.info} /> : <ResturantCardOpened resData={restaurant.info} /> 
                        }
                        
                    </Link>
                ))}
            </div>
        </div>
    );

    if (!isOnline) return <h1>Looks like you are offline. Please check your internet Connection 🙏🏽</h1>;
    return loading ? <Shimmer /> : renderCards();
};

export default ResturantList;
