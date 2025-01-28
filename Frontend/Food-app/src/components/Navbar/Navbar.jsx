import React, { useState } from 'react';
import './Navbar.css'; // Ensure Navbar.css exists in the same directory
import { assets } from '../../assets/assets'; // Ensure this is the correct path for assets

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="Logo" className='logo' />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>contact</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbr-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
    </div>
    <button className="navbar-button">Sign In</button>
        {/* Add content for the right side of the navbar */}
      </div>
    </div>
  );
};

export default Navbar;
