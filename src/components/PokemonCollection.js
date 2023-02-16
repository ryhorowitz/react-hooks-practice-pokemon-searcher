import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const displayPokemon = pokemon.map(poke => {
    const { id } = poke
    return <PokemonCard key={id} pokemon={poke} />
  })
  return (
    <Card.Group itemsPerRow={6}>
        {displayPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
