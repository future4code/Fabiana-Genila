import React from 'react'

import RegistroUsuario from './components/RegistroUsuario'
import ListaUsuario from './components/ListaUsuario'


export default class App extends React.Component {
state = {
  pagina: "criarUsuario"
}

  mudarPagina = () => {
    if (this.state.pagina === "criarUsuario") {
      this.setState({ pagina: "listaDeUsuarios" });
    } else if (this.state.pagina === "listaDeUsuarios") {
      this.setState({ pagina: "criarUsuario" });
    }
  };

  renderizarPagina = () => {
    switch (this.state.pagina) {
      case "criarUsuario":
        return <RegistroUsuario />;
      case "listaDeUsuarios":
        return <ListaUsuario />;
      default:
        return <div></div>;
    }
  }


  render() {
    return(
      <div>
        <h1>Labenusers</h1>
        <button onClick={this.mudarPagina}>Trocar de página</button>
        {this.renderizarPagina()}
      </div>
    )
}
}


