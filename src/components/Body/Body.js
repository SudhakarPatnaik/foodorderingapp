import { useEffect, useState } from "react";
import Restaurant from "./Restaurant";
import Recommendations from "./Recommendations";

const Body = () => {

    const [recommendationsObj, setRecommendationsObj] = useState(null);
    const [suggetionsObj, setSuggetionsObj] = useState(null);
    const [topRestaurantsObj, setTopRestaurantsObj] = useState(null);
    const [restaurantsObj, setRestaurantsObj] = useState(null);

    useEffect(() => {
        fetchDataFromServerandPrepareObjects();
    }, [])

    const fetchDataFromServerandPrepareObjects = async () => {
        const responseFromServer = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5294194&lng=78.47596720000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const response = await responseFromServer.json();
        if (response?.data?.cards) {
            prepareFoodInfo(response.data.cards);
        }
    }

    const prepareFoodInfo = (cards) => {
        let recommendations, suggetions, topRestaurants, restaurants = [];
        for (const card of cards) {
            if (card.card?.card.id === 'whats_on_your_mind') {
                suggetions = card.card.card.imageGridCards.info;
                console.log('suggetions : ' + suggetions.json);
                setSuggetionsObj(suggetions);
            } else if (card.card?.card.id === 'topical_banner') {
                recommendations = card.card.card.imageGridCards.info;
                console.log('recommendations : ' + recommendations.json);
                setRecommendationsObj(recommendations);
            } else if (card.card?.card.id === 'top_brands_for_you') {
                topRestaurants = card.card.card.gridElements.infoWithStyle.restaurants;
                console.log('topRestaurants : ' + topRestaurants.json);
                setTopRestaurantsObj(topRestaurants);
            } else if (card.card?.card.id === 'restaurant_grid_listing') {
                restaurants = card.card.card.gridElements.infoWithStyle.restaurants;
                console.log('restaurants : ' + restaurants.json);
                setRestaurantsObj(restaurants);
            }
        }
    }

    return (
        <div>
            {recommendationsObj &&
                <div>
                    <h1>Best offers for you</h1>
                    <Recommendations recommendations={recommendationsObj}></Recommendations>
                </div>}
            {topRestaurantsObj &&
                <div>
                    <h1>Top restaurant chains in Hyderabad</h1>
                    <Restaurant restaurants={topRestaurantsObj}></Restaurant>
                </div>}
            {restaurantsObj &&
                <div>
                    <h1>Restaurants with online food delivery in Hyderabad</h1>
                    <Restaurant restaurants={restaurantsObj}></Restaurant>
                </div>}
        </div>
    );
}
// recommendations  
export default Body;