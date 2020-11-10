import React from 'react';
import EstiloGlobal from './style/GlobalStyles'
import Splash from './components/organinsmos/Splash'
import Slots from './components/organinsmos/Slots/'

const App:React.FC = () =>{
  return(
    <>
      <EstiloGlobal/>
      <Splash></Splash>
      <Slots></Slots>
     
   </>
  )
}

export default App;
