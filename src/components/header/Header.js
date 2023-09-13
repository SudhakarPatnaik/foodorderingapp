
import logo from "../../assets/logo.jpg"; // TODO : struggeled to set the path 
import cartIcon from "../../assets/cart.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header">
            <img alt="logo" className="logo" src="https://scontent.fhyd11-2.fna.fbcdn.net/v/t39.30808-6/300997779_499694922158291_7350751103854474280_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=ampqXsJ1UmoAX9uuGMt&_nc_ht=scontent.fhyd11-2.fna&oh=00_AfCGbgZz_WMF2NhDMQ1JqmGr6zmnT1cAPhSZewcIvI1GWg&oe=64FDBE3E"></img>
            <div style={{ fontSize: "20px", fontWeight: "bold", padding: "50px", marginLeft: "100px" }}>Aparna Kanopy Tulip, Kompally</div>
            <img style={{ height: "25px", width: "25px", position: "relative", top: "50px", left: "150px" }} src="https://www.freeiconspng.com/uploads/search-icon-png-2.png" />
            <div style={{ fontSize: "20px", fontWeight: "bold", padding: "50px", marginLeft: "100px" }}>Search</div>
            <img src={cartIcon} style={{ height: "25px", width: "25px", position: "relative", top: "50px", left: "150px" }} />
            <Link to={"/cartDetails"}>
                <div style={{ cursor: "pointer", fontSize: "20px", fontWeight: "bold", padding: "50px", marginLeft: "100px" }}>Cart {cartItems.length}</div>
            </Link>
            <div style={{ fontSize: "20px", fontWeight: "bold", padding: "50px", marginLeft: "100px" }}>Sudhakar</div>
        </div>
    );
}

export default Header;