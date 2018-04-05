import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Profile.css';

class Profile extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return (
      <div>
        <Header/>
        <Footer/>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    id: state.id,
    name: state.name
  }
} 
export default connect(mapStateToProps, null)(Profile);
