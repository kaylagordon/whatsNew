import React from 'react';
import './SearchForm.css';

function SearchForm({searchNews}) {
  return (
    <div className='header'>
      <h1>What's <span className='heading-highlight'>New?</span></h1>
      <input id='search-input' type='textBox' placeholder='Search for news articles here' />
      <button className='search-button' onClick={() => searchNews(document.getElementById('search-input').value)}>SEARCH</button>
    </div>
  )
}

export default SearchForm;
