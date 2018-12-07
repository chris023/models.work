import React, { Component } from 'react';
import './Screen.scss';
import { Route } from 'react-router-dom';

//Components
import Dashboard from '../Dashboard/Dashboard';
import Events from '../Events/Events';
import Reports from '../Reports/Reports';
import Wallet from '../Wallet/Wallet';
import Settings from '../Wallet/Settings/Settings'
import EditProfile from '../EditProfile/EditProfile';

import {
    BottomNav,
    TopAppBar,
    Drawer
} from '../../shared/ui';

export default class Screen extends Component {

  render() {
    return (
        <div className="user-model-screen">
        <Route
            path='/user/'
            component={TopAppBar} />
        <Route
            path='/user/'
            component={Drawer} />
        <Route
            exact path='/user/dashboard'
            component={Dashboard} />
        <Route
            exact path='/user/events'
            component={Events} />
        <Route
            exact path='/user/reports'
            component={Reports} />
        <Route
            exact path='/user/wallet'
            component={Wallet} />
        <Route
            exact path='/user/wallet/settings'
            component={Settings} />
        <Route 
            exact path='/user/profile/edit'
                component={EditProfile} />
        <Route
            path='/user/'
            component={BottomNav} />
      </div>
    )
  }
}