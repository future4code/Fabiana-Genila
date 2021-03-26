import React from "react";
import axios from "axios";
import { baseUrl, axiosConfig } from "../parameters";

import LoadingPage from "./PaginaLoading";

export default class ListaDetalhesPlaylist extends React.Component {
  state = {
    user: {},
    isLoading: true,
    isEditing: false,
    name: "",
    email: ""
  };

  componentDidMount = () => {
    this.getUserById(this.props.userId);
  };

  getUserById = async () => {
    try {
      const result = await axios.get(
        `${baseUrl}/${this.props.userId}`,
        axiosConfig
      );
      this.setState({
        user: result.data,
        isLoading: false,
        name: "",
        email: ""
      });
    } catch (error) {
      alert("Deu ruim :(");
      console.log(error);
    }
  };

  editUserById = async () => {
    if (!this.state.name && !this.state.email) {
      return alert("Preencha um dos campos para editar o usuário!");
    }

    const body = {
      name: this.state.name || this.state.user.name,
      email: this.state.email || this.state.user.email
    };

    this.setState({ isLoading: true });

    try {
      await axios.put(`${baseUrl}/${this.props.userId}`, body, axiosConfig);
      alert("Usuário editado com sucesso!");
    } catch (error) {
      alert("Deu ruim :(");
      console.log(error);
    }

    this.getUserById();
  };

  toggleIsEditing = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <LoadingPage />
        ) : (
          <>
            <p>ID: ({this.state.user.id})</p>
            <p>Nome: ({this.state.user.name})</p>
            <p>Email: ({this.state.user.email})</p>

            {this.state.isEditing ? (
              <>
                <div>
                  <label>New name </label>
                  <input
                    value={this.state.name}
                    type="text"
                    onChange={this.onChangeName}
                  />
                </div>
                <div>
                  <label>New email </label>
                  <input
                    value={this.state.email}
                    type="text"
                    onChange={this.onChangeEmail}
                  />
                </div>
                <button onClick={this.editUserById}>Confirmar edição</button>
                <button onClick={this.toggleIsEditing}>Cancelar</button>
              </>
            ) : (
              <>
                <button onClick={this.toggleIsEditing}>Menu de edição</button>
                <button
                  onClick={() => this.props.deleteUser(this.props.userId)}
                >
                  Deletar
                </button>
              </>
            )}
            <hr />
            <button onClick={this.props.changePage}>Voltar</button>
          </>
        )}
      </div>
    );
  }
}
