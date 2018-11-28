import React, { Component } from 'react';
import './ConnectSocial.scss';

import { NavLink } from 'react-router-dom';

class ConnectSocial extends Component {

  render() {
    return (
      <div className="connect-social">
        <div className="connect-social-media-container">
          <div className="connected-status">%</div>
          <button>LinkedIn</button>
        </div>
        <div className="connect-social-media-container">
          <div className="connected-status">%</div>
          <button>Facebook</button>
        </div>
        <div className="connect-social-media-container">
          <div className="connected-status">X</div>
          <button>Instagram</button>
        </div>
        <NavLink to='/dashboard'>Finish</NavLink>
      </div>
    )
  }
}

export default ConnectSocial;