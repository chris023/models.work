import React, { Component } from 'react';
import './BioMetricsM.scss';

import { NavLink } from 'react-router-dom';

class BioMetricsM extends Component {

  render() {
    return (
      <div className="bio-metrics-m">
        <input type="text" placeholder='Chest '/>
        <input type="text" placeholder='Collar'/>
        <input type="text" placeholder='Inseam'/>
        <input type="text" placeholder='Suit'/>
        <input type="text" placeholder='Sleeve'/>
        <NavLink to='/onboard/model-onboard/personal-bio'>Continue</NavLink>
      </div>
    )
  }
}

export default BioMetricsM;