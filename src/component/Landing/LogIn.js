import React, { Component } from 'react';
import '../../style/fontello.css';
import './custom.css';


import { GoogleLogin } from 'react-google-login-component';


class LogIn extends Component {

	constructor (props, context) {
    	super(props, context);
  	}

  	responseGoogle (googleUser) {
  		const userEmail = googleUser.w3.U3;
	    const id_token = googleUser.getAuthResponse();
	    const googleId = googleUser.getId();
	    
	    let emailRegex = /^[-\w.%+]{1,64}@(unal.edu.co)$/i

	    if(emailRegex.test(userEmail)){
	    	console.log("Acá se debe hacer una validación en la base de datos");
	    	console.log(googleUser);
	    	console.log({accessToken: id_token});
	    } else{
	    	console.log("Error, su cuenta no tiene dominio unal");
	    }
	 
  	}

	render(){
		return(
			<GoogleLogin socialId="533966985417-7sdh67rlsfg2oil6cu62osfac89fso4q.apps.googleusercontent.com"
                className="button icon-gplus"
                hd ="unal.edu.co"	
                scope="profile"
                fetchBasicProfile={true}
                responseHandler={this.responseGoogle}
                buttonText="Login"
            />
		);
	}
}


export default LogIn;