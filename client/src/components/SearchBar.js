import React from 'react';
import { Search } from 'semantic-ui-react';
import axios from 'axios';

class SearchBar extends React.Component {
  state = {
    value: '',
    categories: [],
    loading: false
  };

  autocomplete(event) {
    this.setState({ value: event.target.value, categories: [], loading: true });

    axios({
      method: 'post',
      url: 'http://127.0.0.1:5000/category-autocomplete',
      data: {
        language: 'en',
        prefix: this.state.value
      }
    }).then(response => {
      const categories = response.data.categories;

      if (categories) {
        categories.map(category => {
          this.state.categories.push({ title: category });
        });
      }
      this.setState({ loading: false });
    });
  }

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  render() {
    const { value, categories, loading } = this.state;

    return (
      <div className="searchbar">
        <Search
          size="huge"
          icon=""
          loading={loading}
          showNoResults={false}
          onSearchChange={this.autocomplete.bind(this)}
          onResultSelect={this.handleResultSelect}
          results={categories}
          value={value}
        />
      </div>
    );
  }
}

export default SearchBar;
