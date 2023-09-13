import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import downArrow from "../../assets/arrow-down.png";
import MenuCategory from "./MenuCategory";

const RestaurantMenuDetails = (props) => {

    const [restaurantMenuDetails, setRestaurantMenuDetails] = useState([]);
    const [showHideToggle, setShowHideToggle] = useState(false);
    const { resId } = useParams();

    useEffect(() => {
        getMenuDetails();
    }, [])

    const getMenuDetails = async () => {
        const menuDetails = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5294194&lng=78.47596720000001&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const menuDetailsJson = await menuDetails.json();

        const categories = menuDetailsJson?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item) =>
            item?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        setRestaurantMenuDetails(categories);
    }

    const toggleMenu = (toggle) => {
        setShowHideToggle(!toggle);
    }

    return (
        <div style={{ position: "absolute", height: "100%", width: "90%", margin: "50px" }}>
            {restaurantMenuDetails && restaurantMenuDetails.map((category) => (
                <MenuCategory category={category}></MenuCategory>
            ))
            }
        </div>
    );
}

export default RestaurantMenuDetails;