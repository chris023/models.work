import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Drawer } from '../';

import HeaderLogo from '../../../assets/logos/models.work/logo1.png';

import {
  AppBar,
  Toolbar,
  IconButton,
}
  from '@material-ui/core';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
  headerLogo: {
    height: 25,
    filter: 'Invert(1)',
  },
  hidden: {
    visibility: 'hidden',
  },
  toolBar: {
    justifyContent: "space-between"
  }
});

class TopAppBar extends Component {

  state = {
    drawerOpen: false,
  };

  toggleDrawer = () => (
    this.setState(({ drawerOpen }) => ({
      drawerOpen: !drawerOpen,
    }))
  )

  render() {
    const { classes } = this.props;
    const { drawerOpen } = this.state;

    return (
      <Fragment>
        <Drawer open={drawerOpen} toggleDrawer={this.toggleDrawer} />
        <AppBar
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar className={classes.toolBar}>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <img
              src={HeaderLogo}
              alt="Models.work"
              className={classes.headerLogo}
            />
            <IconButton className={classes.hidden}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default compose(
  withStyles(styles),
)(TopAppBar);