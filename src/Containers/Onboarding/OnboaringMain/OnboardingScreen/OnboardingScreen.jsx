import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './OnboardingScreen.scss';

import ModelScreen from '../../ModelSide/ModelScreen/ModelScreen';
import ClientSide from '../../ClientSide/ClientSide';
import OnboardingNav from '../OnboaringNav/OnboardingNav';


class OnboardingScreen extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="Onboarding-screen">
        <Route exact path='/onboard/'
               component={OnboardingNav} />
         <Route
            path='/onboard/model-onboard'
            component={ModelScreen} />
          <Route
            path='/onboard/client-onboard'
            component={ClientSide} />
      </div>
    )
  }
}

export default OnboardingScreen;