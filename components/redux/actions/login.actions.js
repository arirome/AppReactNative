import { FETCH_AUTH_SUCCESS, FETCH_AUTH_ERROR } from "../type/types";

//mi celu maneja una ip y mi back maneja otra, 
//y si yo pongo localhost es la ip de mi cel esta buscando mi back en mi celu.
const BASE_URL = 'http://192.168.1.8:5000';

import axios from 'axios'

export const loginUser = (email, password) => async dispatch => {
   
    const config = { headers : {'Content-Type':'application/json'}}

    const body = JSON.stringify({email, password})
    
    console.info('body=>',body)
    try {



        const res = await  axios.post(`${BASE_URL}/auth/login`, body, config)
        
      
        console.log("res",res)
            
              
        dispatch({
            type: FETCH_AUTH_SUCCESS,
            payload: res.data
        })


    } catch (err) {

        dispatch({ type:FETCH_AUTH_ERROR, error: err });

       console.log(errors)
    }

    


}

