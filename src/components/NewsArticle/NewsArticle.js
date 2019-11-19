import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return (
    <div className='newsArticle'>
      <img className='newsImage' src={props.image} alt='picture of {props.headline}' />
      <p>The headline: {props.headline}</p>
      <p>The description: {props.description}</p>
      <a href={props.link}>Link to article</a>
    </div>
  )
}
export default NewsArticle;
