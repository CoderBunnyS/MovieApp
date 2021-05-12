import React, { useState } from 'react'
import PastSearches from './Components/PastSearches'
import SearchBar from './Components/SearchBar'


function App() {
  const [movieData, setMovieData] = useState([])

  const fetchCall = async (searchParam, typeSelection = 'null') => {
    let url = `https://www.omdbapi.com/?apikey=47fad17f&t=${searchParam}&type=${typeSelection}`
    const res = await fetch(url)
    const resJson = await res.json()

    if (resJson) setMovieData(resJson)
  }

  return (
    <div className="App">
      
        <SearchBar fetchCall={fetchCall} />
        <PastSearches title={'Current Search'} movieData={movieData} recentGallery={false} />
        <PastSearches title={'Previous 3 Searches'} movieData={movieData} recentGallery={true} />
      
    </div>
  );
}

export default App