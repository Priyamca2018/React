import React , {Component } from 'react';
import data from '../constants/messages'

const Address = () => {
    return (
      <div id="address-div">
        <p>{data.address.line1}</p>
        <p>{data.address.line2}</p>
        <p>{data.address.Tel}</p>
        <p>{data.address.website}</p>
      </div>
    )
  }
  
  export default Address