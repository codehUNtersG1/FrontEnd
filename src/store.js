import { createStore, applyMiddleware } from 'redux';

const reducer = (state, action) =>{

    if (action.type === "LOG_IN"){
        
        return {
            ...state,
            id: action.id,
            name: action.name
            
        }
    } else if (action.type === "LOG_OUT"){
        return {
            ...state,
            id: null,
            name: null
            
        }
    }else{
        return state;
    }

}

const initialState ={   
    id: null,
    name: null
}

const logger = store => next => action => {
    console.log('Realizó método dispatch para: ', action);
    let result = next(action);
    console.log('El estado es ahora: ', store.getState());
    return result;
}
export default createStore(reducer, initialState, applyMiddleware(logger) );