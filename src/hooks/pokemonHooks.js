export const POKE_API = 'https://pokeapi.co/api/v2/pokemon';

export const getPokemon = (pokemon) => {
  return fetch(`${POKE_API}/${pokemon.toString().toLowerCase()}`)
    .then(response => response.json())
    .then(data => data)
    .catch(e => { throw new Error(e); });
};

export const getAllPokemon = (limit, offset) => {
  return fetch(`${POKE_API}?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .then(data => data)
    .catch(e => console.log(e));
};
