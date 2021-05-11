import React, { Component } from 'react';

//let searchInput = " ";

 export function GETDATA() {
    fetch("http://www.omdbapi.com/?s=lost&type=movie&apikey=20fc5714")
        .then(res => {
            return res.json()
        })
        .then(data =>  console.log(data))
        
        //.then(data => mainContainer.innerText = data.activity)
        .catch(error => console.log("error"))
    }
     


class Header extends Component {
  render() {
    return <div id="header">
    <h1 id="titleLogo">What to watch</h1>
    <div className="rightHeader">
    <input type='search' placeholder="Search" ></input>
    
    <button onClick={GETDATA()}>Search</button>
    
    </div>
    </div>

  }
}

export default Header; // Don’t forget to use export default!