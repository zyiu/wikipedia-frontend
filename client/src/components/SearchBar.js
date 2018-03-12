import React from 'react';
import { Search } from 'semantic-ui-react';
import axios from 'axios';

class SearchBar extends React.Component {
  state = {
    value: ''
  };

  componentDidMount() {
    axios
      .get('http://127.0.0.1:5000/category-autocomplete', {
        params: {
          prefix: 'ad',
          language: 'en'
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
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
