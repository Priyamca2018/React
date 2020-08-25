import React , {Component } from 'react';
import data from '../constants/messages'

const MenuSpecials = () => {
    return (
      <div id="specials-div">
        <h3>{data.timings.specialHeading}</h3>
        <p className="italic-txt">{data.timings.note}</p>
        <p className="timings">{data.timings.timingsthree}</p>
        <p className="italic-txt">{data.timings.description}</p>
      </div>
    )
  }
  
  export default MenuSpecials