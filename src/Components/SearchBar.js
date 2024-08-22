import React, { useState } from 'react';
import '../Assets/Search.css';

const SearchBar = ({ fetchCall }) => {
  const [userSearch, setuserSearch] = useState('');
  const [typeChoice, setTypeChoice] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    setuserSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetchCall(userSearch, typeChoice);
  };

  const handleTypeChoice = (e) => {
    e.preventDefault();
    setTypeChoice(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick(e);
    }
  };

  return (
    <div className='container-header'>
      <h1 className='headerText'>What to watch</h1>
      <div>
        <input
          onChange={handleInput}
          onKeyDown={handleKeyPress}  // Trigger search on Enter key press
          type='text'
          placeholder='Title'
        />
        <label htmlFor="selection">Choose type:</label>
        <select
          id="selection"
          name="selection"
          placeholder='Type'
          onChange={handleTypeChoice}
        >
          <option value="" hidden>🎬 Movie</option>
          <option value="movie">🎬 Movie</option>
          <option value="series">📺 TV Series</option>
        </select>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
