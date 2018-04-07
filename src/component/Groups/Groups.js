import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';


class Groups extends Component {
  
  render() {
    return (
      <div>
      <Header history={this.props.history}/>
        <h1> Este es la página de grupos</h1>
      <Footer/>
    </div>
    );
  }
}

export default Groups;
