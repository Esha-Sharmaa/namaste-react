import { CDN_URL_CAROUSEL } from "../utils/constants";
const CarouselItem = ({ dish, display}) => {
    return <>
            <img className={`w-36 ${display}`} src={CDN_URL_CAROUSEL + dish.imageId} />
        </>
}
export default CarouselItem;