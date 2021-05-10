import React, { Component } from 'react';

class Header extends Component {
  render() {
    // ...
    return <div id="header">
    <h1 id="titleLogo">What to watch</h1>
    <div className="rightHeader">
    <input type='search' placeholder="Search"></input>
    {/* <div className="dd-wrapper">
  <div className="dd-header">
    <div className="dd-header-title"></div>
  </div>
  <div className="dd-list">
    <button className="dd-list-item"></button>
    <button className="dd-list-item"></button>
    <button className="dd-list-item"></button>
  </div>
</div> */}
    <button>Search</button>
    </div>
    </div>

  }
}

export default Header; // Don’t forget to use export default!