import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';
import PropTypes from 'prop-types';

function NewsContainer({news}) {
  return (
    <div className='newsContainer'>
      {news.map(article => {
        return <NewsArticle
          key = {article.id}
          headline = {article.headline}
          description = {article.description}
          link = {article.url}
          image = {article.img}
        />
      })}
    </div>
  )
}

NewsContainer.propTypes = {
  news: PropTypes.array
}


export default NewsContainer;
