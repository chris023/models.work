import React, { Component } from 'react';
import './EditProfile.scss';

class EditProfile extends Component {
  constructor() {
    super()

    this.state = {
      gender: 'female'
    }
  }

  renderGenderForm = () => {
    if(this.state.gender === 'female') {
      return (
        <div className="bio-metrics-f">
          <select name="" id="">
            <option value="" selected disabled>Dress Size</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
            <option value="18">18</option>
            <option value="20">20</option>
          </select>
          <p>Hips</p>
          <input type="number" min='0'/> 
          <p>in.</p>
          <p>Bust</p>
          <input type="number" min='0'/> 
          <p>in.</p>
        </div>
      )
    } else {
      return (
        <div className="bio-metrics-m">
          <input type="text" placeholder='Chest '/>
          <input type="text" placeholder='Collar'/>
          <input type="text" placeholder='Inseam'/>
          <input type="text" placeholder='Suit'/>
          <input type="text" placeholder='Sleeve'/>
        </div>
      )
    }
  }

  selectGender = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value})
  }


  render() {
    return (
      <div className="editprofile">
        <div className="add-photo">
          <h2>Add Photos To Your Public Profile</h2>
          <div>+</div>
          <div>photo placeholder</div>
          <div>photo placeholder</div>
          <div>photo placeholder</div>
        </div>
        <div className="basic-info-2">
          <input type="text" placeholder='DOB (MM/DD/YYYY)'/>
          <p>Height</p>
          <div className="height-input-container">
            <input type="number" min='0'/>
            <p>ft.</p>
            <input type="number" min='0'/>
            <p>in.</p>
          </div>
          <p>I model as a...</p>
          <select name="gender" value={this.state.gender} onChange={this.selectGender}>
            <option value="" selected disabled>Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="bio-metrics">
          <input type="text" placeholder='Hair Color'/>
          <input type="text" placeholder='Eye Color'/>
          <input type="text" placeholder='Shoe Size'/>
          <p>Waist</p>
          <input type="number" name="" id="" min='0'/>
          <p>in.</p>
        </div> 
        {this.renderGenderForm()}
        <div className="personal-bio">
          <h2>Almost There!</h2>
          <div className="short-bio-container">
            <p>Tell Us About You</p>
            <input type="text"/>
          </div>
        </div>
      </div>
    )
  }
}

export default EditProfile;