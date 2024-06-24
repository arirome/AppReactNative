//La función combineReducers devuelve un objeto cuyos valores son 
//diferentes funciones reductoras en una única función reductora que puedes
// enviar a createStore.
import { combineReducers } from "redux";

import  registro  from './registro.reducer';
import  login  from './login.reducers';

export default combineReducers({

   registro,
   login
})
