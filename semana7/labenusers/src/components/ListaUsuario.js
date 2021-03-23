import React from "react";
import axios from "axios";

export default class ListaUsuario extends React.Component {
  state = {
    listaUsuarios: [],
    inputNome: "",
    inputEmail: "",
  };

  componentDidMount() {
    this.pegarListaUsuarios()
  }

  pegarListaUsuarios = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "fabiana-pereira-cruz",
          },
        }
      )
      .then((res) => {
        this.setState({ listaUsuarios: res.data.result.list });
      })
      .catch((err) => { 
          console.log(err.response)
      });
  };

  render() {
    const listaDeUsuarios = this.state.listaUsuarios.map((lista) => {
      return <li key={lista.id}>{lista.name}</li>;
    });

    return (
      <div>
        <h2>Lista de Usuários</h2>
        {this.state.listaUsuarios.length > 0 ? (
          <ul>{listaDeUsuarios}</ul>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    );
  }
}
