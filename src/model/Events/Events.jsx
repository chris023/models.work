import React, { Component } from 'react';
import './Events.scss';
import { connect } from 'react-redux';

import { getEvents } from '../../shared/firebase/api/index';
import { addEvents } from '../../shared/redux/actions/index';

class Events extends Component {

  async componentDidMount() {
    if (!this.props.events.length) {
      const events = await getEvents();
      this.props.addEvents(events)
    }
  }

  renderEvents = () => {
    if (this.props.events.length) {
      return this.props.events.map( event => {
        const eventData = Object.values(event)
        const { location, date, time, role, availability, pay} = eventData[0]
        return (
          <div className="event_card">
            <div className="card_header">
              <p className="card_header__location">{location}</p>
              <p className="card_header__date">{date}</p>
              <p className="card_header__role">{role}</p>
              <p className="card_header__time">{time}</p>
            </div>
            <div className="card_seperator"></div>
            <div className="card_footer">
              <div className="card_footer__pos_available">
                <p className="amount">{availability}</p>
                <p>POSITIONS AVAILABLE</p>
              </div>
              <div className="card_footer__hourly_rate">
                <p><span className="rate">${pay}</span>/hr</p>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return (
        <h2>LOADING.....</h2>
      )
    }
  }

  render() {
    return (
      <div className="Events">
        <header className="search">
          <input className="search__input" type="text" placeholder="Search"/>
          <button className="search__button">Search</button>
        </header>
        <section className="content">
          {this.renderEvents()}
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = dispatch => ({
  addEvents: events => dispatch(addEvents(events))
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);