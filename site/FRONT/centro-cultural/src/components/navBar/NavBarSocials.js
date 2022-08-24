import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import './../../styles/navBar.css'

const NavBarSocials = () => {
  return (
    <>
    <header>
    <div className="icons">
        <a href="https://www.facebook.com/elculturalsanmartin" target="_blank" rel="noopener noreferrer"><i><FaFacebook /></i></a>
        <a href="https://twitter.com/elculturalsm" target="_blank" rel="noopener noreferrer"><i><FaTwitter /></i></a>
        <a href="https://www.instagram.com/elculturalsanmartin/" target="_blank" rel="noopener noreferrer"><i><FaInstagram /></i></a>
        <a href="https://www.youtube.com/user/elculturalsanmartin" target="_blank" rel="noopener noreferrer"><i><FaYoutube /></i></a>
    </div>
      <img height="20px" src="https://www.hjflorida.com/wp-content/uploads/2022/05/logo-ba-footer.png" alt="" className="logo-ba"/>
    </header>
    </>
  )
}

export default NavBarSocials