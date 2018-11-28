import React, { Component } from 'react';
import './Dashboard.scss';

class Dashboard extends Component {

  render() {
    return (
      <div className="user-screen-model-dash">
        <header className="user-screen-model-dash-header">
          <div className="user-screen-model-dash-header-top">
            <p className="user-screen-model-dash-greeting">Hi, Christian</p>
          </div>
          <div className="user-screen-model-dash-header-bottom">
            <div className="user-screen-model-dash-upcoming-events-container">
              <h1 className="user-screen-model-dash-upcoming-events-number">4</h1>
              <p className="user-screen-model-dash-upcoming-events-label">Upcomping Events</p>
            </div>
            <div className="user-screen-model-dash-completed-events-container">
              <p className="user-screen-model-dash-completed-events-label">Events Completed</p>
            <h1 className="user-screen-model-dash-completed-events-number">12</h1>
            </div>
          </div>
        </header>
        <h1>CALENDAR FILLER</h1>
      </div>
    )
  }
}

export default Dashboard; 