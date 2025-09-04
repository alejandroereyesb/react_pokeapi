import { useState, useEffect } from "react";
import { fetchPokemonList } from "../services/pokemonService";

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchList = async () => {
      try {
        const data = await fetchPokemonList(10); // Fetch 10 Pokémon
        setPokemonList(data.results);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchList();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
