import React, { Component } from 'react';
<<<<<<< HEAD
import '../../style/bootstrap.min.css';
import logo from '../../image/logo.png';
=======
>>>>>>> 8f5b8527e85aed45565c0c91b3b868db463bdcae
import './Header.css';

class Header extends Component {
  
  render() {
    return (
<<<<<<< HEAD
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img class="navbar-brand" src={logo}></img>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse show">
          <ul class="navbar-nav mr-auto" id="navb">
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">Perfil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0)">Dietas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="javascript:void(0)">Ejercicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="javascript:void(0)">Grupos</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" id="search" type="text" placeholder="Search"/>
            <button class="btn btn-success my-2 my-sm-0" id="search" type="button">Search</button>
          </form>
        </div>
      </nav>
=======
      <div>
        <h1> Este es el Header</h1>
      </div>
>>>>>>> 8f5b8527e85aed45565c0c91b3b868db463bdcae
    );
  }
}

export default Header;
<<<<<<< HEAD


=======
>>>>>>> 8f5b8527e85aed45565c0c91b3b868db463bdcae
