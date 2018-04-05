import React, { Component } from 'react';
import '../../style/fontello.css';
import './custom.css';

import store from '../../store';
import { GoogleLogin } from 'react-google-login-component';
import { connect } from 'react-redux';
import { actionLogIn } from '../../actionCreators';

class LogIn extends Component {

	responseGoogle = (googleUser) => {
  		const userEmail = googleUser.w3.U3;
	    const id_token = googleUser.getAuthResponse();
	    const googleId = googleUser.getId();
	    
		let emailRegex = /^[-\w.%+]{1,64}@(unal.edu.co)$/i
		let userName = userEmail.substr(0, userEmail.indexOf('@')); 

	    if(emailRegex.test(userEmail)){
			console.log("Acá se debe hacer una validación en la base de datos");
			this.props.actionLogIn({id: googleId, name:userName})
			this.props.history.push(`/user/${this.props.name}`)
			
			
			
	    } else{
	    	console.log("Error, su cuenta no tiene dominio unal");
	    }
	 
  	}

	render(){
			return(
				<div>
				<GoogleLogin socialId="533966985417-7sdh67rlsfg2oil6cu62osfac89fso4q.apps.googleusercontent.com"
					className="button"
					hd ="unal.edu.co"	
					scope="profile"
					fetchBasicProfile={true}
					responseHandler={this.responseGoogle}
					buttonText="Acceder con Google"
				/>
				</div>
			);
	}
}
const mapStateToProps = state =>{
	return{
		id: state.id,
		name: state.name
	}
}
const mapDispatchToProps = dispatch =>{
	return{
		actionLogIn({id, name}){
			dispatch(actionLogIn({id, name}));
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
