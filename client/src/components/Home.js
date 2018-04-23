import React from 'react';
import SearchBar from './SearchBar';
import AdvancedSettings from './AdvancedSettings';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

class Home extends React.Component {
  state = {
    value: '',
    categories: [],
    loading: false,
    links: []
  };
  
  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });
  
  query(event) {
    setTimeout(() => {
      axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/',
        data: {
          method: 'related',
          query: this.state.value,
          language: 'en',
          filter: 'ores_quality',
          limit: '10',
          stub: 'include'
        }
      }).then(response => {
        const links = response.data;
        if (links) {
          links.map(links => {
            this.state.links.push(links);
          });
        }
        this.setState({ links: this.state.links});
      });
    }, 300);
    
  }
  
  autocomplete(event) {
    this.setState({ value: event.target.value, categories: [], loading: true });
    setTimeout(() => {
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
    }, 300);
  }
  
  render() {
    return (
      <div>
        <div className="home">
          <SearchBar 
            autocomplete={this.autocomplete.bind(this)} 
            loading={this.state.loading} 
            value={this.state.value} 
            categories={this.state.categories} 
            handleResultSelect={this.handleResultSelect.bind(this)}
          />
          <Button
            id="search-button"
            circular
            color="green"
            icon="search"
            size="large"
            onClick={this.query.bind(this)}
          />
        </div>
        <div className="advanced">
          <AdvancedSettings />
        </div>
        <div className="link-container">
          <ul className="links">
            {this.state.links.map(function(listValue){
              return <li>{listValue}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
