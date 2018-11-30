import React, { Component } from 'react';
import './Dashboard.scss';

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
        <header className="Dashboard__header">
          <h2 className="header__greeting">Hi, Christian</h2>
          <div className="header__my_wallet">
            <h3 className="my_wallet__text">My Wallet</h3>
            <p className="my_wallet__value">$131.67</p>
          </div>
          <div className="header__upcoming_events">
            <h3 className="upcoming_events__num">4</h3>
            <p className="upcoming_events__text">Upcoming Events</p>
          </div>
          <div className="header__completed_events">
            <p className="completed_events__text">Events Completed</p>
          <h3 className="completed_events__num">12</h3>
          </div>
        </header>
        <section className="Dashboard__container">
          <div className="Dashboard__subheader">
              <p className="subheader__text">Calendar</p>
              <button className="subheader__my_events">My Events</button>
          </div>
          <p>CALENDAR FILLER</p>
        </section>
      </div>
    )
  }
}

export default Dashboard; 