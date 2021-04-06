import axios from 'axios'
import React from 'react'
import ListaUsuario from './ListaUsuario'

import styled from 'styled-components'

const RegistroUsuarios = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
`

export default class RegistroUsuario extends React.Component {
    state = {
        listaUsuarios: [],
        inputNome: '',
        inputEmail: ''
    }

    handleInputName = (event) => {
        this.setState({ inputNome: event.target.value})
    }

    handleInputEmail = (event) => {
        this.setState({ inputEmail: event.target.value})
    }


salvarUsuario = () => {
    const body = {
        name: this.state.inputNome,
        email: this.state.inputEmail
    }
    axios
    .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
    body,
    {
        headers: {
            Authorization : "fabiana-pereira-cruz"
        }
    }    
    )
    .then((res) => {
        this.setState({ inputNome: ''})
        this.setState({ inputEmail: ''})
        alert("Cadastro realizado com sucesso!")
    })
    .catch((err) => {
        console.log(err.response)
        alert("Desculpe, parece que ocorreu um erro. Tente novamente mais tarde.")
    })
}

render() {

    return (
      <div>
        <RegistroUsuarios>
          <h2>Cadastro de Usuários</h2>
          <input
            placeholder={"Nome de usuário"}
            value={this.state.inputNome}
            onChange={this.handleInputName}
          />
          <input
            placeholder={"E-mail"}
            value={this.state.inputEmail}
            onChange={this.handleInputEmail}
          />
          <button onClick={this.salvarUsuario}>Enviar</button>
        </RegistroUsuarios>
      </div>
    )
}
}


