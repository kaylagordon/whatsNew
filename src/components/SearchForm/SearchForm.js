import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className='header'>
      <h1>What's <span className='heading-highlight'>New?</span></h1>
      <input type='textBox' placeholder='Search for news articles here.' />
      <button>Search Now</button>
    </div>
  )
}

export default SearchForm;
