import React from "react";
import axios from "axios";

import RegistroUsuario from './RegistroUsuario'
import styled from 'styled-components'

const ListaUsuarios = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
  `

export default class ListaUsuario extends React.Component {
  state = {
    usuarios: [], 
    pagina: "listaUsuarios",
  }

  componentDidMount() {
    this.pegarListaUsuarios()
  }

  pegarListaUsuarios = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "fabiana-pereira-cruz",
          }
        }
      )
      this.setState({ usuarios: response.data })
    } catch (error) {
      console.log(error)
    }
  }

  editarUsuarios = (id) => {
    console.log(id)
    if(window.confirm("Deseja editar as informações do usuário?")) {
      const body = {
        name: this.state.inputNome,
        email: this.state.inputEmail
      }
      console.log(body)
      axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
      body,
        {
          headers: {
            Authorization: "fabiana-pereira-cruz"
          }
        }
      )
      .then((res) => {
        this.setState({ inputNome: ''})
        this.setState({ inputEmail: ''})
        alert("Cadastro realizado com sucesso!")
        this.pegarListaUsuarios()
        console.log(res)
        alert("Edição de informações realizada com sucesso!")
      })
      .catch((err) => {
        alert("Desculpe, ocorreu um erro.")
        console.log(err)
      })
    } 
  }

  mudarPagina = () => {
    if (this.state.pagina === "informacaoUsuario") {
      this.setState({ pagina: "mostrarTodosUsuarios" });
    } else if (this.state.pagina === "mostrarTodosUsuarios") {
      this.setState({ pagina: "informacaoUsuario" });
    }
  };

  renderizarPagina = () => {
    switch (this.state.pagina) {
      case "mostrarTodosUsuarios":
        return <ListaUsuario />;
      case "informacaoUsuario":
        return <RegistroUsuario />;
      default:
        return <div></div>;
    }
  }



  deletarUsuarios = (id) => {
    if(window.confirm("Deseja mesmo deletar o usuário?")) {
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
          headers: {
            Authorization: "fabiana-pereira-cruz"
          }
        }
      )
      .then((res) => {
        this.pegarListaUsuarios()
        console.log(res)
        alert("Usuário deletado com sucesso!")
      })
      .catch((err) => {
        console.log(err)
        alert("Desculpe, ocorreu um erro.")
      })
    } 
  }


  render() {
    const mapearUsuarios = this.state.usuarios.map((usuario) => {
      return (
        <div key={usuario.id}>
          <p>{usuario.name}</p>
          {/* <button onClick={() => this.mudarPagina(usuario.id)}>Detalhes</button> */}
          <button onClick={() => this.deletarUsuarios(usuario.id)}>Deletar</button>
        </div>
     )
    })

    return (
      <ListaUsuarios>
        <h2>Lista de Usuários</h2>
        {this.state.usuarios.length > 0 ? (
          <p>{mapearUsuarios}</p>
        ) : (
          <p>Carregando...</p>
        )}
      </ListaUsuarios>
    );
  }
}
