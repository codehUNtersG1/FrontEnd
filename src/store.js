import { createStore, applyMiddleware } from 'redux';
import {loadState, saveState} from './storage';
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
const persistedState = () =>{
    console.log("deberia ser yo",loadState())
    return loadState();
}


const logger = store => next => action => {
    console.log('Realizó método dispatch para: ', action);
    let result = next(action);
    saveState(store.getState())
    console.log('El estado es ahora: ', store.getState());
    return result;
}

export const store = createStore(
  reducer,
  persistedState(),
  applyMiddleware(logger)
)
