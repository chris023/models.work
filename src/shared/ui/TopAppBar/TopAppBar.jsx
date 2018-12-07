import React from 'react';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import { Menu as MenuIcon } from '@material-ui/icons';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
}
  from '@material-ui/core';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.swipeableDrawer + 1,
  }
})

function TopAppBar(props) {
  const { classes } = props;

  return (
      <AppBar
        position="static"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Models.work
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default compose(
  withStyles(styles),
) (TopAppBar);