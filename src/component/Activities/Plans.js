import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header'

class Plans extends Component {
  
  render() {
    if (this.props.user !== null){
      return (
        <div>
          <Header/>
          <h1> Este son los planes</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Plans);
