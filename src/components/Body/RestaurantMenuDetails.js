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
        <div style={{ position: "absolute", height: "100%", width: "90%", margin: "50px", boxShadow: "5px 20px 50px #000", backgroundColor: "rgb(36, 36, 62)", borderRadius: "10px", background: "url(https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38)" }}>
            {restaurantMenuDetails && restaurantMenuDetails.map((category) => (
                <MenuCategory category={category}></MenuCategory>
            ))
            }
        </div>
    );
}

export default RestaurantMenuDetails;


