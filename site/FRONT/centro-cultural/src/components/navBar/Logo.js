import React from 'react'
import logo from './../../assets/atomo.png'
import './../../styles/Logo.css'

const Logo = () => {
  return (
    <div className="logo-container">
        <img src={logo} alt="Logo" className="logoHeader" />
    <div className="title-header">
        <h1>CENTRO</h1>
        <h1>CULTURAL</h1>
        <h1>SAN MARTIN</h1>
    </div>
    </div>
  )
}

export default Logo