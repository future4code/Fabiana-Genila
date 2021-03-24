import React from 'react'

import RegistroUsuario from './components/RegistroUsuario'
import ListaUsuario from './components/ListaUsuario'


export default class App extends React.Component {

  render() {
    return(
      <div>
        <div>
          <RegistroUsuario />
          {/* <ListaUsuario /> */}
        </div>
      </div>
    )
  } 
}



