const Recommendations = (props) => {

    return (

        <div className="res-container">
            {props.recommendations && props.recommendations.map((recommendation) => (
                <div className="recom-card">
                    <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/" + recommendation.imageId} />
                </div>
            ))
            }
        </div>
    )
}

export default Recommendations;