import React, { Component } from 'react';
import { db } from '../../shared/firebase/config/firebase';

// import Input from '@material-ui/core/Input';
// import Select from '@material-ui/core/Select';

import { Input, Select, TextField, FormControl, Grid, Card, LinearProgress } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import { green } from '@material-ui/core/colors'
import DateFnsUtils from '@date-io/date-fns';
// import { FormControl } from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import './CreateEvent.scss';
import { ViewColumn } from '@material-ui/icons';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    margin: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  card: {
    minWidth: 320, 
    display: 'flex',
    flexDirection: 'column',
    margin: '20px 0 0 0',
    padding: theme.spacing.unit,
    justifyContent: 'space-between',
    width: '100%',
  },
  select: {
    margin: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit,
    barColorSecondary: '#4caf50',
  },
  progress: {
    barColorSecondary: '#4caf50',
  }
});

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputControl: {
        eventTitle: '',
        eventType: '',
        eventDate: '',
        eventTime: '',
        eventBrand: '',
        venueName: '',
        venueAddress: '',
        venueContactName: '',
        venueContactEmail: '',
        venueContactPhone: '',
        employeeType: '',
        employeeGender: '',
        employeeNumber: '',
        employeeAttire: '',
        employeeTask: '',
        employeePay: '',
        eventNotes: '',
      },
      completed: 0,
    }
  }

  handleCalendarSelection = date => this.setState({ eventDate: new Date(date) });

  handleInputChange = async event => {
    const { name, value } = event.target;
    // this.setState({ inputControl: { [name]: value } });
    await this.setState( state => {
      state.inputControl[name] = value;
      return state
    })
    this.eventFormProgress();
  }

  eventFormProgress = () => {
    // const { completed } = this.state;
    // console.log(completed += 1)
    let completed = Object.values(this.state.inputControl).reduce((acc, curr) => {
        if(curr) {
          acc += 6
        } 
      return acc
    }, 0)
    this.setState({ completed });     
  }

  addEvent = () => {
    const data = this.state;
    db.collection("events").add(data)
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }

  dateInputChange = async event => {
    await this.handleInputChange(event);  
    if(this.state.inputControl.eventDate.length === 2 || this.state.inputControl.eventDate.length === 5 && this.state.inputControl.eventDate[this.state.inputControl.eventDate.length -1] !== '/') {
      console.log(this.state.inputControl.eventDate)
     this.setState(state => {
        state.inputControl.eventDate = state.inputControl.eventDate += '/'
        return state
      }) 
    } else if(this.state.inputControl.eventDate.length > 10) {
      this.setState(state => {
        state.inputControl.eventDate = state.inputControl.eventDate.slice(0, state.inputControl.eventDate.length)
        return state
      }) 
    }
}

  render() {
    const { 
      eventTitle, 
      eventType, 
      eventDate, 
      eventTime,
      eventBrand,
      venueName,
      venueAddress,
      venueContactName,
      venueContactEmail,
      venueContactPhone,
      employeeType,
      employeeTask,
      employeeGender,
    } = this.state.inputControl

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={8}
        >
          <div className="CreateEvent">
            <div className="header">
              <p className="header__title">Create Event</p>
              <button className="header__button" onClick={this.addEvent}>Create</button>
            </div>
            <div className={this.props.classes.root}>
              <LinearProgress className={this.props.classes.progress} variant="determinate" value={this.state.completed} color={ this.state.completed >= 100 ? 'secondary' : 'primary'}/>
            </div>
            <Grid
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              spacing={8}
            >
              <Card className={this.props.classes.card} >
                <p className="event_info__title">Event Info</p>
                <TextField variant="outlined" className={this.props.classes.textField} name='eventTitle' type="text" label='Event Title' value={eventTitle} onChange={this.handleInputChange} />
                <Select native className={this.props.classes.select} name='eventType' onChange={this.handleInputChange} value={eventType}>
                  <option value='' disabled hidden>Event Type</option>
                  <option value="On Premise">On Premise</option>
                  <option value="Off premise">Off Premise</option>
                  <option value="Special Event" disabled>Special Event</option>
                  <option value="Logistics" disabled>Logistics</option>
                  <option value="Strike Crew" disabled>Strike Crew</option>
                  <option value="Social Media" disabled>Social Media</option>
                </Select>
                <TextField variant="outlined" className={this.props.classes.textField} name='eventDate' type="text" label='Date' placeholder='MM/DD/YYYY' value={eventDate} onChange={this.dateInputChange} />

                <TextField className={this.props.classes.textField} variant="outlined" name='eventTime' type="text" label='Time' value={eventTime} onChange={this.handleInputChange} />
                <TextField className={this.props.classes.textField} variant="outlined" name='eventBrand' type="text" label='Event Brand' value={eventBrand} onChange={this.handleInputChange} />
              </Card>
              <Card className={this.props.classes.card}>
                <p className="venue_info__title">Venue Info</p>
                <Grid
                  container
                  direction="column"
                  spacing={8}
                >
                  <TextField variant="outlined" className={this.props.classes.textField} name='venueName' type="text" label='Venue Name' value={venueName} onChange={this.handleInputChange} />
                  <TextField variant="outlined" className={this.props.classes.textField} name='venueAddress' type="text" label='Address' value={venueAddress} onChange={this.handleInputChange} />
                </Grid>
                <p className="venue_contact__title">Venue Contact</p>
                <Grid
                  container
                  direction="column"
                  spacing={8}
                >
                  <TextField variant="outlined" className={this.props.classes.textField} name='venueContactName' type="text" label='Name' value={venueContactName} onChange={this.handleInputChange} />
                  <TextField variant="outlined" className={this.props.classes.textField} name='venueContactEmail' type="text" label='Email' value={venueContactEmail} onChange={this.handleInputChange} />
                  <TextField variant="outlined" className={this.props.classes.textField} name='venueContactPhone' type="text" label='Phone Number' value={venueContactPhone} onChange={this.handleInputChange} />
                </Grid>
  
              </Card>
              <Card className={this.props.classes.card}>
                    <p className="staffing__title">Add Staffing</p>
                    <Select variant="outlined" native className={this.props.classes.select} name='employeeType' onChange={this.handleInputChange} value={employeeType}>
                      <option value='' disabled hidden>Staff Occupation</option>
                      <option value="Model">Model</option>
                    </Select>
                    <Select variant="outlined" native className={this.props.classes.select} name='employeeTask' onChange={this.handleInputChange} value={employeeTask}>
                      <option value='' disabled hidden>Role</option>
                      <option value="Brand Ambassador">Brand Ambassador</option>
                    </Select>
                    <Select variant="outlined" native className={this.props.classes.select} name='employeeGender' onChange={this.handleInputChange} value={employeeGender}>
                      <option value='' disabled hidden>Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Select>
                    <TextField variant="outlined" className={this.props.classes.textField} name='employeePay' type="number" min='1' label='Hourly Rate' onChange={this.handleInputChange} />
                    <TextField variant="outlined" className={this.props.classes.textField} name='employeeNumber' type="number" min='1' label='Number of Talent' onChange={this.handleInputChange} />
                    <TextField variant="outlined" className={this.props.classes.textField} name='employeeAttire' type="text" label='Attire' onChange={this.handleInputChange} />
                    <TextField variant="outlined" className={this.props.classes.textField} name='employeeNotes' type="text" label='Notes' onChange={this.handleInputChange} />
                  <p style={{ "textAlign": "center" }}>+</p> 
              </Card>
            </Grid>
          </div>
        </Grid>
      </MuiPickersUtilsProvider>
    ) 
  }
}

export default withStyles(styles)(CreateEvent)