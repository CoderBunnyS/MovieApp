import React, { useState } from "react";
import PastSearches from "./Components/PastSearches";
import SearchBar from "./Components/SearchBar";

function App() {
  const [pullData, setPullData] = useState([]);
  //get info from API
  //update url with user choices
  const fetchCall = async (searchParam, typeSelection = null) => {
    let url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&t=${searchParam}&type=${typeSelection}`;
    console.log(typeSelection);
    const res = await fetch(url);
    const resJson = await res.json();
  
    if (resJson) setPullData(resJson);
    console.log(resJson);
  };
  

  return (
    <div className="App">
      <SearchBar fetchCall={fetchCall} />
      <PastSearches
        title={"Current Search"}
        pullData={pullData}
        recentGallery={false}
      />
      <PastSearches
        title={"Previous 3 Searches"}
        pullData={pullData}
        recentGallery={true}
      />
    </div>
  );
}

export default App;
