import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

function NewsContainer(props) {
  return (
    <div className='newsContainer'>
      {props.news.map(article => {
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
