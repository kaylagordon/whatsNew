import React, { Component } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: ''
    }
  }

  submitSearch = event => {
    event.preventDefault();
    const { searchNews } = this.props;
    searchNews(this.state.searchQuery);
    this.resetSearchQuery();
  }

  resetSearchQuery = () => {
    this.setState({
      searchQuery: ''
    })
  }

  updateSearchQuery = event => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  render() {
    return (
      <header>
        <h1>what's <span className='heading-highlight'>new</span> in your world?</h1>
        <form className='search-section'>
          <input id='search-input' type='textBox' placeholder='Search for news articles here' onChange={this.updateSearchQuery}/>
          <button className='search-button' onClick={this.submitSearch}>SEARCH</button>
        </form>
      </header>
    )
  }
}

SearchForm.propTypes = {
  searchNews: PropTypes.func
}

export default SearchForm;
