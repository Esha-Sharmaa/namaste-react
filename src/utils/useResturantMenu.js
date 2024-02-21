import { MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useResturantMenu = (resID) => {
    const [resInfo, setResinfo] = useState(null);
    useEffect(() => {
        fetchResData();
    }, []);
    const fetchResData = async () => {
        try {
            const data = await fetch(MENU_API + resID);
            const json = await data.json();
            setResinfo(json?.data);
        } catch (e) {
            console.log("error is " + e);
        }

    };
    return resInfo;
}
export default useResturantMenu;