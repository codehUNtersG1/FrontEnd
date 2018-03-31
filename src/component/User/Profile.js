import React, { Component } from 'react';
import './Profile.css';
import profile from '../../image/user.png';
import Header from '../Header/Header';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    if (this.props.user == this.props.id.params.id) {
      return (
        <div>
          <Header/>
          <div>
            <div class="card">
              <img id="proImg" src={profile} alt="John"/>
              <h1>John Doe</h1>
              <p class="title">CEO & Founder, Example</p>
              <p>Harvard University</p>
              <p><button>Contact</button></p>
            </div>
          </div>
        </div>
      );
    } else{
      return (<h1> No esta permitido ver esta página </h1>);
    }
  }
}


const mapStateToProps = (state) =>{
  console.log(state);
  return {
    user: 3
  };
};

const mapDispatchToProps = dispatch =>{
  return null;
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
