//funciones esenciales para crear y configurar una tienda Redux
//createStore: Se utiliza para crear una tienda Redux que contiene todo el estado de la aplicación
//applyMiddleware: mejora la tienda al permitirle agregar middleware, que proporciona funcionalidad adicional como el manejo de operaciones asincrónicas y efectos secundario
import { createStore, applyMiddleware } from 'redux' 

//La herramienta redux devtools nos permite poder ver los estados en el navegador
//asi que lo agregamos como extesion en nuestro navegador y descargamos el paquete
//y lo mandamos a llamar 
import { composeWithDevTools } from '@redux-devtools/extension'

//incorpora middleware diseñado específicamente para manejar operaciones asincrónicas dentro de su aplicación Redux
import {thunk} from 'redux-thunk' 


import Reducers from './../reducers'

//persistReducer: crea un nuevo reductor que envuelve el reductor original y agrega lógica de persistencia.
//persistStore: crea un objeto persistente que gestiona la persistencia de toda la tienda Redux
import { persistStore, persistReducer } from 'redux-persist';

//es un sistema de almacenamiento, utilizamos en lugar de LocalStorage. 
import AsyncStorage from '@react-native-async-storage/async-storage';

//este objeto define cómo se mantendrá el estado
//key: un identificador de cadena único para el estado persistente
//storage: el motor de almacenamiento utilizado para la persistencia
//whitelist:una matriz opcional de nombres de reductores para incluir para la persistencia (útil para la persistencia selectiva)
//blacklist:una matriz opcional de nombres de reductores para excluir de la persistencia
const persistConfig = {
    key: 'root',
    whitelist: ['login'],
    storage: AsyncStorage, // Almacenamiento para persistir los datos
  };


//persistConfig (Objeto): este objeto de configuración define cómo se mantendrá el estado
//traemos a los reducers para definir cómo se actualiza el estado de su aplicación
  const persistedReducer = persistReducer(persistConfig, Reducers);


const initialState = { }
  


export const store = createStore( 
    persistedReducer,
    initialState, 
    
    //Redux Thunk ha sido instalado e incluido en el proyecto
    composeWithDevTools(applyMiddleware(thunk))
    
)

export const persistor = persistStore(store);

export default store;