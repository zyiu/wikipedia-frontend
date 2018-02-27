import React from 'react';
import SearchBar from './SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="searchbar">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default SearchBar;
