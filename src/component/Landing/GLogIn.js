import React, { Component } from 'react';
import Store from '../../store';
import Cookie from 'react-cookie';
import {GoogleAPI, GoogleLogin} from 'react-google-oauth';


class GLogIn extends Component {
    

    responseGoogle = (google_response) => {
        var token = google_response.Zi;
        const requestOptions = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${google_response.Zi.accessToken}`,
            'Content-Type': 'application/json',
            'access_token': `${google_response.Zi.accessToken}`
          },
          body: JSON.stringify(token)
      }
      
      return fetch(`backend rails api url to google sign in path`, requestOptions)
        .then((response)=>{
            //console.log(Store.getState());
            //console.log(requestOptions.body);
            this.props.history.push('/user/3');
        })
        /*.then(addTodo) //Crear la accion
        .then(Store.dispatch)
        .catch(error =>{
            console.error(error)
        })
        console.log(Store.getState());
        */
    }

    render(){
        return(
            <GoogleAPI className="GoogleLogin" clientId="671570361656-35nm9i1fofjts95hv7rbk4mg5anbb8g4.apps.googleusercontent.com">
                <div>
                    <GoogleLogin height="10" 
                        width="55%" 
                        text="Acceder con Google"
                        backgroundColor="#006594d0"
                        access="offline" 
                        scope="email profile"
                        onLoginSuccess={this.responseGoogle} 
                        onFailure={this.responseGoogle}
                    />
                </div>
            </GoogleAPI>
        )
    }
} 

export default GLogIn;