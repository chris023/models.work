import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { compose } from 'recompose';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import { Theme, CreateEvent } from '../';
import {
  BottomNav,
  TopAppBar,
} from '../../shared/ui';

const styles = theme => ({
  Screen: {
    padding: "0 20px",
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
          path='/user/client'
          component={TopAppBar} />
        <div className={classes.Screen}>
          <Route
            path='/user/client/events/create'
              component={CreateEvent} />
        </div>
        <Route
          path='/user/client'
          component={BottomNav} />
        <div className={classes.footerSpacer}></div>
      </MuiThemeProvider>
    )
  }
}

export default compose(
  withStyles(styles)
)(Screen)