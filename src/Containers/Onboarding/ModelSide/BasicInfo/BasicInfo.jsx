import React, { Component } from 'react';
import './BasicInfo.scss';

import { NavLink } from 'react-router-dom';

class BasicInfo extends Component {

  render() {
    return (
      <div className="basic-info">
        <input type="text" className="onboard-model-basicinfo-input" placeholder='First Name'/>
        <input type="text" className="onboard-model-basicinfo-input" placeholder='Last Name'/>
        <input type="text" className="onboard-model-basicinfo-input" placeholder='Phone'/>
        <input type="text" className="onboard-model-basicinfo-input" placeholder='Zip Code'/>
        <NavLink to='/onboard/model-onboard/add-photo'>Continue</NavLink>
      </div>
    )
  }
}

export default BasicInfo;