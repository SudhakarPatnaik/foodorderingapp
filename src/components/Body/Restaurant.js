import { useEffect, useState } from "react";
import star from "../../assets/preview.jpg";
import { Link } from "react-router-dom";

const Restaurant = (props) => {

    const navigateToFoodDetails = (link) => {

    }


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
        </div>
    );
}

export default Restaurant;