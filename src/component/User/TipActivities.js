import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header'



class TipActivities extends Component {
  
  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <h1> Este son los tips de actividades</h1>
        <Footer/>
      </div>
    );
  }
}

export default TipActivities;
