import React, { Component } from 'react';
import './ClientScreen.scss';
import { Route } from 'react-router-dom';

//Components
import MobileFooter from '../../ModelSide/MobileFooter/MobileFooter.jsx';
import CreateEvent from '../CreateEvent/CreateEvent';

export default class ClientScreen extends Component {

  render() {
    return (
      <div className="user-client-screen">
        <Route
          path='/user/client/events/create'
          component={CreateEvent} />
        <Route
          path='/user/'
          component={MobileFooter} />
      </div>
    )
  }
}