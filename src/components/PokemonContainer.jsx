import { Avatar, Divider } from '@mui/material';
import React from 'react';
import { getPokemonImage } from '../utils/utils';
import PokemonStats from './PokemonStats';
import PokemonTypeChips from './PokemonTypeChips';

const PokemonContainer = (props) => {
  const pokemon = props.pokemon;
  return (
    <div className='flex flex-col bg-slate-700 rounded-lg m-4 shadow-xl drop-shadow-2xl'>
      <div className='flex flex-col items-center justify-center p-6 '>
        <PokemonTypeChips types={pokemon.types}/>
        <Avatar
          src={ getPokemonImage(pokemon.sprites) }
          sx={{ background: 'white', height: 125, width: 125 }}
          className='shadow-lg shadow-cyan-500/50'
        />
        <p className='font-bold text-2xl text-white capitalize mt-4'>{pokemon.name}</p>
        <p className='font-normal text-gray-400 italic'>No. {pokemon.id}</p>
      </div>
      <Divider />
      <PokemonStats stats={pokemon.stats}/>
    </div>
  );
};

export default PokemonContainer;
