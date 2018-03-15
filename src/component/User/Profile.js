import React, { Component } from 'react';
import './Profile.css';
import profile from '../../image/user.png';
import Header from '../Header/Header'

class Profile extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <div>
          <div class="card">
            <img id="proImg" src={profile} alt="John"/>
            <h1>John Doe</h1>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <p><button>Contact</button></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
