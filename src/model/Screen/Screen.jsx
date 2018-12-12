import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Theme } from '../';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';

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

const styles = theme => ({
  Screen: {
    padding:"0 20px",
  },
  footerSpacer: {
    height: 56 + theme.spacing.unit,
    width: '100%',
  },
  headerSpacer: {
    height: 56 + theme.spacing.unit,
    width: '100%',
  },
});

class Screen extends Component {

  render() {
    const { classes } = this.props;

    return (
     
      <MuiThemeProvider theme={Theme}>
        <div className={classes.headerSpacer}></div>
        <Route
          path='/user/'
        component={TopAppBar} />
        <div className={classes.Screen}>
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
          </div>
        <Route
          path='/user/'
          component={BottomNav} />
        <div className={classes.footerSpacer}></div>
      </MuiThemeProvider>
      
    )
  }
}

export default compose(
  withStyles(styles)
)(Screen)