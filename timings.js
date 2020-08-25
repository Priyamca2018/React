import React , {Component } from 'react';
import data from '../constants/messages'

const Timings = () => {
    return (
      <div id="Timings-div">
        <h3>{data.timings.TimeHeading}</h3>
        <p>{data.timings.timingsone}</p>
        <p>{data.timings.timingstwo}</p>
      </div>
    )
  }
  
  export default Timings