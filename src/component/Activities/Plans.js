import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header'


const pageToRender = (history) =>(
  <div>
    <Header history={history}/>
    <h1> Este son los planes de una actividad física</h1>
    <Footer/>
  </div>

);
class Plans extends Component {

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
const mapStateToProps = (state) =>{
  return {
    id:state.id,
    name: state.name
  }
}
export default withRouter(connect(mapStateToProps, null)(Plans));
