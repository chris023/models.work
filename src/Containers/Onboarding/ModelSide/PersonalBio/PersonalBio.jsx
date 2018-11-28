import React, { Component } from 'react';
import './PersonalBio.scss';

import { NavLink } from 'react-router-dom';

class PersonalBio extends Component {

  render() {
    return (
      <div className="personal-bio">
        <h2>Almost There!</h2>
        <div className="short-bio-container">
          <p>Tell Us About You</p>
          <input type="text"/>
        </div>
        <NavLink to='/onboard/model-onboard/connect-social'>Continue</NavLink>
      </div>
    )
  }
}

export default PersonalBio;