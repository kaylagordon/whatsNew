import React, { Component } from 'react';
// import local from '../../data/local';
// import entertainment from '../../data/entertainment';
// import health from '../../data/health';
// import science from '../../data/science';
// import technology from '../../data/technology';
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
import Footer from '../Footer/Footer'

let local;
let entertainment;
let health;
let science;
let technology;

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
      .then(response => response.json())
      .then(newsData => this.assignData(newsData))
      .catch(error => console.log(error))
  }

  assignData = (data) => {
    local = data.local;
    entertainment = data.entertainment;
    health = data.health;
    science = data.science;
    technology = data.technology;
    this.setState({ news: local })
  }

  changeNewsSource = (newsSource) => {
    this.setState({
      news: newsSource
    });
  }

  searchNews = (query) => {
    const filteredNews = this.state.news.filter(article => article.description.toUpperCase().includes(query.toUpperCase()));
    this.setState({
      news: filteredNews
    })
  }

  render () {
    return (
      <div className='app'>
        <SearchForm
          searchNews = {this.searchNews}
        />
        <Menu
          local = {local}
          health = {health}
          science = {science}
          technology = {technology}
          entertainment = {entertainment}
          changeNewsSource = {this.changeNewsSource}
          state = {this.state.news}
        />
        <NewsContainer
          news = {this.state.news}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
