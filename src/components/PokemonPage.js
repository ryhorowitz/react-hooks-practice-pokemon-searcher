import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then( pokemon => setPokemon(pokemon))
    .catch( err => console.error('get FETCH poke Error', err))
  }, [])

  function handleSearchUpdate(value) {
    setSearch(value)
  }
  function handleAddPokemonToDOM() {
    fetch(`http://localhost:3001/pokemon`)
    .then(r => r.json())
    .then( pokemon => setPokemon(pokemon))
    .catch( err => console.error('ADD poke Error', err))
  }
  const displayPokemon = pokemon.filter( poke => poke.name.includes(search))
  
  // if (displayPokemon.length === 0) {
  //   return null
  // }
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemonToDOM={handleAddPokemonToDOM}/>
      
      <br />
      <Search onSearch={handleSearchUpdate}/>
      <br />
      <PokemonCollection pokemon={displayPokemon}/>
    </Container>
  );
}

export default PokemonPage;
