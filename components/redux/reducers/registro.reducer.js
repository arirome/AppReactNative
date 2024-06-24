
import {
    FETCH_REGISTRO_SUCCESS,
    FETCH_REGISTRO_ERROR,
 
  } from "../type/types";
  
  //representa el punto de partida para los datos de la aplicación administrados por ese reductor en particular.
  const INITIAL_STATE = {
  isLoading: false, //si el reductor está actualmente obteniendo datos de una API o realizando alguna operación asincrónica relacionada con el registro
  error: null,
    data: [],
    
  };
  
  
  //La función debe tomar dos argumentos:
  //state: el estado actual, inicializado con INITIAL_STATE como valor predeterminado
  //action: el objeto de acción que encapsula el evento que desencadena la actualización del estado.
  const someReducer = (state = INITIAL_STATE, action) => {

    //desestructura las propiedades de type y payload del objeto de acción y las asigna a variables separadas
    //Esto permite que el reductor acceda y utilice fácilmente los datos de type y payload de la acción para actualizaciones de estado. 
    const { type, payload } = action;

    // el switch en este caso nos proporciona una forma clara y concisa de asignar 
    //tipos de acciones a una lógica de actualización de estado específica
    switch (type) {
      
      case FETCH_REGISTRO_SUCCESS:
        return {
          isLoading: false, 
          error: false,
          data: payload,
          
        };

      case FETCH_REGISTRO_ERROR:
        return {
          isLoading: false,
          error: payload
         
        };
      
     //manejamos los  tipos de acciones que no coinciden con ninguno de los casos definidos en la declaración de cambio
     // y se debe devolver el estado actual
      default:
        return state;
    }
  };
  
  export default someReducer;  
  