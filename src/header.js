import React, { Component } from "react";
import Search from "./search"

//let searchInput = "";

export function GETDATA(searchInput) {
  fetch("http://www.omdbapi.com/?s=lost&type=movie&apikey=20fc5714")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log("error"));
}

class Header extends Component {
  render() {
    return (
      <div id="header">
      <Search />
        <h1 id="titleLogo">What to watch</h1>
        <div className="rightHeader">
          <input type="search" placeholder="Search"></input>
          <select id="selection" name="selection" placeholder="Type">
            <option value="" hidden="">
              Type
            </option>
            <option value="movie">Movies</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
          <button onClick={GETDATA()}>Search</button>
        </div>
      </div>
    );
  }
}

export default Header; // Don’t forget to use export default!
