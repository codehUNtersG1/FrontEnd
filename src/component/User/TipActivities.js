import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';

class TipActivities extends Component {
  
  render() {
    if (this.props.user !== null){
      return (
        <div>
          <Header/>
          <h1> Estos son los tips de actividades</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(TipActivities);
