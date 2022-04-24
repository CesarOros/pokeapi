export const POKEMON_COLOR_TYPES = {
  normal: '#bdbdbd',
  fire: '#dd2c00',
  water: '#03a9f4',
  grass: '#66bb6a',
  flying: '#80d8ff',
  fighting: '#dd2c00',
  poison: '#9575cd',
  electric: '#ffd600',
  ground: '#d7ccc8',
  rock: '#bcaaa4',
  psychic: '#f48fb1',
  ice: '#00e5ff',
  bug: '#aed581',
  ghost: '#673ab7',
  steel: '#b0bec5',
  dragon: '#b39ddb',
  dark: '#5d4037',
  fairy: '#f48fb1',
  default: '#e65100'
};

export const generateRandomNumber = () => Math.floor(Math.random() * 898) + 1;

export const parseDataPokemonList = (data) => {
  if (data) {
    return data.results.map((pokemon) => {
      return { label: capitalize(pokemon.name) };
    });
  }
  return [];
};

export const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export const getPokemonImage = (sprites) => {
  return sprites.other['official-artwork'].front_default || sprites.other.dream_world.front_default || sprites.other.home.front_default;
};
