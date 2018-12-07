import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';

import {
  BottomNavigation,
  BottomNavigationAction
} from '@material-ui/core/';

import {
  Event as EventIcon,
  Dashboard as DashboardIcon,
  AccountBalanceWallet as WalletIcon,
} from '@material-ui/icons';




const styles = {
  bottomNavigation: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

class BottomNav extends Component {

  paths = [
    '/user/',
    '/user/dashboard',
    '/user/wallet'
  ]


  render() {
    const { classes, location: { pathname } } = this.props;

    const activeTab =
      this.paths.reduce((acc, curr, i) => {
        if (pathname.includes(curr))  acc = i;
        return acc;
      },-1);

    return (
      <BottomNavigation
        value={activeTab}
        showLabels
        className={classes.bottomNavigation}
      >
        <BottomNavigationAction
          label="Events"
          icon={<EventIcon />}
          component={Link}
          to='/user/events'
        />
        <BottomNavigationAction
          label="Dashboard"
          icon={<DashboardIcon />}
          component={Link}
          to='/user/dashboard'
        />
        <BottomNavigationAction
          label="Wallet"
          icon={<WalletIcon />}
          component={Link}
          to='/user/wallet'
        />
      </BottomNavigation>
    );
  }
};

export default compose(
  withStyles(styles)
)(BottomNav);