import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';

import Header from '../Header/Header'
import Footer from '../Footer/Footer';


const pageToRender = (history) =>{
  <div>
    <Header history={history}/>
    <h1> Este son los tips de dieta</h1>
    <Footer/>
  </div>
}


class TipDiets extends Component {
  
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
      <div>
        <Header/>
        <h1> Este son los tips de dieta</h1>
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
export default withRouter(connect(mapStateToProps, null)(TipDiets));
