import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';


import Footer from '../Footer/Footer';
import Header from '../Header/Header'



const pageToRender = (history) =>(
  <div>
    <Header history={history}/>
    <h1> Este son los tips de actividades</h1>
    <Footer/>
  </div>
);


class TipActivities extends Component {
  
  constructor(props){
    super(props)
    this.state ={
      mode: this.props.nombre
    }
  }

  RenderBody = () =>{
    if(this.state.mode.match.params.nombre == this.props.name){
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

const mapStateToProps = (state) =>{
  return {
    id: state.id,
    name: state.name
  }
}
export default withRouter(connect(mapStateToProps, null)(TipActivities));
