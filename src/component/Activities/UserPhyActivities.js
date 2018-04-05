import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import './useractivity.css';

class UserPhyActivities extends Component {
  constructor(){
    super();
    this.state = {
      tipAct: [],
    }
  }
  
  componentWillMount() {  
    fetch('http://localhost:3000/tipactivities')
      .then((response) => {
        //return response;
        console.log(response);
      })
      .then((tipAct) => {
        this.setState({ tipAct: tipAct })
      })
  }
  render() {
    return (
      <div>
        <Header/>
        <div class="jumbotron" id="jumb">
          <h1><b>Mis actividades</b></h1>
        </div>
        <div>
          <hr/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default UserPhyActivities;
