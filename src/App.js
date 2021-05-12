import React, { useState } from 'react'
import MovieGallery from './Components/MovieGallery'
import SearchBar from './Components/SearchBar'
import ErrorBoundary from './Components/ErrorBoundary'

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
      <ErrorBoundary>
        <SearchBar fetchCall={fetchCall} />
        <MovieGallery title={'Current Search'} movieData={movieData} recentGallery={false} />
        <MovieGallery title={'Previous 3 Searches'} movieData={movieData} recentGallery={true} />
      </ErrorBoundary>
    </div>
  );
}

export default App