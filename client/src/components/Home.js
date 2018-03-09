import React from 'react';
import SearchBar from './SearchBar';
import { Button } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <SearchBar />
        <Button id="search-button" circular icon="search" />
      </div>
    );
  }
}

export default Home;
