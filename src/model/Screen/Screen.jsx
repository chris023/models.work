import React, { Component, Fragment } from 'react';
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
} from '../../shared/ui';

export default class Screen extends Component {

  render() {
    return (
        <Fragment>
            <Route
                path='/user/'
                component={TopAppBar} />
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
        </Fragment>
    )
  }
}