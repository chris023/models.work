import React, { Component, Fragment } from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import { Drawer } from '../';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
}
  from '@material-ui/core';

const styles = theme => {
  return {
    appBar: {
      zIndex: theme.zIndex.modal + 1,
    }
  }
}

class TopAppBar extends Component {

  state = {
    drawerOpen: true,
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
        { drawerOpen &&
          <Drawer open={drawerOpen} toggleDrawer={this.toggleDrawer} />
        }
        <AppBar
          position="relative"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Models.work
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default compose(
  withStyles(styles),
) (TopAppBar);