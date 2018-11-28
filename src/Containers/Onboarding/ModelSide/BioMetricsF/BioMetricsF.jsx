import React, { Component } from 'react';
import './BioMetricsF.scss';

import { NavLink } from 'react-router-dom';

class BioMetricsF extends Component {

  render() {
    return (
      <div className="bio-metrics-f">
        <select name="" id="">
          <option value="" selected disabled>Dress Size</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="14">14</option>
          <option value="16">16</option>
          <option value="18">18</option>
          <option value="20">20</option>
        </select>
        <p>Hips</p>
        <input type="number" min='0'/> 
        <p>in.</p>
        <p>Bust</p>
        <input type="number" min='0'/> 
        <p>in.</p>
        <NavLink to='/onboard/model-onboard/personal-bio'>Continue</NavLink>
      </div>
    )
  }
}

export default BioMetricsF;