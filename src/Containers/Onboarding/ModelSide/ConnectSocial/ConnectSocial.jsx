import React, { Component } from 'react';
import './ConnectSocial.scss';

import { NavLink } from 'react-router-dom';

class ConnectSocial extends Component {

  render() {
    return (
      <div className="flex-center-col ConnectSocial">
        <div className="flex-center container--social_button">
          <div className="social_button--icon">%</div>
          <p>LinkedIn</p>
        </div>
        <div className="flex-center container--social_button">
          <div className="social_button--icon">%</div>
          <p>Facebook</p>
        </div>
        <div className="flex-center container--social_button">
          <div className="social_button--icon">X</div>
          <p>Instagram</p>
        </div>
        <NavLink className="navlink" to='/user'>Finish</NavLink>
      </div>
    )
  }
}

export default ConnectSocial;