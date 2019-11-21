import React from 'react';
import './SearchForm.css';

function SearchForm({searchNews}) {
  return (
    <header>
      <h1>what's <span className='heading-highlight'>new</span> in your world?</h1>
      <div className='search-section'>
        <input id='search-input' type='textBox' placeholder='Search for news articles here' />
        <button className='search-button' onClick={() => searchNews(document.getElementById('search-input').value)}>SEARCH</button>
      </div>
    </header>
  )
}

export default SearchForm;
