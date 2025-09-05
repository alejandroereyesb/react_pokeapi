import SearchBar from './components/SearchBar';
import './App.css';
import PokemonList from './components/PokemonList';

function App() {


  return (
    <div>
      <h1>Pokemon Search</h1>
      <SearchBar/>
      <PokemonList/>
    </div>
  );
}

export default App;
