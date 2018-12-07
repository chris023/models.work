import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

export default withStyles(styles)(class extends Component {
  
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };


  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
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
});