import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

class Event extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <h1> Este es la página de un Evento</h1>
        <Footer/>
      </div>
    );
  }
}

export default Event;
