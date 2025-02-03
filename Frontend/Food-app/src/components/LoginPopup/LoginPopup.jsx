import React from 'react'
import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = (setShowLogin) => {

   const [currState, setCurrStete] = useState("Sing Up");
  return (
    <div className='login-popup'>
      <form  className="login-popu-container">
       <div className="login-popup-tittel">
       <h2>{currState}</h2>
       <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt=""/>


     </div>
   </form>
    </div>
  )
}

export default LoginPopup