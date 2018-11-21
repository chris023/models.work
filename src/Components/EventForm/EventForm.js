import React, { Component } from 'react';
import './EventForm.css';
import Calendar from 'react-calendar';
import { db } from '../../firebase';

class EventForm extends Component {
  constructor() {
    super()

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
      eventNotes: ''
    }
  }

  handleCalendarSelection = eventDate => this.setState({ eventDate});

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleFormSubmit = () => {
    db.collection("events").add(this.state)
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  render() {
    return (
      <div className='event-form'>
        <section className="event-info">
          <p className='event-form-progress-label'>1</p>
          <input name='eventTitle' type="text" placeholder='Event Title' value={this.state.eventTitle} onChange={this.handleInputChange}/>
          <select className="eventForm-event-type-select" name='eventType' value={this.state.eventType} onChange={this.handleInputChange}>
            <option value='' disabled selected>Event Type</option>
            <option value="On Premise">On Premise</option>
            <option value="Off premise">Off Premise</option>
            <option value="Special Event">Special Event</option>
            <option value="Logistics">Logistics</option>
            <option value="Strike Crew">Strike Crew</option>
            <option value="Social Media">Social Media</option>
          </select>
          <Calendar onChange={this.handleCalendarSelection} value={this.state.eventDate}/>
          <input name='eventTime' type="text" placeholder='Time' value={this.state.eventTime} onChange={this.handleInputChange}/>
          <input name='eventBrand' type="text" placeholder='Event Brand' value={this.state.eventBrand} onChange={this.handleInputChange}/>
        </section>
        <section className="venue-info">
          <p className='event-form-progress-label'>2</p>
          <input name='venueName' type="text" placeholder='Venue Name' value={this.state.venueName} onChange={this.handleInputChange}/>
          <input name='venueAddress' type="text" placeholder='Address' value={this.state.venueAddress} onChange={this.handleInputChange}/>
          <div className="venue-contact-person">
            <input name='venueContactName' type="text" placeholder='Name' value={this.state.venueContactName} onChange={this.handleInputChange}/>
            <input name='venueContactEmail' type="text" placeholder='Email' value={this.state.venueContactEmail} onChange={this.handleInputChange}/>
            <input name='venueContactPhone' type="text" placeholder='Phone Number' value={this.state.venueContactPhone} onChange={this.handleInputChange}/>
          </div>
        </section>
        <section className="staffing-info">
          <p className='event-form-progress-label'>3</p>
          <label htmlFor="employee-dropdown">Employee Type:</label>
          <select className="employee-type" name="employee-dropdown" name='employeeType' value={this.state.employeeType} onChange={this.handleInputChange}>
            <option value='' disabled selected>Model Type</option>
            <option value="Brand Ambassador">Brand Ambassador</option>
            <option value="Brand Model">Brand Model</option>
            <option value="Promotional Model">Promotional Model</option>
            <option value="Bikin Model">Bikin Model</option>
            <option value="Spokes Model">Spokes Model</option>
            <option value="Atmosphere Model">Atmosphere Model</option>
            <option value="Video Model">Video Model</option>
            <option value="Bartender">Bartender</option>
            <option value="Actor/Actress">Actor/Actress</option>
          </select>
          <input name='employeeNumber' type="number" min='1' placeholder='Number of Talent' value={this.state.employeeNumber} onChange={this.handleInputChange}/>
          <input name='employeeAttire' type="text" placeholder='Attire' value={this.state.employeeAttire} onChange={this.handleInputChange}/>
          <input name='employeeTask' type="text" placeholder='Responsibilities' value={this.state.employeeTask} onChange={this.handleInputChange}/>
        </section>
        <section>
          <p className='event-form-progress-label'>4</p>
          <input name='eventNotes' type="text" placeholder='Addtional Notes' value={this.state.eventNotes} onChange={this.handleInputChange}/>
          <button className="event-form-submit-button" onClick={this.handleFormSubmit}>Submit</button>
        </section>
      </div>
    )
  }
}

export default EventForm 