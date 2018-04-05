import api from './api';

async function requestPost(payload, dispatch) {
  try {
    // hacemos el request
    const data = await api.posts.read(payload.id);
    // despachamos una acción con los datos
    dispatch({
      type: 'POST_SUCCEED',
      payload: data,
    });
  } catch (error) {
    // despachamos el error para mostrarlo en la UI
    return dispatch({
      type: 'POST_FAILED',
      payload: error.message,
      error: true,
    });
  }
}
async function asyncResolve(action, dispatch) {
  switch (action.type) {
    case 'POST_REQUEST':
      return requestPost(action.payload, dispatch);
    default:
      return action;
  }
}
export default asyncResolver;