import { RES_CDN_URL } from "../utils/constants";

const CategoryItemsList = ({ resData }) => {
        const { name, description, imageId, price, defaultPrice} = resData;
    return (
        <div className="flex justify-between mb-8 border-b border-gray-300 pb-4">
            <div className=""> 
                <h3 className="text-lg font-semibold"> {name} </h3>
                <span> &#8377;{(price?price:defaultPrice) / 100}</span>
                <p className="text-md text-gray-400 font-extralight"> {description}</p>
            </div>
            <div className="img-container"> 
                <img className="w-[118px] h-24 rounded-xl object-cover" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`} />
            </div>
        </div>
        )
}
export default CategoryItemsList;