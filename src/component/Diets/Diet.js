import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header'

class Diet extends Component {
  
  render() {
      return (
        <div>
          <Header history={this.props.history}/>
          <h1> Este es una dieta</h1>
          <Footer/>
        </div>
      );
    }
  }

export default Diet;
  