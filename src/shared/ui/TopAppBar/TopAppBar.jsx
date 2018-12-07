import React from 'react';

import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography,
}
  from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

function TopAppBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Models.work
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopAppBar;