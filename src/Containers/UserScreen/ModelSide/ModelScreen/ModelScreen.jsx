import React, { Component } from 'react';
import './ModelScreen.scss';
import { Route } from 'react-router-dom';

//Components
import Dashboard from '../Dashboard/Dashboard';
import Events from '../Events/Events';
import MobileFooter from '../MobileFooter/MobileFooter.jsx';
import Reports from '../Reports/Reports';
import Wallet from '../Wallet/Wallet';

class ModelScreen extends Component {

  render() {
    return (
      <div className="user-model-screen">
        <Route
            exact path='/user/'
            component={Dashboard} />
        <Route
            path='/user/events'
            component={Events} />
        <Route
            path='/user/reports'
            component={Reports} />
        <Route
            path='/user/wallet'
            component={Wallet} />
        {/* <Route
            path='/user/'
            component={MobileFooter} /> */}
      </div>
    )
  }
}

export default ModelScreen;