import React, { Component } from 'react';
import './ModelScreen.scss';
import { Route } from 'react-router-dom';

//components
import BasicInfo from '../BasicInfo/BasicInfo';
import ConnectSocial from '../ConnectSocial/ConnectSocial';

class ModelScreen extends Component {

  render() {
    return (
      <div className="ModelScreen">
        <Route exact path='/onboard/model-onboard/'
               component={BasicInfo} />
        <Route path='/onboard/model-onboard/connect-social'
               component={ConnectSocial} />
      </div>
    )
  }
}

export default ModelScreen;