import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import './useractivity.css';


class UserPhyActivities extends Component {
  constructor(props){
    super(props);
    this.state = {
      tipAct: [],
      activityInfo: [],
    }
  }
  
  render() {
    return (
    <div>
    <Header history={this.props.history}/>
    <div class="jumbotron" id="jumb">
      <h1><b>Mis actividades</b></h1>
    </div>
    <div className="row">
      <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
        <div className="container">
          <h1>Mis actividades</h1>
          <hr/>
          <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <h2>Actividad</h2>
                <ul class="list-group conlis">
                  <li class="list-group-item">Nombre:</li>
                  <li class="list-group-item">Descripcion:</li>
                  <li class="list-group-item">Duracion:</li>
                  <li class="list-group-item">Creada:</li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4"></div>
          </div>         
        </div>
      </div>
      <div className="col-xs-0 col-sm-4 col-md-4 col-lg-4" id="Tips">
        <div className="container">
          <h1>Tips</h1>
          <hr/>
          <ul class="list-group conlis">
            <li class="list-group-item">The endpoint info here</li>
            <li class="list-group-item">The endpoint info here</li>
          </ul>
          
          <hr/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
    );
  }

}

export default UserPhyActivities;
