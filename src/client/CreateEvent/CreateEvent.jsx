import React, { Component } from 'react';
import { db } from '../../shared/firebase/config/firebase';

// import Input from '@material-ui/core/Input';
// import Select from '@material-ui/core/Select';

import { Input, Select, TextField, FormControl } from '@material-ui/core';
import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
// import { FormControl } from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import './CreateEvent.scss';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

class CreateEvent extends Component {
  constructor() {
    super();
    this.state = {
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
      employeeNumber: '',
      employeeAttire: '',
      employeeTask: '',
      employeePay: '',
      eventNotes: '',
    }
  }

  handleCalendarSelection = date => this.setState({ eventDate: new Date(date) });

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
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

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="CreateEvent">
        <div className="header">
          <p className="header__title">Create Event</p>
          <button className="header__button" onClick={this.addEvent}>Create</button>
        </div>
        <div className="event_form" action="">
          <section className="event_info">
            <TextField variant="outlined" className="event_info__title" name='eventTitle' type="text" label='Event Title' value={this.state.eventTitle} onChange={this.handleInputChange} />
            <Select className="event_info__event_type" defaultValue="Event Type" name='eventType' onChange={this.handleInputChange} value={this.state.eventType}>
              <option value='' disabled hidden>Event Type</option>
              <option value="On Premise">On Premise</option>
              <option value="Off premise">Off Premise</option>
              <option value="Special Event" disabled>Special Event</option>
              <option value="Logistics" disabled>Logistics</option>
              <option value="Strike Crew" disabled>Strike Crew</option>
              <option value="Social Media" disabled>Social Media</option>
            </Select>
            {/* <TextField variant="outlined" type="date" onChange={this.handleCalendarSelection} value={this.state.eventDate} /> */}
            <FormControl fullwidth>
              <DatePicker
                    clearable
                    label="Choose Event Date"
                    minDateMessage="Date must be greater than today"
                    value={this.state.eventDate}
                    onChange={this.handleCalendarSelection}
                    animateYearScrolling={false}
                    format="M/D/Y"
                />
            </FormControl>
            <TextField name='eventTime' type="text" label='Time' value={this.state.eventTime} onChange={this.handleInputChange} />
            <TextField variant="outlined" name='eventBrand' type="text" label='Event Brand' value={this.state.eventBrand} onChange={this.handleInputChange} />
          </section>
          <section className="venue_info">
            <p className="venue_info__title">Venue Info</p>
            <TextField variant="outlined" className="venue_info__name" name='venueName' type="text" label='Venue Name' value={this.state.venueName} onChange={this.handleInputChange} />
            <TextField variant="outlined" className="venue_info__address" name='venueAddress' type="text" label='Address' value={this.state.venueAddress} onChange={this.handleInputChange} />
          </section>
          <section className="venue_contact">
            <p className="venue_contact__title">Venue Contact</p>
            <TextField variant="outlined" className="venue_contact__name" name='venueContactName' type="text" label='Name' value={this.state.venueContactName} onChange={this.handleInputChange} />
            <TextField variant="outlined" className="venue_contact__email" name='venueContactEmail' type="text" label='Email' value={this.state.venueContactEmail} onChange={this.handleInputChange} />
            <TextField variant="outlined" className="venue_contact__phone" name='venueContactPhone' type="text" label='Phone Number' value={this.state.venueContactPhone} onChange={this.handleInputChange} />
          </section>
          <section className="staffing">
            <div className="staff_1">
              <p className="staffing__title">Add Staffing</p>
              <Select className="staff__occupation" defaultValue="" name='employeeOccupation' onChange={this.handleInputChange}>
                <option value='' disabled hidden>Staff Occupation</option>
                <option value="Model">Model</option>
              </Select>
              <Select className="staff__role" defaultValue="" name='employeeRole' onChange={this.handleInputChange}>
                <option value='' disabled hidden>Role</option>
                <option value="Brand Ambassador">Brand Ambassador</option>
              </Select>
              <Select className="staff__gender" defaultValue="" name='employeeGender' onChange={this.handleInputChange}>
                <option value='' disabled hidden>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
              <TextField variant="outlined" className="staff__rate" name='employeePay' type="number" min='1' label='Hourly Rate' onChange={this.handleInputChange} />
              <TextField variant="outlined" className="staff__number_to_hire" name='employeeNumber' type="number" min='1' label='Number of Talent' onChange={this.handleInputChange} />
              <TextField variant="outlined" className="staff__attire" name='employeeAttire' type="text" label='Attire' onChange={this.handleInputChange} />
              <TextField variant="outlined" className="staff__notes" name='employeeNotes' type="text" label='Notes' onChange={this.handleInputChange} />
            </div>
            <p style={{ "textAlign": "center" }}>+</p> {/*placeholder*/}
          </section>
        </div>
      </div>
      </MuiPickersUtilsProvider>
    )
  }
}

export default withStyles(styles)(CreateEvent)