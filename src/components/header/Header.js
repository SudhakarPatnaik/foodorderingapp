
import logo from "../../assets/Food2GoWithoutbg.png"; // TODO : struggeled to set the path 
import cartIcon from "../../assets/white-shopping-cart.png";
import userIcon from "../../assets/user.png";
import downArrow from "../../assets/arrow-down.png";
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

    const navigateToCart = () => {
        navigate('/cartDetails');
    }

    return (
        <div style={{ backgroundColor: "rgb(36, 36, 62)", color: "white", height: "125px", borderRadius: "20px", backgroundColor: "rgb(87, 59, 138)" }} className="header">
            <img alt="logo" style={{ borderRadius: "50px", height: "125px", width: "125px" }} src={logo}></img>
            <div style={{ marginLeft: "200px", marginTop: "15px" }}>
                <input type="text" style={{ borderRadius: "15px", background: "#609", padding: "20px", width: "353px", height: "15px", fontWeight: "bold", fontSize: "18px", color: "white", boxShadow: "rgb(0, 0, 0) 5px 20px 50px" }} placeholder="Search your favourite food/restaurent" />
                <img style={{ height: "25px", width: "25px", position: "absolute", top: "60px", left: "700px" }} src="https://www.freeiconspng.com/uploads/search-icon-png-2.png" />
            </div>
            <div style={{ width: "150px", height: "50px", cursor: "pointer", position: "absolute", top: "45px", left: "950px", backgroundColor: "#609", borderRadius: "10px", boxShadow: "rgb(0, 0, 0) 5px 20px 50px" }}>
                <img src={userIcon} style={{ height: "50px", width: "50px", position: "absolute" }} />
                <div style={{ left: "50px", top: "19px", position: "absolute" }}>Sudhakar</div>
                <img src={downArrow} style={{ height: "20px", width: "20px", position: "absolute", left: "120px", top: "20px" }} />
            </div>
            <div onClick={() => navigateToCart()} style={{ cursor: "pointer", position: "absolute", top: "30px", left: "1350px" }}>
                <img src={cartIcon} style={{ height: "100px", width: "100px", position: "absolute" }} />
            </div>
            <div style={{ width: "20px", fontSize: "20px", backgroundColor: "orange", fontWeight: "bold", color: "purple", position: "absolute", top: "50px", right: "100px", borderRadius: "10px" }}>
                <div style={{ marginLeft: "5px" }}>{cartItems.length}</div>
            </div>
        </div>
    );
}

export default Header;