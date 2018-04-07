import React, { Component } from 'react';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Profile.css';


class Profile extends Component {

  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <h1>Esta es mi perfil de usuario</h1>
        <Footer/>
      </div>
    );
  }
}

export default Profile;
