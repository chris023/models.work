import React, { Component } from 'react';
import './Screen.scss';
import { Route } from 'react-router-dom';

//Components
import Dashboard from '../Dashboard/Dashboard';
import Events from '../Events/Events';
import MobileFooter from '../../shared/ui/MobileFooter/MobileFooter.jsx';
import Reports from '../Reports/Reports';
import Wallet from '../Wallet/Wallet';
import Settings from '../Wallet/Settings/Settings'
import EditProfile from '../EditProfile/EditProfile';

export default class Screen extends Component {

  render() {
    return (
      <div className="user-model-screen">
        <Route
            exact path='/user/dashboard'
            component={Dashboard} />
        <Route
            path='/user/events'
            component={Events} />
        <Route
            path='/user/reports'
            component={Reports} />
        <Route
            exact path='/user/wallet'
            component={Wallet} />
        <Route
            exact path='/user/wallet/settings'
            component={Settings} />
        <Route 
            path='/user/editprofile'
            component={EditProfile} />
        <Route
            path='/user/'
            component={MobileFooter} />
      </div>
    )
  }
}