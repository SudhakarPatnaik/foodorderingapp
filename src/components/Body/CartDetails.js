import { useSelector } from "react-redux";

const CartDetails = () => {

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div>
            {cartItems &&
                cartItems.map((dish) => (
                    <div style={{ margin: "100px", display: "flex", justifyContent: "space-between", flexBasis: "100%", borderRadius: "5px", padding: "5px", backgroundColor: "white" }}>
                        <div style={{}}>
                            <div>{dish.name}</div>
                            <div>{(dish.price) / 100}</div>
                            <div>{dish.description}</div>
                        </div>
                        <div>
                            <img style={{ backgroundColor: "black", height: "100px", width: "100px", borderRadius: "10px", top: "20px" }}
                                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + dish?.imageId} />
                        </div>
                    </div>))}
        </div>
    )
}

export default CartDetails;