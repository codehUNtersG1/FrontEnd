import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

class UserPhyActivities extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <h1> Este son las actividades físicas de un usuario</h1>
        <Footer/>
      </div>
    );
  }
}

export default UserPhyActivities;
