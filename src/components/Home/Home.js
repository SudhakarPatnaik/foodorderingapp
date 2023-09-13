import "./Home.css";
import { useState } from "react";
import appLogo from "../../assets/Food2GoDark.png"
const Home = () => {
    const [item, setItem] = useState();
    const items = ['Cooking gone wrong?', 'Late night at office?', 'Hungry?', 'Unexpected guests?', 'Movie marathon?'];
    let sequence = document.getElementById("sequence");
    let i = 0;
    /* setInterval(function () {
         if (sequence)
             setItem(items[i++ % items.length]);
         // sequence.innerHTML = items[i++ % items.length];
     }, 3000)*/

    //})

    return (
        <div>
            <div style={{ height: "50%", width: "50%", float: "left" }} id="loginSignUp">
                <div id="header" >
                    <img alt="logo" style={{ borderRadius: "50px", height: "170px", width: "170px" }} className="logo" src={appLogo}></img>
                </div>
                <div id="body">
                    <div class="main">
                        <input type="checkbox" id="chk" aria-hidden="true" />

                        <div class="signup">
                            <form>
                                <label for="chk" aria-hidden="true">Sign up</label>
                                <input type="text" name="txt" placeholder="User name" required="" />
                                <input type="email" name="email" placeholder="Email" required="" />
                                <input type="password" name="pswd" placeholder="Password" required="" />
                                <button>Sign up</button>
                            </form>
                        </div>

                        <div class="login">
                            <form>
                                <label for="chk" aria-hidden="true">Login</label>
                                <input type="email" name="email" placeholder="Email" required="" />
                                <input type="password" name="pswd" placeholder="Password" required="" />
                                <button>Login</button>
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