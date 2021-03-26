import React from "react";
import axios from "axios";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`

const PokeContainer = styled.div `
  font-family: 'Courier New', Courier, monospace;
  background-color: white;
  box-sizing: border-box;
  width: 40%;
  position: absolute;
`

const DivDoSelect = styled.div`
  padding: 20px;
  background-color: white;
  `

const ImagemPoke = styled.img`
  height: 300px;
  width: 300px;
  border: 2px solid orange;
  background-color: lightyellow;
`

const TipoPoke = styled.p`
  border: 2px solid lightgrey;
  padding: 5px;
  color: white;
  background-color: lightslategray;
`

const PokeDiv = styled.div`
  height: 50px;
  padding: 2px;
`

const Pokebola = styled.img`
  height: 80px;
  width: 80px;
`

export default class App extends React.Component {
  state = {
    listaPokemons: [],
    imagemPokemon: "",
    pokedexPokemon: "",
    tipoPokemon: "",
    habilidadePokemon: "",
    especiePokemon: ""
    };

  componentDidMount() {
    this.pegarListaPokemons();
  }

  pegarListaPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) =>
        this.setState({ listaPokemons: res.data.results })
      )
      .catch((err) => console.log(err))
  };

  pegarImagemPokemon = (nome) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((res) => {
        this.setState({ imagemPokemon: res.data.sprites.front_default })
      })
      .catch((err) => console.log(err))
  };

  pegarPokedexPokemon = (nome) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((res) => {
        this.setState({ pokedexPokemon: res.data.id})
        console.log(res)
      })
      .catch((err) => console.log(err))
  };

  pegarTipoPokemon = (nome) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((res) => {
        this.setState({ tipoPokemon: res.data.types[0].type.name})
        console.log(res)
      })
      .catch((err) => console.log(err))
  };

  pegarHabilidadesPokemon = (nome) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((res) => {
        this.setState({ habilidadePokemon: res.data.abilities[0].ability.name})
        console.log(res)
      })
      .catch((err) => console.log(err))
  };

  pegarEspeciePokemon = (nome) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${nome}`)
      .then((res) => {
        this.setState({ especiePokemon: res.data.species.name})
        console.log(res)
      })
      .catch((err) => console.log(err))
  };

  mudaSelect = (e) => {
    const nomePokemon = e.target.value;
    this.pegarImagemPokemon(nomePokemon)
    this.pegarTipoPokemon(nomePokemon)
    this.pegarHabilidadesPokemon(nomePokemon)
    this.pegarPokedexPokemon(nomePokemon)
    this.pegarEspeciePokemon(nomePokemon)
  }
  

  render() {
    console.log(this.state.tipoPokemon)
    return (
      <Container>
      <PokeContainer>
        <div>
        <Pokebola alt="Pokebola" src="https://img.elo7.com.br/product/zoom/28E57D8/pokebola-eva.jpg" />
        </div>
        <PokeDiv>
        <h1>Pokèmon Info</h1>
        </PokeDiv>
        <DivDoSelect>
          <p>Nome do Pokémon</p>
          <select onChange={this.mudaSelect}>
            <option value={""}></option>
            {this.state.listaPokemons.map((poke) => {
              return (
                <option key={poke.name} value={poke.name}>
                  {poke.name}
                </option>
              )
            })}
          </select>
        </DivDoSelect>
        <div>
        {this.state.imagemPokemon && (
          <ImagemPoke alt={"imagem_pokemon"} src={this.state.imagemPokemon} />
        )}
        </div>
        <TipoPoke>
        <ul>Pokédex nº {this.state.pokedexPokemon}</ul>
        <ul>Tipo: {this.state.tipoPokemon}</ul>
        <ul>Habilidades: {this.state.habilidadePokemon}</ul>
        <ul>Espécie: {this.state.especiePokemon}</ul>
        </TipoPoke>
      </PokeContainer>
      </Container>
    )
  } 
} 
