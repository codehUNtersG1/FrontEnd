import React, { Component } from 'react';
import logo from '../../image/logo.png';
import './Header.css';

class Header extends Component {
  
  render() {
    return (
       <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <img class="navbar-brand" src={logo}/>
            </div>
            <ul class="nav navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/user/1"><b>Perfil</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost:3000/diet/1"><b>Dietas</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="http://localhost:3000/phyactivities"><b>Ejercicio</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="http://localhost:3000/groups"><b>Grupos</b></a>
            </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Header;


