import React from 'react';
import './App.css';
import Post from './components/Post/Post'

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: "paulinha", 
        fotoUsuario: "https://picsum.photos/50/50", 
        fotoPost: "https://picsum.photos/200/150",
      },
  
      {
        nomeUsuario: "fabi", 
        fotoUsuario: "https://picsum.photos/50/50?random=1",
        fotoPost: "https://picsum.photos/200/150?random=1",
      },
  
      {
        nomeUsuario: "wagner", 
        fotoUsuario: "https://picsum.photos/50/50?random=2",
        fotoPost: "https://picsum.photos/200/150?random=2",
      },
    ],

    valorInputNovoUsuario: "",
    valorInputNovaFoto: "",
    valorInputNovoPost: "",

  }

adicionaPost = () => {
  const novoPublicaPost = {
    nomeUsuario: this.state.valorInputNovoUsuario,
    fotoUsuario: this.state.valorInputNovaFoto,
    fotoPost: this.state.valorInputNovoPost

  }
  const novoPosts = [...this.state.posts, novoPublicaPost]

  this.setState({posts: novoPosts})
}

onChangeInputPost = (event) => {
  this.setState({valorInputNovoPost: event.target.value})
}

onChangeInputFoto = (event) => {
  this.setState({valorInputNovaFoto: event.target.value})
}

onChangeInputUsuario = (event) => {
  this.setState({valorInputNovoUsuario: event.target.value})
}

  render() {
    const ListaDeComponentes = this.state.posts.map((post) => {
      return (
        <Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}/> 
      )
    })

    return (
      <div className={'app-container'}>
          <input 
            value={this.state.valorInputNovoUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
            />
            <input 
            value={this.state.valorInputNovaFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"Foto Usuário"}
            />
            <input 
            value={this.state.valorInputNovoPost}
            onChange={this.onChangeInputPost}
            placeholder={"Foto"}
            />
            <div>
            <button onClick={this.adicionaPost}>Adicionar</button>
            </div>
            <hr/>
            <div>{ListaDeComponentes}</div>
        </div>
      );

}

}
  
export default App;



// class App extends React.Component {
//   render() {
//     return (
//       <div className={'app-container'}>
//         <Post
//           nomeUsuario={'paulinha'}
//           fotoUsuario={'https://picsum.photos/50/50'}
//           fotoPost={'https://picsum.photos/200/150'}
//         />

//         <Post
//           nomeUsuario={'fabi'}
//           fotoUsuario={'https://picsum.photos/50/50?random=1'}
//           fotoPost={'https://picsum.photos/200/150?random=1'}
//         />

//         <Post
//           nomeUsuario={'wagner'}
//           fotoUsuario={'https://picsum.photos/50/50?random=2'}
//           fotoPost={'https://picsum.photos/200/150?random=2'}
//         />

//       </div>
//     );
//   }
// }


