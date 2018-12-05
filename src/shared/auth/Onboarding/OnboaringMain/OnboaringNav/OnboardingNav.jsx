import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './OnboardingNav.scss';

class OnboardingNav extends Component {
  constructor() {
    super()

    this.state = {
      gender: 'female'
    }
  }

  render() {
    return (
      <div className="Onboarding">
        <h2 className="onboarding-title">I am ...</h2>
        <NavLink to='/onboard/model-onboard' className="navlink flex-center">A Model</NavLink>
        <NavLink to='/onboard/client-onboard' className="navlink flex-center">Hiring Models</NavLink>
      </div>
    )
  }
}

export default OnboardingNav;