import React from "react";
import axios from "axios";
// import { axiosConfig, baseUrl } from "../parameters";

import ListaDetalhesPlaylist from "./ListaDetalhesPlaylist";
import PaginaLoading from "./PaginaLoading";

export default class ListaPlaylist extends React.Component {
  state = {
    playlists: [],
    pagina: "listaPlaylist",
    nomeDaPlaylist: "",
    estaCarregando: true
    // nameToSearch: "",
    // searchResult: []
  };

  componentDidMount() {
    this.pegarTodasPlaylists()
  }

  pegarTodasPlaylists = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "fabiana-pereira-cruz",
          }
        }
      )
      this.setState({ 
        playlists: response.data.result.list,
        pagina: "listaPlaylist",
        estaCarregando: false
      })
    } catch (err) {
      console.log(err)
      alert("Desculpe ocorreu um erro")
    }
  }


  deletarPlaylist = async (id) => {
      if(window.confirm("Deseja mesmo deletar a playlist?")) {
          this.setState({ estaCarregando: true })
    try {
      const response = await axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "fabiana-pereira-cruz",
          }
        }
      )
      alert("Playlist deletada com sucesso!")
      this.pegarTodasPlaylists()
      } catch (err) {
      console.log(err)
      alert("Desculpe, ocorreu um erro.")
    }
  }
}


  mudarPagina = (id) => {
    if (this.state.pagina === "listaPlaylist") {
      this.setState({ pagina: "details", nomeDaPlaylist: "" });
    } else {
      this.setState({ pagina: "listaPlaylist", nomeDaPlaylist: "", estaCarregando: true });
      this.pegarTodasPlaylists();
    }
  };


  render() {
    const mapearPlaylist = this.state.playlists.map((playlist) => {
      return (
        <div key={playlist.id}>
          <p>{playlist.name}</p>
          <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button>
          {/* <hr /> */}
        </div>
      )
    })

    return (
      <div>
        {this.state.estaCarregando ? (
          <PaginaLoading />
        ) : this.state.pagina === "listaPlaylist" ? (
          <>
            <h2>Lista de todas as playlists</h2>
            {/* <hr /> */}
            {mapearPlaylist}
          </>
        ) : (
          <>
            <h2>Detalhes da playlist</h2>
            <ListaDetalhesPlaylist
              nomeDaPlaylist={this.state.nomeDaPlaylist}
              mudarPagina={this.mudarPagina}
              deletarPlaylist={this.deletarPlaylist}
            />
          </>
        )}
      </div>
    );
  }
}
