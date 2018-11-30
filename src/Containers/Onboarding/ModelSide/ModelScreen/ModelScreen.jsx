import React, { Component } from 'react';
import './ModelScreen.scss';
import { Route } from 'react-router-dom';

//components
import AddPhoto from '../AddPhoto/AddPhoto';
import BasicInfo from '../BasicInfo/BasicInfo';
import BasicInfo2 from '../BasicInfo2/BasicInfo2';
import BioMetrics from '../BioMetrics/BioMetrics';
import BioMetricsF from '../BioMetricsF/BioMetricsF';
import BioMetricsM from '../BioMetricsM/BioMetricsM';
import ConnectSocial from '../ConnectSocial/ConnectSocial';
import PersonalBio from '../PersonalBio/PersonalBio';

class ModelScreen extends Component {

  render() {
    return (
      <div className="ModelScreen">
        <Route exact path='/onboard/model-onboard/'
               component={BasicInfo} />
        <Route path='/onboard/model-onboard/add-photo'
               component={AddPhoto} />
        <Route path='/onboard/model-onboard/basic-info2'
               component={BasicInfo2} />
        <Route path='/onboard/model-onboard/biometrics'
               component={BioMetrics} />
        <Route path='/onboard/model-onboard/biometrics-f'
               component={BioMetricsF} />
        <Route path='/onboard/model-onboard/biometrics-m'
               component={BioMetricsM} />
        <Route path='/onboard/model-onboard/personal-bio'
               component={PersonalBio} />
        <Route path='/onboard/model-onboard/connect-social'
               component={ConnectSocial} />
      </div>
    )
  }
}

export default ModelScreen;