import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  SwipeableDrawer,
  ListItemIcon,
} from '@material-ui/core';

import {
  Mail as MailIcon,
} from '@material-ui/icons';

const styles = theme => ({
  topAppBarSpacer: theme.mixins.toolbar
});

class SwipeableTemporaryDrawer extends Component {

  render() {
    const { classes, open, toggleDrawer } = this.props;

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
      <SwipeableDrawer
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
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
            <ListItem
              button
              component={Link}
              to={'/logout'}
            >
              <ListItemIcon>{<MailIcon />}</ListItemIcon>
              <ListItemText primary='Sign Out' />
            </ListItem>
          </List>
        </div>
      </SwipeableDrawer>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
)(SwipeableTemporaryDrawer);