import React, { Component } from 'react';
import { Calendar } from '../../shared/ui';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const styles = theme => ({
  subheaderText: {
    textAlign: 'center',
  },
})

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography className={classes.subheaderText} variant='h5'>
          Upcoming Events
        </Typography>
        <Calendar />
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Dashboard); 