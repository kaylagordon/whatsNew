import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return (
    <div className='newsArticle'>
      <img className='newsImage' src={props.image} alt={`${props.headline}'`} />
      <div className='newsInfo'>
        <h2>{props.headline}</h2>
        <p>{props.description}</p>
      </div>
      <div className='link-box'>
        <a href={props.link}>CLICK TO GO TO ARTICLE</a>
      </div>
    </div>
  )
}
export default NewsArticle;
