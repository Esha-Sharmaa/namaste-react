import { RES_CDN_URL } from "../utils/constants";

const ResturantCategory = (props) => {
    const { name, description, imageId,defaultPrice,} = props?.resData;
    return (
        <div className="res-category">
            <div className="details"> 
                <h3 className="title"> {name} </h3>
                <span className="rupee"> &#8377;{defaultPrice / 100}</span>
                <p className="des"> {description}</p>
            </div>
            <div className="img-container"> 
                <img src={ RES_CDN_URL + imageId} />
            </div>
        </div>
    )
}
export default ResturantCategory;