import { useNavigate } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {
  const navigate = useNavigate();

  const handleSearch = (name) => {
    // Redirigir a la página de detalles con el nombre del Pokémon como query param
    navigate(`/pokemon-details?name=${name}`);
  };

  return (
    <div>
      <h1>Pokemon Search</h1>
      <SearchBar onSearch={handleSearch} />
      <PokemonList/>
    </div>
  );
}

export default App;
