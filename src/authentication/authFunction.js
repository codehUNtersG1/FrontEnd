import React from 'react';
import { connect } from 'react-redux';
export default function (ComposedComponent){
    class Authenticate extends React.Component{
        componentWillMount(){
            if (this.props.name !== this.props.match.params.nombre){
                this.props.history.push('/');
            }
        }
        render(){
            return(
                <ComposedComponent {...this.props}/>
            );
        }
    }
    const mapStateToProps = (state) => {
        return {
            id: state.id,
            name: state.name
        }
    }
    return connect(mapStateToProps, null)(Authenticate);

}