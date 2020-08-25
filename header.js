import React , {Component } from 'react';
import logo from '../images/flavour.jpg'
import data from '../constants/messages'

const Header = () => {
    return (
      <div id="header-div">
        <img src={logo} alt="header image" className="img-responsive" ></img>
        <p className="headTxt">{data.timings.foodType}</p>
      </div>
    )
  }
  
  export default Header