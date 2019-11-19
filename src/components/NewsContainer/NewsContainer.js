import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

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


export default NewsContainer;
