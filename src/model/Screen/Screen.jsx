import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { theme } from './Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';

//Components
import {
  Dashboard,
  Events,
  Reports,
  Wallet,
  WalletSettings,
  EditProfile
} from '../';

import {
  BottomNav,
  TopAppBar,
} from '../../shared/ui';

export default class Screen extends Component {

  render() {
  return (
    <MuiThemeProvider theme={theme}>
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
        component={WalletSettings} />
      <Route 
        exact path='/user/profile/edit'
          component={EditProfile} />
      <Route
        path='/user/'
        component={BottomNav} />
    </MuiThemeProvider>
  )
  }
}