import React from 'react';
import { Search } from 'semantic-ui-react';

class SearchBar extends React.Component {
  state = {
    value: ''
  };

  handleSearchChange = event => {
    this.setState({ value: event.value });
  };

  render() {
    return (
      <div className="searchbar">
        <Search
          size="huge"
          icon=""
          showNoResults={false}
          onSearchChange={this.handleSearchChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default SearchBar;
