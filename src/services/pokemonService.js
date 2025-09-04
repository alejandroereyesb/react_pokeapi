const BASE_API_URL = "https://pokeapi.co/api/v2";

export const fetchPokemonByName = async (name) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pokemon/${name.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Pokémon not found");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};

export const fetchPokemonList = async (limit = 10, offset = 0) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pokemon?limit=${limit}&offset=${offset}`);
    if (!response.ok) {
      throw new Error("Failed to fetch Pokémon list");
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
};
