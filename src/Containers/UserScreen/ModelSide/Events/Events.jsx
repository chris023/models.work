import React, { Component } from 'react';
import './Events.scss';

class Events extends Component {

  render() {
    return (
      <div className="user-screen-model-events">
        <header className="user-screen-model-events-header">
          <input type="text" placeholder="Search"/>
          <button>SearchGlass</button>
        </header>
        <section className="user-screen-model-events-main-content-container">
          <div className="user-screen-model-events-event-card">
            <div className="user-screen-model-events-event-card-header">
              <div className="user-screen-model-events-event-card-header-info-container">
                <p className="user-screen-model-events-event-card-header-info-location">Miami Beach</p>
                <p className="user-screen-model-events-event-card-header-info-type">Brand Ambassador</p>
              </div>
              <div className="user-screen-model-events-event-card-header-date-time-container">
                <p className="user-screen-model-events-event-card-header-date">December 20, 2029</p>
                <p className="user-screen-model-events-event-card-header-time">2:00 - 8:00</p>
              </div>
            </div>
            <div className="user-screen-model-event-card-info-container">
              <div className="user-screen-model-event-card-info-application-status-container">
                <p className="user-screen-model-event-card-info-application-status-text">POSITIONS AVAILABLE</p>
                <h2 className="user-screen-model-event-card-info-application-status-number">5</h2>
              </div>
              <div className="user-screen-model-event-card-info-payment-container">
                <h1 className="user-screen-model-event-card-info-payment">$14</h1>
                <p className="user-screen-model-event-card-info-payment-rate">/hr</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Events;