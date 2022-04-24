import React, { useEffect, useState } from 'react';
import LogoPokemon from '../assets/logoPokemon.png';
import { Alert, Autocomplete, Button, Snackbar, TextField } from '@mui/material';
import { generateRandomNumber, parseDataPokemonList } from '../utils/utils';
import { getAllPokemon, getPokemon } from '../hooks/pokemonHooks';
import PokemonContainer from '../components/PokemonContainer';

const Home = () => {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonParsedList, setPokemonParsedList] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [isSnackbarOpen, openSnackBar] = useState(false);

  const searchPokemon = async (pokemon) => {
    if (pokemon) {
      try {
        const result = await getPokemon(pokemon);
        return setPokemon(result);
      } catch (error) {
        openSnackBar(true);
      }
    }
    setPokemon(null);
  };

  useEffect(() => {
    const setSearchList = async () => {
      try {
        const result = await getAllPokemon(100000, 0);
        const parsedList = parseDataPokemonList(result);
        setPokemonParsedList(parsedList);
      } catch (error) {
        openSnackBar(true);
      }
    };

    const getPokemonList = async () => {
      try {
        const pokemons = await getAllPokemon(10, 0);
        const promiseList = await Promise.all(
          pokemons.results.map(async (pokemon) => await getPokemon(pokemon.name))
        );
        setPokemonList(promiseList);
      } catch (error) {
        openSnackBar(true);
      }
    };

    setSearchList();
    getPokemonList();
  }, []);

  return (
    <div className='flex flex-col items-center w-full'>
      <div className='mt-10 w-3/4 lg:w-2/4'>
        <img src={LogoPokemon} />
      </div>
      <div className='flex flex-col items-center w-3/4 mt-5'>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={pokemonParsedList || []}
          sx={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Busca un pokemon..."/>}
          onChange={(event, value) => searchPokemon(value?.label || null)}
        />
        <div className='flex flex-row mt-4'>
          <div className='mx-2'>
            <Button
              variant="contained"
              onClick={() => searchPokemon(generateRandomNumber())}
              className='bg-gradient-to-r from-cyan-500 to-blue-500'
            >
              Aleatorio
            </Button>
          </div>
          <div className='mx-2'>
            <Button
              variant="contained"
              onClick={() => setPokemon(null)}
              className=' bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
            >
              Limpiar
            </Button>
          </div>
        </div>
      </div>
      {pokemon && (
        <PokemonContainer pokemon={pokemon}/>
      )}
      <div className='flex flex-row flex-wrap justify-center'>
        {pokemonList && !pokemon && (
          pokemonList.map((pokemon, index) =>
            <PokemonContainer key={`pokemon-${index}`} pokemon={pokemon}/>
          )
        )}
      </div>
      <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={() => openSnackBar(false)}>
        <Alert onClose={() => openSnackBar(false)} severity="error" sx={{ width: '100%' }}>
            ¡Upss!, aún no capturamos a este pokemon.
        </Alert>
      </Snackbar>
    </div>

  );
};

export default Home;
