import React, { Component } from 'react';
import './Events.scss';

class Events extends Component {

  render() {
    return (
      <div className="Events">
        <header className="search">
          <input className="search__input" type="text" placeholder="Search"/>
          <button className="search__button">Search</button>
        </header>
        <section className="content">
          <div className="event_card">
            <div className="card_header">
              <p className="card_header__location">Miami Beach</p>
              <p className="card_header__date">December 20, 2029</p>
              <p className="card_header__role">Brand Ambassador</p>
              <p className="card_header__time">2:00 - 8:00</p>
            </div>
            <div className="card_seperator"></div>
            <div className="card_footer">
              <div className="card_footer__pos_available">
                <p className="amount">5</p>
                <p>POSITIONS AVAILABLE</p>
              </div>
              <div className="card_footer__hourly_rate">
                <p><span className="rate">$14</span>/hr</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Events;