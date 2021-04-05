import React from "react"
import axios from "axios"
import { baseUrl, axiosConfig } from "../parameters"

export default class CriarPaginaPlaylist extends React.Component {
  state = {
    inputNome: "",
  };

  handleName = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.inputNome
    }
    axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "fabiana-pereira-cruz",
          }
        }
      ).then((response) => {
      this.setState({ inputNome: "" });
      alert("Playlist criada com sucesso!");
      console.log(response);
    })
     .catch ((error) => {
      alert("Desculpe, ocorreu um erro.");
      console.log(error);
    })
  }


  render() {
    return (
      <div>
        <h2>Criar playlist</h2>
        <h3>Nome da playlist</h3>
        <input
          onChange={this.handleName}
          value={this.state.name}
          placeholder="Nome da playlist"
        />
        <button onClick={this.criarPlaylist}>Criar!</button>
      </div>
    );
  }
}
