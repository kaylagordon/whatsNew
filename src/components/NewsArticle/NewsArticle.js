import React from 'react';
import './NewsArticle.css';

function NewsArticle(props) {
  return (
    <div>
      <p>The headline: {props.headline}</p>
      <p>The description: {props.description}</p>
      <p>The link: {props.link}</p>
      <p>The picture: {props.image}</p>
    </div>
  )
}
export default NewsArticle;
