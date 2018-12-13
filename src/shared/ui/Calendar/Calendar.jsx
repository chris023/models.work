import React, { Component } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar';
import { compose } from 'recompose';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment';
import Toolbar from 'react-big-calendar/lib/Toolbar';

const localizer = BigCalendar.momentLocalizer(moment);

const dummyEvents = [
  {
    allDay: true,
    end: new Date(Date.now()),
    start: new Date(Date.now()),
    title: '1',
  }
]

const styles = theme => ({
  calendar: {
    height: 400,
    position: 'relative',
    zIndex: 0,
  },
  label: {
    textAlign: 'center',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  calToolbarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: theme.spacing.unit,
  }
})

class Calendar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <BigCalendar
        className={classes.calendar}
        localizer={localizer}
        events={dummyEvents}
        defaultView="month"
        views={['month']}
        startAccessor="start"
        endAccessor="end"
        components={
          {
            toolbar: withStyles(styles)(CustomToolbar)
          }
        }
      />
    );
  }
}


class CustomToolbar extends Toolbar {

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.calToolbarContainer}>
        <button type="button" onClick={() => this.navigate('PREV')}>◀</button>
        <div className={classes.label}>{this.props.label}</div>
        <button type="button" onClick={() => this.navigate('NEXT')}>▶</button>
      </div>
    );
  }
}

export default compose(
  withStyles(styles)
)(Calendar)