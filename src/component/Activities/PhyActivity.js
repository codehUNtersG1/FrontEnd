import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';



import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './activity.css';

const pageToRender = (history) =>(
  <div>
    <Header history={history}/>
    <div class="jumbotron">
      <h1><b>¡Bienvenido a un mundo activo!</b></h1>
    </div>
    <div class="container">
      <div class="row">
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

class PhyActivity extends Component {
  

  RenderBody = () =>{
    if(this.props.id !== null){
        return (pageToRender(this.props.history));
    }else {
      return (<Redirect to="/"/>);
    }
  }

  render() {
    return (
      <this.RenderBody/>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    id: state.id,
    name: state.name
  }
}
export default withRouter(connect(mapStateToProps, null)(PhyActivity));
