import "./App.css";
import "./header.css";
import "./body.css";
import Header from "./header.js";
import Body from "./Body.js";
import History from "./history.js";
import React, { useState } from 'react'
//import MovieGallery from './components/MovieGallery'
import Search from './search'
//import ErrorBoundary from './components/ErrorBoundary'

function App() {
  const [movieData, setMovieData] = useState([])

  const fetchCall = async (searchParam, typeSelection = 'null') => {
    let url = `https://www.omdbapi.com/?apikey=20fc5714&t=${searchParam}&type=${typeSelection}`
    const res = await fetch(url)
    const resJson = await res.json()

    if (resJson) setMovieData(resJson)
  }
//function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      <Search fetchCall={fetchCall} />
      </header>
      <Body />
      <Body title={'Current Search'} movieData={movieData} recentGallery={false} />
      <History />
      <History title={'Previous 3 Searches'} movieData={movieData} recentGallery={true} />
    </div>
  );
}
// return (
//   <div className="App">
//     <ErrorBoundary>
      
      
      
//     </ErrorBoundary>
//   </div>
// );
//}


export default App;