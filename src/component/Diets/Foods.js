import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

class Foods extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <h1> Este son las comidas de una dieta</h1>
        <Footer/>
      </div>
    );
  }
}

export default Foods;
