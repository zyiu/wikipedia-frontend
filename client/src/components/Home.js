import React from 'react';
import SearchBar from './SearchBar';
import AdvancedSettings from './AdvancedSettings';
import { Button } from 'semantic-ui-react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="home">
          <SearchBar />
          <Button
            id="search-button"
            circular
            color="green"
            icon="search"
            size="large"
          />
        </div>
        <div className="advanced">
          <AdvancedSettings />
        </div>
      </div>
    );
  }
}

export default Home;
