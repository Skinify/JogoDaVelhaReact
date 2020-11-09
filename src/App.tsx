import React from 'react';
import EstiloGlobal from './style/GlobalStyles'
import Splash from './components/organinsmos/Splash'
import Slot from './components/moleculas/Slot'
import Slots from './components/organinsmos/Slots/'

const App:React.FC = () =>{
  return(
    <>
      <EstiloGlobal/>
      <Slots></Slots>
   </>
  )
}

export default App;
