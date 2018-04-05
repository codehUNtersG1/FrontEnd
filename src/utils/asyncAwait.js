import api from './api'

function asyncAwait(asyncResolver) {
    return store => next => action => {
      // despachamos la acción normalmente
      const result = next(action);
      // ejecutamos el asyncResolver pasándole
      // la acción y la función dispatch
      asyncResolve(action, store.dispatch);
      // retornamos la acción despachada
      return result;
    };
}

export default asyncAwait;