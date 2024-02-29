import CategoryItemsList from "./CategoryItemsList";
const ResturantCategory = ({ data }) => {
    const { title, itemCards } = data;
    return (
        <div>
            <div className=" my-4 flex justify-between py-4">
                <span className="text-lg font-semibold "> {title} ({itemCards.length})</span>
                <span> &darr; </span>
            </div>
            <div> 
                {
                    itemCards.map(item => <CategoryItemsList key={item?.card?.info?.id} resData={item?.card?.info}/>)
                }
            </div>
        </div>
    )
}
export default ResturantCategory;