import "./Home.css";
import { useRef, useState } from "react";
import appLogo from "../../assets/Food2GoWithoutbg.png"
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
const Home = () => {
    const signupEmail = useRef(null);
    const signupPassword = useRef(null);
    const loginEmail = useRef(null);
    const loginPassword = useRef(null);
    const navigate = useNavigate();
    const validateEmail = (e) => {
        e.preventDefault();
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(signupEmail.current.value)) {
            if (e.target.innerHTML === 'Sign up') {
                createUserWithEmailAndPassword(auth, signupEmail.current.value, signupPassword.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        console.log(userCredential.user);
                        navigate('/container');
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(error.code + ' ' + error.message)
                    });
            } else {
                alert("You have entered an invalid email address!");
                return (false);
            }
        } else {
            signInWithEmailAndPassword(auth, loginEmail.current.value, loginPassword.current.value)
                .then((userCredential) => {
                    // Signed in 
                    console.log("user authenticated successfully");
                    navigate('/container');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error.code + ' ' + error.message)
                });
        }

    }

    return (
        <div>
            <div style={{ height: "50%", width: "50%", float: "left", background: "#24243e" }} id="loginSignUp">
                <div id="header" >
                    <img alt="logo" style={{ height: "125px", width: "125px" }} className="logo" src={appLogo}></img>
                </div>
                <div style={{ height: "543px", width: "50%" }} id="body">
                    <div class="main">
                        <input type="checkbox" id="chk" aria-hidden="true" />

                        <div class="signup">
                            <form>
                                <label for="chk" aria-hidden="true">Sign up</label>
                                <input type="text" name="txt" placeholder="User name" required="" />
                                <input ref={signupEmail} type="email" name="email" placeholder="Email" required="" />
                                <input ref={signupPassword} type="password" name="pswd" placeholder="Password" required="" />
                                <button onClick={validateEmail}>Sign up</button>
                            </form>
                        </div>

                        <div class="login">
                            <form>
                                <label for="chk" aria-hidden="true">Login</label>
                                <input ref={loginEmail} type="email" name="email" placeholder="Email" required="" />
                                <input ref={loginPassword} type="password" name="pswd" placeholder="Password" required="" />
                                <Link to={'/container'}>
                                    <button onClick={validateEmail}>Login</button>
                                </Link>
                            </form>
                        </div>
                    </div>



                    <div id="popularCities"></div>
                </div>
            </div>
            <div style={{ height: "50%", width: "50%", float: "left" }} id="welcomeImage">
                <img style={{ height: "100%", width: "100%" }} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq" />
            </div>

        </div >
    )
}

export default Home;