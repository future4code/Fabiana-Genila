import React from "react";
import axios from "axios";
import { axiosConfig, baseUrl } from "../parameters";

import UserDetailsPage from "./ListaDetalhesPlaylist";
import LoadingPage from "./PaginaLoading";

export default class ListaPlaylist extends React.Component {
  state = {
    playlists: [],
    pagina: "listaPlaylist",
    IdDaPlaylist: "",
    estaCarregando: true
    // nameToSearch: "",
    // searchResult: []
  };

  componentDidMount() {
    this.pegarTodasPlaylists();
  }

  pegarTodasPlaylists = async () => {
    try {
      const response = await axios.get(baseUrl, axiosConfig);
      this.setState({
        users: response.data,
        page: "listaPlaylist",
        estaCarregando: false
      });
    } catch (err) {
      alert("Desculpe :(");
      console.log(err);
    }
  };

  deletarPlaylist = (id) => {
    if (window.confirm("Deseja mesmo deletar a playlist?")) {
      this.setState({ estaCarregando: true });

      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          axiosConfig
        )
        .then((res) => {
          this.pegarTodasPlaylists();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

//   searchUserByName = async () => {
//     if (!this.state.nameToSearch) {
//       return alert("Informe um nome para buscar!");
//     }

//     this.setState({ isLoading: true });

//     try {
//       const response = await axios.get(
//         `${baseUrl}/search?name=${this.state.nameToSearch}`,
//         axiosConfig
//       );
//       this.setState({
//         searchResult: response.data,
//         isLoading: false
//       });
//     } catch (error) {
//       alert("Deu ruim :(");
//       console.log(error);
//     }
//   };

//   limparBusca = () => {
//     this.setState({ searchResult: [], nameToSearch: "" });
//   };

  mudarPagina = (id) => {
    if (this.state.page === "listaPlaylist") {
      this.setState({ pagina: "details", IdDaPlaylist: id });
    } else {
      this.setState({ pagina: "listaPlaylist", IdDaPlaylist: "", estaCarregando: true });
      this.pegarTodasPlaylists();
    }
  };

  onChangeNameToSearch = (event) => {
    this.setState({ nameToSearch: event.target.value });
  };

  render() {
    const mapearPlaylist = this.state.playlists.map((playlist) => {
      return (
        <div key={playlist.id}>
          <p>{playlist.name}</p>
          <button onClick={() => this.mudarPagina(playlist.id)}>Editar</button>
          <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button>
          <hr />
        </div>
      );
    });

    // const mapSearchResult = this.state.searchResult.map((playlist) => {
    //   return (
    //     <div key={`search-result-${playlist.id}`}>
    //       <p>{playlist.name}</p>
    //       <button onClick={() => this.changePage(playlist.id)}>Editar</button>
    //       <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button>
    //     </div>
    //   );
    // });

    return (
      <div>
        {this.state.estaCarregando ? (
          <LoadingPage />
        ) : this.state.page === "listaPlaylist" ? (
          <>
            {/* <h2>Buscar usuário</h2>
            <input
              value={this.state.nameToSearch}
              type="text"
              onChange={this.onChangeNameToSearch}
              placeholder="Nome completo do usuário"
            />
            <button onClick={this.searchUserByName}>Buscar</button>
            <button onClick={this.limparBusca}>Limpar busca</button>
            <h4>Resultado da busca</h4>
            {this.state.searchResult.length > 0 ? (
              <>{mapSearchResult}</>
            ) : (
              <p>Nenhum usuário encontrado</p>
            )}
            <hr /> */}

            <h2>Lista de todas as playlists</h2>
            <hr />
            {mapearPlaylist}
          </>
        ) : (
          <>
            <h2>Detalhes da playlist</h2>
            <UserDetailsPage
              IdDaPlaylist={this.state.IdDaPlaylist}
              mudarPagina={this.mudarPagina}
              deletarPlaylist={this.deletarPlaylist}
            />
          </>
        )}
      </div>
    );
  }
}
