import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login-component';
import { actionLogIn } from '../../actionCreators';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import '../../style/bootstrap.min.css';
import '../../style/fontello.css';
import '../../style/custom.css';

class LogIn extends Component {

	constructor (props, context) {
		super(props, context);
		this.state ={
			name: "null",
			id: "null" 
		}
	}
	
  	responseGoogle (googleUser) {
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
			console.log(this.props);
			this.props.history.push("/user/3");
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
	const mapStateToProps = (state) =>{
		return null;
	};
	
	const mapDispatchToProps = dispatch =>{
		return null;
	};
	export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogIn));