import React, { Component } from 'react';
<<<<<<< HEAD
import './Profile.css';
import profile from '../../image/user.png';
=======

>>>>>>> 8f5b8527e85aed45565c0c91b3b868db463bdcae
import Header from '../Header/Header'

class Profile extends Component {
  
  render() {
    return (
      <div>
        <Header/>
<<<<<<< HEAD
        <div>
          <div class="card">
            <img id="proImg" src={profile} alt="John"/>
            <h1>John Doe</h1>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <p><button>Contact</button></p>
          </div>
        </div>
=======
        <h1> Este es el Perfil</h1>
>>>>>>> 8f5b8527e85aed45565c0c91b3b868db463bdcae
      </div>
    );
  }
}

export default Profile;
