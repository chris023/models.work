import React, { Component } from 'react';
import './AddPhoto.scss';

import { NavLink } from 'react-router-dom';

class AddPhoto extends Component {

  render() {
    return (
      <div className="add-photo">
        <h2>Add Photos To Your Public Profile</h2>
        <div>+</div>
        <div>photo placeholder</div>
        <div>photo placeholder</div>
        <div>photo placeholder</div>
        <NavLink to='/onboard/model-onboard/basic-info2'>Continue</NavLink>
      </div>
    )
  }
}

export default AddPhoto;