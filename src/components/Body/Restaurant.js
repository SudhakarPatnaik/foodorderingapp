import { useEffect, useState, useRef } from "react";
import star from "../../assets/preview.png";
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
                <div className="res-card" style={{ backgroundColor: "#573b8a", background: "url(https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38)", boxShadow: "5px 20px 50px #000" }}>
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
        </div>
    );
}

export default Restaurant;