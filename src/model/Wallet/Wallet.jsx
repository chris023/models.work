import React, { Component } from 'react';
import './Wallet.scss';
import { NavLink } from 'react-router-dom';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';

const styles = theme => ({
  grid: {
    height: '100%',
  },
})

class Wallet extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className="Wallet">
        <div className="header">
          <Typography variant='h4'>Wallet</Typography>
          <Button component={NavLink} to="/user/wallet/settings" variant='outlined'>
            Settings
          </Button>
        </div>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={8}
          className={classes.grid}
        >
          <Grid item xs={12}> 
            <Card>
              <CardContent>
                <Typography>You have</Typography>
                <Typography>$104.00</Typography>
                <Button variant='outlined'>
                  Transfer To Account
                </Button>
                <div className="content__bank_status">
                  <img src="" alt="" />
                  <p className="margin_0">Connected </p>
                  <p className="margin_0">Chase Checking</p>
                  <p className="margin_0">xxxx4756</p>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default compose(
  withStyles(styles)
)(Wallet);