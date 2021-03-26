import React from "react";
import CriarPaginaPlaylist from "./components/CriarPaginaPlaylist"
import ListaPlaylist from "./components/ListaPlaylist"
import "./styles.css";

export default class App extends React.Component {
  state = {
    pagina: "criarPlaylist"
  };

  mudarPagina = () => {
    if (this.state.pagina === "criarPlaylist") {
      this.setState({ pagina: "listaPlaylist" });
    } else if (this.state.pagina === "listaPlaylist") {
      this.setState({ pagina: "criarPlaylist" });
    } else {
      this.setState({ pagina: "criarPlaylist" });
    }
  };

  renderizarPagina = () => {
    switch (this.state.pagina) {
      case "criarPlaylist":
        return <CriarPaginaPlaylist />
      case "listaPlaylist":
        return <ListaPlaylist changePage={this.mudarPagina} />
      default:
        return (
          <div>
            <p>Página não existe!</p>
            <button onClick={this.mudarPagina}>Ir para a home</button>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <div className="Titulo">
        <h1>Labefy</h1>
        </div>
          <button className="Botao" onClick={this.mudarPagina}>Trocar de página</button>
          </div>
        <div className="App-main">
          <div className="ContainerSearch">
          {this.renderizarPagina()}
          </div>
        </div>
      </div>
    );
  }
}
