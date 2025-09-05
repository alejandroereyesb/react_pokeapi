import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SearchBar() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (name.trim()) {
      navigate(`/pokemon-details?name=${name.trim()}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Pokemon name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
