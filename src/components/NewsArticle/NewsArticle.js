import React from 'react';
import './NewsArticle.css';
import PropTypes from 'prop-types';

function NewsArticle(props) {
  return (
    <div className='newsArticle'>
      <img className='newsImage' src={props.image} alt={`${props.headline}'`} />
      <div className='newsInfo'>
        <h2>{props.headline}</h2>
        <p className='article-description'>{props.description}</p>
      </div>
      <div className='link-box'>
        <a href={props.link}>CLICK TO GO TO ARTICLE</a>
      </div>
    </div>
  )
}

NewsArticle.propTypes = {
  image: PropTypes.string,
  headline: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

export default NewsArticle;
