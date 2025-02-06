import React, { useState, useContext } from "react"; // ✅ Added useContext import
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext"; // ✅ Fixed StoreContext import
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext); // ✅ Now it works

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="logo" />
      </Link>

      {/* Navbar Menu */}
      
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
      </ul>

      {/* Navbar Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" className="search-icon" />

        {/* Cart Section */}
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Cart" />
          </Link>
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div> {/* ✅ Fixed dot visibility */}
        </div>

        {/* Sign In Button */}
        <button className="navbar-button" onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
