import { useEffect, useState, useRef } from "react";
import star from "../../assets/preview.jpg";
import { Link } from "react-router-dom";

const Restaurant = (props) => {

    /* const intersectionObserver = new IntersectionObserver(entries => {
         if (entries.isIntersecting) { console.log("Trigger API to fetch more records"); return; }
         // load more content;
 
     },
         {
             root: null,
             rootMargin: "0px",
             threshold: 1.0
         }
     );
     if (document.getElementsByClassName(".more").length > 0) {
         console.log(" intersectionObserver.observe(document.getElementsByClassName");
         intersectionObserver.observe(document.getElementsByClassName(".more"));
     }*/

    const containerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    const callbackFunction = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {

            // fetchMoreRecords();
        }
    }

    const fetchMoreRecords = async () => {
        console.log("API triggered");
        const request =
        {
            "lat": 17.5294194,
            "lng": 78.47596720000001,
            "nextOffset": "COVCELQ4KIDI17Hdz9f7YDCnEw==",
            "widgetOffset": {
                "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                "Restaurant_Group_WebView_PB_Theme": "",
                "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
                "inlineFacetFilter": "",
                "restaurantCountWidget": ""
            },
            "filters": {},
            "seoParams": {
                "seoUrl": "https://www.swiggy.com/",
                "pageType": "FOOD_HOMEPAGE",
                "apiName": "FoodHomePage"
            },
            "page_type": "DESKTOP_WEB_LISTING",
            "_csrf": "zTcf1TCe904u-WIT3VGFmMHyh-9NGqpvbpFthvng"
        }
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;',
                /*':authority': 'www.swiggy.com',
                ':path': '/dapi/restaurants/list/update',
                ':scheme': 'https',
                '__fetch_req__': 'true',*/
                'Accept': '*/*',
                /*'Accept-Encoding': 'gzip, deflate, br',
                'Accept-Language': 'en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7',
                'Cache-Control': 'no-cache',
                'Content-Length': '524',*/
                'Content-Type': ' application/json'
            },
            body: JSON.stringify(request)
        }
        // Fake api for making post requests
        let fetchRes = fetch(
            "https://www.swiggy.com/dapi/restaurants/list/update",
            options);
        fetchRes.then(res =>
            res.json()).then(d => {
                console.log(d)
            })

    }

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }

    useEffect(() => {

        const observer = new IntersectionObserver(callbackFunction, options)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [containerRef, options])



    return (
        <div className="res-container">
            {props.restaurants && props.restaurants.map((restaurant) => (
                <div className="res-card">
                    <Link to={"/foodDetails/" + restaurant?.info?.id}>
                        <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant.info.cloudinaryImageId} />
                    </Link>
                    <div>{restaurant.info?.name}</div>
                    <div className="res-description">
                        <div style={{ fontWeight: "bolder" }}><img style={{ width: "13px", height: "13px" }} src={star} />{restaurant.info.avgRatingString}</div>
                        <div>{restaurant.info.cuisines.join(', ')}</div>
                        <div>{restaurant.info.areaName}</div>
                    </div>

                </div>
            ))
            }
            {!props.restaurants &&
                <div>Loading.......</div>
            }
            <div class="more" ref={containerRef}>lazy loading</div>
        </div>
    );
}

export default Restaurant;