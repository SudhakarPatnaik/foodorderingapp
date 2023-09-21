
import logo from "../../assets/Food2GoWithoutbg.png"; // TODO : struggeled to set the path 
import cartIcon from "../../assets/cart.png";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';


const Header = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const navigate = useNavigate();

    const signOutUser = () => {
        signOut(auth).then(() => {
            navigate('/home');
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div style={{ backgroundColor: "#573b8a", color: "white", height: "150px", borderRadius: "10px" }} className="header">
            <img alt="logo" style={{ borderRadius: "50px", height: "170px", width: "170px" }} src={logo}></img>
            <div style={{ fontSize: "20px", fontWeight: "bold", padding: "50px", marginLeft: "100px" }}>Aparna Kanopy Tulip, Kompally</div>
            <img style={{ height: "25px", width: "25px", position: "relative", top: "50px", left: "150px" }} src="https://www.freeiconspng.com/uploads/search-icon-png-2.png" />
            <div style={{ fontSize: "20px", fontWeight: "bold", padding: "50px", marginLeft: "100px" }}>Search</div>
            <img src={cartIcon} style={{ height: "25px", width: "25px", position: "relative", top: "50px", left: "150px" }} />
            <Link to={"/cartDetails"}>
                <div style={{ cursor: "pointer", fontSize: "20px", fontWeight: "bold", padding: "50px", marginLeft: "100px" }}>Cart {cartItems.length}</div>
            </Link>
            <div onClick={signOutUser} style={{ fontSize: "20px", fontWeight: "bold", padding: "50px", marginLeft: "100px", cursor: "pointer" }}>Sign Out</div>
        </div>
    );
}

export default Header;