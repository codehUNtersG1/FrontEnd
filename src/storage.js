import {fromJS} from 'immutable'

export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state')
    if (serializedData === null){
      return {
        id: null,
        name: null
      }
    }
    return fromJS(JSON.parse(serializedData)) // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    return {
      id: null,
      name: null
    }
  }
}

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state.toJS())
    localStorage.setItem('state', serializedData)
  } catch (error) {
	// Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
  }
}