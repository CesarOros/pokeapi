import { Chip } from '@mui/material';
import React from 'react';
import { POKEMON_COLOR_TYPES } from '../utils/utils';

const PokemonTypeChips = (props) => {
  const types = props.types;
  return (
    <div className='w-full flex flex-row justify-center items-center mb-4 flex-wrap'>
      {types.map((type, index) => {
        return (
          <Chip
            key={`type-${index}`}
            label={type.type.name}
            className='capitalize font-bold m-1'
            sx={{
              background: POKEMON_COLOR_TYPES[type.type.name] || POKEMON_COLOR_TYPES.default,
              color: 'white'
            }}
          />
        );
      })}
    </div>
  );
};

export default PokemonTypeChips;
