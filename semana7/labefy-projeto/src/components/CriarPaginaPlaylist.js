import React from "react"
import axios from "axios"
import { baseUrl, axiosConfig } from "../parameters"

export default class CriarPaginaPlaylist extends React.Component {
  state = {
    name: ""
  }

  handleName = (event) => {
    this.setState({ name: event.target.value })
  }

  criarPLaylist = () => {
    const body = {
      name: this.state.name
    }

    axios
      .post(baseUrl, body, axiosConfig)
      .then((res) => {
        alert("A playlist foi criada com sucesso!")
        this.setState({ name: ""})
        console.log(res)
      })
      .catch((err) => {
        alert("Desculpe, ocorreu um erro")
        console.log(err)
      });
  };

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
    )
  }
}
