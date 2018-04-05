import React, { Component } from 'react';
import logo from '../../image/logo.png';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionLogOut } from '../../actionCreators'; 
import './Header.css';


class Header extends Component {
  handleClickLogOut = () =>{
    this.props.actionLogOut()
    this.props.history.push('/')
  }
  render() {
    return (
      <Router>
       <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <img class="navbar-brand" src={logo} alt="logo Ubung"/>
            </div>
            <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href={"http://localhost:3000/user/" + this.props.name}><b>Perfil</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={"http://localhost:3000/user/" + this.props.name + "/diets"}><b>Dietas</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href={"http://localhost:3000/user/" + this.props.name + "/phyactivities"}><b>Ejercicio</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="http://localhost:3000/groups"><b>Grupos</b></a>
            </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#" onClick={this.handleClickLogOut}><span class="glyphicon glyphicon-log-in"></span> LogOut</a></li>
            </ul>
          </div>
        </nav>
        </Router>
    );
  }
}
const mapStateToProps = (state) =>{
  return{
    id: state.id,
    name: state.name
  }
}
const mapDispatchToProps = (dispatch) =>{
  	return{
		actionLogOut(){
			dispatch(actionLogOut());
		}
	}
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));


