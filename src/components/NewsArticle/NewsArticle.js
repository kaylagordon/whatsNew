import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return (
    <div className='newsArticle'>
      <img className='newsImage' src={props.image} alt='{props.headline}' />
      <h2>{props.headline}</h2>
      <p>{props.description}</p>
      <a href={props.link}>Link to article</a>
    </div>
  )
}
export default NewsArticle;
