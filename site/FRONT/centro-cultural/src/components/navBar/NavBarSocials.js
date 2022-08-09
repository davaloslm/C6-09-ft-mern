import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './../../styles/navBar.css'

const NavBarSocials = () => {
  return (
    <>
    <header>
    <div className="icons">
        <i><FaFacebook /></i>
        <i><FaTwitter /></i>
        <i><FaInstagram /></i>
        <i><FaYoutube /></i>
    </div>
      <img height="20px" src="https://www.hjflorida.com/wp-content/uploads/2022/05/logo-ba-footer.png" alt="" />
    </header>
    </>
  )
}

export default NavBarSocials