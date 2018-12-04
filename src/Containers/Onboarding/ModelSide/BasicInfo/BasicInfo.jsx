import React, { Component } from 'react';
import './BasicInfo.scss';

import { NavLink } from 'react-router-dom';

class BasicInfo extends Component {

  render() {
    return (
      <div className="flex-center-col BasicInfo">
        <input type="text" className="input input--first_name" placeholder='First Name'/>
        <input type="text" className="input input--last_name" placeholder='Last Name'/>
        <input type="text" className="input input--phone" placeholder='Phone'/>
        <input type="text" className="input input--zip_code" placeholder='Zip Code'/>
        <input type="text" className="input input--dob" placeholder='Date of Birth'/>
        <NavLink className="navlink navlink--continue" to='/onboard/model-onboard/connect-social'>Continue</NavLink>
      </div>
    )
  }
}

export default BasicInfo;