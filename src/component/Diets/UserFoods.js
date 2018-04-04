import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'

class UserFoods extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <h1> Este son las comidas de una dieta de una persona</h1>
        <Footer/>
      </div>
    );
  }
}

export default UserFoods;
