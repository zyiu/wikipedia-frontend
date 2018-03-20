import React from 'react';
import { Search } from 'semantic-ui-react';
import axios from 'axios';

class SearchBar extends React.Component {
  state = {
    value: ''
  };

  componentDidMount() {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/category-autocomplete',
      data: {
        language: 'en',
        prefix: 'dog'
      }
    }).then(response => {
      console.log(response);
    });
  }

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
