import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class Foods extends Component {
  
  render() {
    if (this.props.user !== null){
      return (
        <div>
          <Header/>
          <h1> Estas son las comidas de una dieta</h1>
        </div>
      );
    } else{
      return(<h1> Esta vista no esta permitida </h1>);
    }
  }
}
const mapStateToProps = (state) =>{
  console.log(state);
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch =>{
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps) (Foods);
