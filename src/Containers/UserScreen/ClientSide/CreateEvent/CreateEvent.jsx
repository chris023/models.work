import React, { Component } from 'react';
import { db } from '../../../../firebase';
import { Calendar } from 'react-calendar';

import './CreateEvent.scss';

export default class CreateEvent extends Component {
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

  handleCalendarSelection = eventDate => this.setState({ eventDate: eventDate.target.value });

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
      <div className="CreateEvent">
        <div className="header">
          <p className="header__title">Create Event</p>
          <button className="header__button" onClick={this.addEvent}>Create</button>
        </div>
        <div className="event_form" action="">
          <section className="event_info">
            <input className="event_info__title" name='eventTitle' type="text" placeholder='Event Title' value={this.state.eventTitle} onChange={this.handleInputChange} />
            <select className="event_info__event_type" defaultValue="" name='eventType' onChange={this.handleInputChange}>
              <option value='' disabled hidden>Event Type</option>
              <option value="On Premise">On Premise</option>
              <option value="Off premise">Off Premise</option>
              <option value="Special Event" disabled>Special Event</option>
              <option value="Logistics" disabled>Logistics</option>
              <option value="Strike Crew" disabled>Strike Crew</option>
              <option value="Social Media" disabled>Social Media</option>
            </select>
            <input type="date" onChange={this.handleCalendarSelection} value={this.state.eventDate} />
            <input name='eventTime' type="text" placeholder='Time' value={this.state.eventTime} onChange={this.handleInputChange} />
            <input name='eventBrand' type="text" placeholder='Event Brand' value={this.state.eventBrand} onChange={this.handleInputChange} />
          </section>
          <section className="venue_info">
            <p className="venue_info__title">Venue Info</p>
            <input className="venue_info__name" name='venueName' type="text" placeholder='Venue Name' value={this.state.venueName} onChange={this.handleInputChange} />
            <input className="venue_info__address" name='venueAddress' type="text" placeholder='Address' value={this.state.venueAddress} onChange={this.handleInputChange} />
          </section>
          <section className="venue_contact">
            <p className="venue_contact__title">Venue Contact</p>
            <input className="venue_contact__name" name='venueContactName' type="text" placeholder='Name' value={this.state.venueContactName} onChange={this.handleInputChange} />
            <input className="venue_contact__email" name='venueContactEmail' type="text" placeholder='Email' value={this.state.venueContactEmail} onChange={this.handleInputChange} />
            <input className="venue_contact__phone" name='venueContactPhone' type="text" placeholder='Phone Number' value={this.state.venueContactPhone} onChange={this.handleInputChange} />
          </section>
          <section className="staffing">
            <div className="staff_1">
              <p className="staffing__title">Add Staffing</p>
              <select className="staff__occupation" defaultValue="" name='employeeOccupation' onChange={this.handleInputChange}>
                <option value='' disabled hidden>Staff Occupation</option>
                <option value="Model">Model</option>
              </select>
              <select className="staff__role" defaultValue="" name='employeeRole' onChange={this.handleInputChange}>
                <option value='' disabled hidden>Role</option>
                <option value="Brand Ambassador">Brand Ambassador</option>
              </select>
              <select className="staff__gender" defaultValue="" name='employeeGender' onChange={this.handleInputChange}>
                <option value='' disabled hidden>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input className="staff__rate" name='employeePay' type="number" min='1' placeholder='Hourly Rate' onChange={this.handleInputChange} />
              <input className="staff__number_to_hire" name='employeeNumber' type="number" min='1' placeholder='Number of Talent' onChange={this.handleInputChange} />
              <input className="staff__attire" name='employeeAttire' type="text" placeholder='Attire' onChange={this.handleInputChange} />
              <input className="staff__notes" name='employeeNotes' type="text" placeholder='Notes' onChange={this.handleInputChange} />
            </div>
            <p style={{ "textAlign": "center" }}>+</p> {/*placeholder*/}
          </section>
        </div>
      </div>
    )
  }
}