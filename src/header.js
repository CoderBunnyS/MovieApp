import React, { Component } from 'react';

class Header extends Component {
  render() {
    // ...
    return <div className="header">
    <h3>What to watch</h3>
    <input type='search' label="Search"></input>
    <div className="dd-wrapper">
  <div className="dd-header">
    <div className="dd-header-title"></div>
  </div>
  <div className="dd-list">
    <button className="dd-list-item"></button>
    <button className="dd-list-item"></button>
    <button className="dd-list-item"></button>
  </div>
</div>
    <button>Search</button>
    </div>

  }
}

export default Header; // Don’t forget to use export default!