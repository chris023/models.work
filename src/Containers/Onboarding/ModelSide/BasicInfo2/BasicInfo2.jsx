import React, { Component } from 'react';
import './BasicInfo2.scss';

import { NavLink } from 'react-router-dom';

class BasicInfo2 extends Component {

  render() {
    return (
      <div className="basic-info-2">
        <input type="text" placeholder='DOB (MM/DD/YYYY)'/>
        <p>Height</p>
        <div className="height-input-container">
          <input type="number" min='0'/>
          <p>ft.</p>
          <input type="number" min='0'/>
          <p>in.</p>
        </div>
        <p>I model as a...</p>
        <select name="" id="">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <NavLink to='/onboard/model-onboard/biometrics'>Continue</NavLink>
      </div>
    )
  }
}

export default BasicInfo2;