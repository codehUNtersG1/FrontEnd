import React, { Component } from 'react';
import logo from '../../image/logo.png';
import {Route, NavLink, withRouter } from 'react-router-dom';
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
      <Route>
       <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <img class="navbar-brand" src={logo} alt="logo Ubung"/>
            </div>
            <ul class="nav navbar-nav">
            <li class="nav-item">
              <NavLink className="nav-link" to={`/user/${this.props.name}`}><b>Perfil</b></NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={`/user/${this.props.name}/diets`}><b>Dietas</b></NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to={`/user/${this.props.name}/phyactivities`}><b>Ejercicio</b></NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to='/groups'><b>Grupos</b></NavLink>
            </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="" onClick={this.handleClickLogOut}><span class="glyphicon glyphicon-log-in"></span> LogOut</a></li>
            </ul>
          </div>
        </nav>
        </Route>
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


