import React, { Component } from 'react';
import './Dashboard.scss';
import Calendar from '../../shared/ui/Calendar/Calendar';

class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
        <header className="header">
          <h2 className="header__greeting">Hi, Christian</h2>
          <div className="header__my_wallet">
            <h3 className="my_wallet__text">My Wallet</h3>
            <p className="my_wallet__value">$131.67</p>
          </div>
          <div className="header__upcoming_events">
            <h3 className="num">4</h3>
            <p className="text">Upcoming<br/>Events</p>
          </div>
          <div className="header__completed_events">
            <p className="text">Events<br/>Completed</p>
            <h3 className="num">12</h3>
          </div>
        </header>
        <div className="subheader">
            <p className="subheader__text">Calendar</p>
            <button className="subheader__my_events">My Events</button>
        </div>
        <Calendar />
      </div>
    )
  }
}

export default Dashboard; 