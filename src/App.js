import React, { Component } from 'react';
import logo from './image/logo3.png';
import video from './video/pictures.mp4';
import './style/bootstrap.min.css';
import './style/fontello.css';
import './style/custom.css';


import LogIn from './LogIn';
import SignUp from './SignUp';
class App extends Component {
  
  render() {
    return (
      <div>
        <video id="background-video" autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div class="row" id="log">
          <img id="logo"src={logo} alt="UBUNG"/>
          <div class="container" id="register">
            <LogIn/>
            <SignUp/>
            {/*<button class="button"><span class="icon-gplus">Login</span></button>*/}
            {/*<button class="button"><span class="icon-gplus">Singup</span></button>*/}
          </div>
        </div>
        <input type="checkbox" class="checkbox" id="check"/>
        <label class="menu" for="check"><span class="icon-question"></span></label>
        <div class="left-panel"> 
        <h2 id="faq-h2">Preguntas Frecuentes</h2>
        </div>
      </div>
    );
  }
}

export default App;
