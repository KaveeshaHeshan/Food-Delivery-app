import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className= 'footer' id='footer>'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo} alt='' />
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.  Lorem ipsum has benn the industry's standard dummy text ever since the 1500s. when an unkonw printer took a galley of tyoe and scramhled it to make a type specimen book.</p>
              <div classNmae = 'footer-social-icons'>
               <img src={assets.facebook_icon} alt='' />
               <img src={assets.twitter_icon} alt='' />
               <img src={assets.linkedin_icon} alt='' />
              </div>


         </div>
         <div className='footer-content-center'>
            <h2>COMPANY</h2>
             <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>delivery</li>
                <li>privacy policy</li>

             </ul>

         </div>
         <div className='footer-content-right'>
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>0786578123</li>
                <li>contact@tomato.com</li>
            </ul>
                 
         </div>
        </div>
        <hr/>
        <p className='footer-copyright'> Copright 2024 @ Tomato.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer