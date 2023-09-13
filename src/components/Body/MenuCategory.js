import { useState } from "react";
import downArrow from "../../assets/arrow-down.png";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cartSlice";
const MenuCategory = ({ category }) => {
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();

    const toggleMenuItems = () => {
        setToggle(!toggle);
    }

    const addToCart = (cardInfo) => {
        console.log(cardInfo);
        dispatch(addItem(cardInfo));
    }

    return (
        <div>
            <div onClick={toggleMenuItems} style={{ backgroundColor: "grey", display: "flex", flexWrap: "wrap", justifyContent: "space-between", margin: "10px", padding: "20px", borderRadius: "10px" }}>
                <div onClick={() => setToggle(!toggle)}>
                    {category.card.card.title}
                </div>
                <div >
                    <img src={downArrow} />
                </div>

                {toggle &&
                    category.card.card.itemCards.map((dish) => (
                        <div style={{ margin: "10px", display: "flex", justifyContent: "space-between", flexBasis: "100%", borderRadius: "5px", padding: "5px", backgroundColor: "white" }}>
                            <div style={{}}>
                                <div>{dish.card.info.name}</div>
                                <div>{(dish.card.info.price) / 100}</div>
                                <div>{dish.card.info.description}</div>
                            </div>
                            <div>
                                <img style={{ backgroundColor: "black", height: "100px", width: "100px", borderRadius: "10px", top: "20px" }}
                                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + dish?.card?.info?.imageId} />
                                <div style={{ position: "relative", padding: "3px", cursor: "pointer", bottom: "20px", left: "10px", width: "50px", borderRadius: "10px", backgroundColor: "green", fontWeight: "bold", color: "white" }} onClick={() => addToCart(dish.card.info)}>
                                    + Add
                                </div>
                            </div>
                        </div>))}
            </div >


        </div >
    )
}

export default MenuCategory;