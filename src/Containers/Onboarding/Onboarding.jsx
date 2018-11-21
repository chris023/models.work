import React, { Component } from 'react';

import './Onboarding.css';


class Onboarding extends Component {
  constructor() {
    super()

    this.state = {
      gender: 'female'
    }
  }

  handleGenderSelect = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value})
  }

  render() {
    return (
      <div className="onboarding">
        <input type="radio" name="gender" value="male" selected onClick={this.handleGenderSelect}/> <p>Female</p>
        <input type="radio" name="gender" value="female" onClick={this.handleGenderSelect}/> <p>Male</p>
        <input type="text" className="onboarding-form" placeholder='First Name'/>
        <input type="text" className="onboarding-form" placeholder='Last Name'/>
        <input type="text" className="onboarding-form" placeholder='Email'/>
        <input type="text" className="onboarding-form" placeholder='Phone'/>
        <input type="text" className="onboarding-form" placeholder='City'/>
        <input type="text" className="onboarding-form" placeholder='Date of Birth'/>
        <input type="text" className="onboarding-form" placeholder='Bio'/>
        <input type="text" className="onboarding-form" placeholder='Height'/>
        <input type="text" className="onboarding-form" placeholder='Waist'/>
        <input type="text" className="onboarding-form" placeholder='Bust'/>
        <input type="text" className="onboarding-form" placeholder='Hips'/>
        <input type="text" className="onboarding-form" placeholder='Dress Size'/>
        <input type="text" className="onboarding-form" placeholder='Shoe Size'/>
        <input type="text" className="onboarding-form" placeholder='Hair Color'/>
        <input type="text" className="onboarding-form" placeholder='Eye Color'/>
        <p>image upload x3</p>
      </div> 
    )
  }
}

export default Onboarding;