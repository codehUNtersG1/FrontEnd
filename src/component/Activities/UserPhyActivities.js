import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';



import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import './useractivity.css';


const pageToRender = (history) =>{
  <div>
    <Header history={history}/>
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
            <li class="list-group-item">The endpoint info here{this.state.tipAct}</li>
            <li class="list-group-item">The endpoint info here</li>
          </ul>
          
          <hr/>
        </div>
      </div>
    </div>
    
    <Footer/>
  </div>

}

class UserPhyActivities extends Component {
  constructor(props){
    super(props);
    this.state = {
      tipAct: [],
      activityInfo: [],
      mode: this.props.name
    }
  }
  
  RenderBody = () =>{
    if(this.state.mode.match.params.nombre == this.props.name){
        return (pageToRender(this.props.history));
    }else {
      return (<Redirect to="/"/>);
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
  componentWillMount() {  
    fetch('http://localhost:3000/phyactivities')
      .then((response) => {
        //return response;
        console.log(response);
      })
      .then((activityInfo) => {
        this.setState({ activityInfo: activityInfo })
      })
  }
  render() {
    return (
      <this.RenderBody/>
    );
  }

}

const mapStateToProps = (state) =>{
  return {
    id: state.id,
    name: state.name
  }
}
export default withRouter(connect(mapStateToProps, null)(UserPhyActivities));
