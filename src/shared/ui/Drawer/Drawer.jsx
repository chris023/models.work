import React, { Component, Fragment } from 'react';
import { PropTypes } from 'prop-types';
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
              <ListItem button>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Dashboard' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Wallet' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Events' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItem>
              <ListItem button>
                <ListItemIcon>{<MailIcon />}</ListItemIcon>
                <ListItemText primary='Notifications' />
              </ListItem>
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