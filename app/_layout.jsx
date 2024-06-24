

import LayoutApp from "./router/_layout";

//Redux

import { Provider } from 'react-redux'; //envuelve nuestra aplicación y le da acceso a los datos gestionados por Redux

import {store, persistor} from '../components/redux/store/store';

import { PersistGate } from 'redux-persist/integration/react'; //componente proporcionado por la librería "redux-persist" que se utiliza en conjunto con Redux para permitir la persistencia de datos en nuestra app

import Toast from 'react-native-toast-message'; //componente utilizado para mostrar un breve mensaje 

export default function RootLayout() {


  return (

    
    <Provider  store={store}> {/* store={store} permite conectar el componente Provider a la tienda Redux */}

{/* persistor={persistor} se utiliza para integrar Redux-Persist con nuestro componente, conservando el estado de Redux en el almacenamiento local u otros mecanismos de almacenamiento */}        
           <PersistGate loading={null} persistor={persistor}> 

          <LayoutApp/>

    <Toast/>

    </PersistGate>
    </Provider>
  );
}
