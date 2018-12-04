import React, { Component } from 'react';
import './LandingPage.css';
import { connect } from 'react-redux';

class LandingPage extends Component {

  render() {
    return (
      <div className="landing-page">
        <div className="logo-container">
          <h2 className='logo'>models<span className='logo-span'>dot</span>work</h2>
          <p className='logo-sub-text sub-text-1'>Booked fast.</p>
          <p className='logo-sub-text sub-text-2'>Paid faster.</p>
        </div>
        <div className="landing-page-navigation-container">
          <button className="landing-page-navigation-button">BOOK TALENT</button>
          <button className="landing-page-navigation-button">BE A MODEL</button>
          <button className="landing-page-navigation-button">LEARN MORE</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(LandingPage) 