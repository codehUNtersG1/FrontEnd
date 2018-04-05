import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Profile.css';

const nullToRender = (history) =>(
  history.push('/')
);
const guessToRender =() =>(
  <div>
    <h1>Esta es una vista cuando uno quiere visitar el perfil de otra persona</h1>
    <Footer/>
  </div>
);
const myProfileToRender = (history) =>(
  <div>
        <Header history={history}/>
        <h1>Esta es mi perfil de usuario</h1>
        <Footer/>
  </div>
);

class Profile extends Component {

  constructor(props){
    super(props)
    this.state ={
      mode: this.props.nombre
    }
  }

  RenderBody = () =>{
    if(this.state.mode.match.params.nombre === this.props.name){
        return (myProfileToRender(this.props.history));
    }else if (this.state.mode.match.params.nombre != null){
      return guessToRender();
    } else {
      return(nullToRender(this.props.history));
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
export default withRouter(connect(mapStateToProps, null)(Profile));
