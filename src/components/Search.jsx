import { Button, Input } from '@mui/material';
import React, { useCallback, useState } from 'react';

const Search = () => {
  const [pokemon, setPokemon] = useState('');
  const searchPokemon = useCallback(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(e => console.log(e));
  }, [pokemon]);

  return (
    <div>
      <Input value={pokemon} onChange={(e) => setPokemon(e.target.value)} placeholder='Busca un pokemon...' />
      <Button onClick={searchPokemon}>Buscar</Button>
    </div>
  );
};

export default Search;
