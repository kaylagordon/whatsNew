import React from 'react';
import './SearchForm.css';

export default class SearchForm extends Component {
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
  this.resetInputs();
}

resetInputs = () => {
  this.setState({
    searchQuery = ''
  })
}

updateSearchQuery = event => {
  this.state({
    searchQuery: event.target.value
  })
}

render {
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

export default SearchForm;
