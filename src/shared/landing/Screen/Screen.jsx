import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { LandingPage } from '../';

class Screen extends Component {
  
  render() {
    return (
      <Switch>
        <Route
          path='/'
          component={LandingPage} />
      </Switch>
    )
  }
}

export default Screen;