import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect, withRouter } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'


const pageToRender = (history) =>(
  <div>
        <Header history={history}/>
        <h1>Este son las actividades físicas</h1>
        <Footer/>
  </div>
);

class PhyActivities extends Component {

  RenderBody = () =>{
    if(this.props.name !== null){
        return (pageToRender(this.props.history));
    }else {
      return (<Redirect to="/"/>);
    }
  }

  render() {
    return (
      <div>
        <this.RenderBody/>
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
export default withRouter(connect(mapStateToProps, null)(PhyActivities));
