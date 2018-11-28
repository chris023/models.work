import React, { Component } from 'react';
import './BioMetrics.scss';

import { NavLink } from 'react-router-dom';

class BioMetrics extends Component {

  render() {
    return (
      <div className="bio-metrics">
        <input type="text" placeholder='Hair Color'/>
        <input type="text" placeholder='Eye Color'/>
        <input type="text" placeholder='Shoe Size'/>
        <p>Waist</p>
        <input type="number" name="" id="" min='0'/>
        <p>in.</p>
        <NavLink to='/onboard/model-onboard/biometrics-f'>Continue - F</NavLink>
        <NavLink to='/onboard/model-onboard/biometrics-m'>Continue - M</NavLink>
      </div>  
    )
  }
}

export default BioMetrics;