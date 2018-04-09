export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state')
    console.log("el estado", serializedData)
    if (serializedData === null){
      return {
        id: null,
        name: null
      }
    } 
    return JSON.parse(serializedData) // Si encontramos con exito nuestro storage lo devolvemos.
  } catch (error) {
    return {
      id: null,
      name: null
    }
  }
}

export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state)
    console.log("serializador", serializedData)
    localStorage.setItem('state', serializedData)
  } catch (error) {
    console.log("imprime",error)
	// Acá podemos capturar o crear cualquier log que deseemos en caso de que falle el salvado en el storage.    
  }
}