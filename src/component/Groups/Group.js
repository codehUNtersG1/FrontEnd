import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class Group extends Component {
  

  render() {
    return (
      <div>
        <Header history={this.props.history}/>
        <h1> Este es la página de un grupo</h1>
        <Footer/>
      </div>
    );
  }
}

export default Group;
