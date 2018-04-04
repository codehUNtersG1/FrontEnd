import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';
import { withRouter } from 'react-router-dom';




import logo from '../../image/logo3.png';
import video from '../../video/fruit.mp4';
import '../../style/bootstrap.min.css';
import '../../style/fontello.css';
import '../../style/custom.css';
import './cus.css';

import LogIn from './LogIn';
import SignUp from './SignUp';




class Landing extends Component {

  constructor(){
    super();
  }
  responseGoogle = (googleUser) => {
    const userEmail = googleUser.w3.U3;
    const id_token = googleUser.getAuthResponse();
    const googleId = googleUser.getId();
    
    let emailRegex = /^[-\w.%+]{1,64}@(unal.edu.co)$/i

    if(emailRegex.test(userEmail)){
    console.log(googleId);
    console.log(id_token);
    /*this.setState({
      name: userEmail.split("@")[0],
      id: googleId
    });*/
    console.log("Acá se debe hacer una validación en la base de datos");
    this.props.history.push('/user/3');
    } else{
      console.log("Error, su cuenta no tiene dominio unal");
    }
 
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <video id="background-video" autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
        <div class="row" id="log">
          <img id="logo"src={logo} alt="UBUNG"/>
          <div class="container" id="register">
          <GoogleLogin socialId="533966985417-7sdh67rlsfg2oil6cu62osfac89fso4q.apps.googleusercontent.com"
                className="button icon-gplus"
                hd ="unal.edu.co"	
                scope="profile"
                fetchBasicProfile={true}
                responseHandler={this.responseGoogle}
                buttonText="Login"
            />
            <SignUp/>
            {/*<button class="button"><span class="icon-gplus">Login</span></button>*/}
            {/*<button class="button"><span class="icon-gplus">Singup</span></button>*/}
          </div>
        </div>
        <input type="checkbox" class="checkbox" id="check"/>
        <label class="menu" for="check"><span class="icon-question"></span></label>
        <div class="left-panel"> 
          <div class="container">
            <div class="interior">
              <a class="btn" href="#open-modal"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span>¿Qué es UBUNG?</a>
            </div>
          </div>
          <div id="open-modal" class="modal-window">
            <div>
              <a href="#modal-close" title="Close" class="modal-close">Close</a>
              <h1>UBUNG!</h1>
              <div>Es un website que te ayudara a tener una vida mas sana en base a recomendaciones....</div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Landing);
