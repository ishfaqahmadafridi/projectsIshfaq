import {  useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";

const Navbar = ({ setIsLoggedIn }) => {
  const{getTotalCartAmount} = useContext(StoreContext);
  const [menu,setmenu] = useState("home")
  return (
    <div className="navbar">
     <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>

      <ul className="navbar-menu">
        <li  to='/'  onClick={()=> setmenu("home")} className={menu === "home" ? "active" : ""} >Home</li>
        <a href="#explore-menu"  onClick={()=> setmenu("menu")} className={menu === "menu" ? "active" : ""} >Menu</a>
        <a href="#app-download" onClick={()=> setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""} >Mobile-app</a>
        <a  href="#Footer"  onClick={()=> setmenu("contact")} className={menu === "contact" ? "active" : ""} >Contact</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="basket" /> </Link>
          <div className={getTotalCartAmount()=== 0 ? '': 'dot'}></div>
        </div>
        <button onClick={() => setIsLoggedIn(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
