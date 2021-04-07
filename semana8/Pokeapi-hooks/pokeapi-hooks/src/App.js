import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

const App = () => {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  const pokeURL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

  useEffect(() => {
    const getPoke = () => {
      axios
        .get(pokeURL)
        .then((response) => setPokeList(response.data.results))
        .catch((err) => console.log(err));
    };
    getPoke();
  }, [setPokeList, pokeURL]);

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
};

export default App;
