import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import './activity.css';


class PhyActivities extends Component {

  render() {
    return (
      <div>
      <Header history={this.props.history}/>
      <div class="jumbotron" id="jumb">
        <h1><b>¡Bienvenido a un mundo activo!</b></h1>
      </div>
      <div class="container">
        <div class="rowss">
        <h1>Tips</h1>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h2><span class="glyphicon glyphicon-knight" />  Piensa Diferente</h2>
            <br/><h4>Cambia los pensamientos que te desvían de tu objetivo.</h4>
            <hr/>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h2><span class="glyphicon glyphicon-apple"/>  Mantente Sano</h2>
            <br/><h4 class="text">Motívate a largo plazo.</h4>
            <hr/>
          </div>
          
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h2><span class="glyphicon glyphicon-apple"/>  Toma el control</h2>
            <br/><h4>Realiza tu plan de ejercicios.</h4>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h2><span class="glyphicon glyphicon-apple"/>  Transforma tu actitud</h2>
            <br/><h4>Decide intentar o darte por vencido.</h4>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    );
  } 
}
export default PhyActivities;
