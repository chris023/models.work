import React, { Component } from 'react';
import './ClientSide.scss';

class ClientSide extends Component {

  render() {
    return (
      <div className="ClientSide">
        <input type="text" className="onboard-client-side-input" placeholder="Buisness Name"/>
        <select name="" id="">
          <option value="" disabled selected>Role</option>
          <option value="Brand">Brand</option>
          <option value="Distributor">Distributor</option>
          <option value="Venue">Venue</option>
        </select>
        <p>Contact</p>
        <input type="text" className="onboard-client-side-input" placeholder="Name"/>
        <input type="text" className="onboard-client-side-input" placeholder="Phone"/>
        <input type="text" className="onboard-client-side-input" placeholder="Email"/>
        <button>Submit</button>
      </div>
    )
  }
}

export default ClientSide;