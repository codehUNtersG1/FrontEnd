import React, { Component } from 'react';
import logo from '../../image/logo3.png';
import LogIn from './GLogIn';
import video from '../../video/walk.mp4';
import '../../style/fontello.css';
import './custom.css';


class Landing extends Component {

  render() {
    return (
      <div>
        <video id="background-video" autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div class="row" id="log">
          <img id="logo"src={logo} alt="UBUNG"/>    
          <div class="container" id="register">
            <h3 id="slogan"><i><b>Come bien. Ejercítate. Vive Mejor!</b></i></h3>
            <LogIn/>
          </div>
        </div>
        <input type="checkbox" class="checkbox" id="check"/>
        <label class="menu" for="check"><span class="icon-question"></span></label>
        <div class="left-panel">
          <div class="container">
            <h2><b>Preguntas Frecuentes</b></h2>
            <button id="pbtn" class="w3-bar" data-toggle="collapse" data-target="#qUB">¿Qué es UBUNG?</button>
            <div id="qUB" class="collapse ans">
              Ubung es un website diseñado para el .....Universidad Nacional de Colombia.
            </div>
            <button id="pbtn" class="w3-bar" data-toggle="collapse" data-target="#quso">¿Quién puede usarlo?</button>
            <div id="quso" class="collapse ans">
              Ubung es un website diseñado para el uso de cualquier integrante de la comunidad de la Universidad Nacional de Colombia.
            </div>
            <button id="pbtn" class="w3-bar" data-toggle="collapse" data-target="#off">¿Es una web oficial?</button>
            <div id="off" class="collapse ans">
              Ubung no es una web oficial de la Universidad Nacional de Colombia.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
