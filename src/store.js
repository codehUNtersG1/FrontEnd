import { createStore, applyMiddleware } from 'redux';

const reducer = (state = { user: 9999 }, action) =>{

    if (action.type === "LOG_IN"){
        return {
            ...state,
            user: state.user
        }
    } else if (action.type === "LOG_OUT"){
        return {
            ...state,
            user: null
        }
    }else{
        return state;
    }

}

const initialState ={   
    user: null
}

const logger = store => next => action => {
    console.log('Realizó método dispatch para: ', action);
    let result = next(action);
    console.log('El estado es ahora: ', store.getState());
    return result;
}
export default createStore(reducer, initialState, applyMiddleware(logger) );