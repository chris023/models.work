import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  SwipeableDrawer,
  ListItemIcon,
} from '@material-ui/core';

import {
  Mail as MailIcon,
} from '@material-ui/icons';

const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  topAppBarSpacer: theme.mixins.toolbar
});

class SwipeableTemporaryDrawer extends Component {
  state = {
    open: false,
  };

  toggleDrawer = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  };

  render() {
    const { classes } = this.props;

    const list = [
      {
        text: 'Dashboard',
        linkTo: '/user/dashboard'
      },
      {
        text: 'Wallet',
        linkTo: '/user/wallet'
      },
      {
        text: 'Events',
        linkTo: '/user/events'
      },
      {
        text: 'Profile',
        linkTo: '/user/profile'
      },
      {
        text: 'Notifications',
        linkTo: '/user/notifications'
      },
    ]

    return (
      <Fragment>
        <Button onClick={this.toggleDrawer}>Open</Button>
        <SwipeableDrawer
          open={this.state.open}
          onClose={this.toggleDrawer}
          onOpen={this.toggleDrawer}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer}
            onKeyDown={this.toggleDrawer}
          >
            <div className={classes.topAppBarSpacer}></div>
            <List>
              {list.map(({ text, linkTo }, index) => (
                  <ListItem
                  key={index}
                  button
                  component={Link}
                  to={linkTo}
                  >
                    <ListItemIcon>{<MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
            </List>
            <Divider />
            <List>
              <ListItem button>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Sign Out' />
              </ListItem>
            </List>
          </div>
        </SwipeableDrawer>
      </Fragment>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
)(SwipeableTemporaryDrawer);