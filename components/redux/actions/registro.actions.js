
//el tipo de evento que se realizará
import { FETCH_REGISTRO_SUCCESS, FETCH_REGISTRO_ERROR } from "../type/types";

//La constante BASE_URL actúa como una ubicación central para almacenar la URL
// base del servidor o aplicación web con la que desea interactuar.
const BASE_URL = 'http://192.168.33.88:3000';//agregamos nuestra ip y el puerto del servidor

import axios from 'axios'

//Definimos creadores de acciones para cada tipo de acción,
// que devuelven objetos de acción simples con el tipo y la carga útil adecuados.
  
  export const fetchDataSuccess = (data) => ({
    type: FETCH_REGISTRO_SUCCESS,
    payload: data /* Contiene información adicional relevante para la acción que se está enviando */
  });
  
  export const fetchDataFailure = (error) => ({
    type: FETCH_REGISTRO_ERROR,
    payload: error
  });
  
 
  //devolvemos una función.Esta función recibe dispatch como argumentos,
  //lo que nos permite enviar acciones y acceder al estado actual de Redux.
  export const fetchData = (email, password) => {
    return async (dispatch) => {

      //define un objeto de configuración llamado config que se usa comúnmente para realizar solicitudes HTTP en bibliotecas de JavaScript como Axios o Fetch API
        const config = {headers : {'Content-Type':'application/json'}}


        const body = JSON.stringify({email, password})/*este método toma el objeto creado mediante la desestructuración y lo convierte en una representación de cadena JSON. */

      try {

        const res = await  axios.post(`${BASE_URL}/users`, body, config)

        console.log("res",res)
 // dispatch: enviar acciones a la tienda Redux
        dispatch(fetchDataSuccess(res.data));

      } catch (error) {
        dispatch(fetchDataFailure(error.message));
      }
    };
  };





