import React, { useState } from 'react';
import '../Assets/Search.css';

const SearchBar = ({ fetchCall }) => {
  const [userSearch, setUserSearch] = useState('');
  const [typeChoice, setTypeChoice] = useState('');

  const handleInput = (e) => {
    e.preventDefault();
    setUserSearch(e.target.value);
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
          onKeyPress={handleKeyPress}
          type='text'
          placeholder='Title'
        />
        <select
          id="selection"
          name="selection"
          placeholder='Type'
          onChange={handleTypeChoice}
        >
          <option value="" hidden>Type</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
