import React, { Component } from 'react';
import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: local
    }
  }

  changeNewsSource = (newsSource) => {
    this.setState({
      news: newsSource
    });
  }

  render () {
    return (
      <div className='app'>
        <SearchForm />
        <Menu
          local = {local}
          health = {health}
          science = {science}
          technology = {technology}
          entertainment = {entertainment}
          changeNewsSource = {this.changeNewsSource}
        />
        <NewsContainer
          news = {this.state.news}
        />
      </div>
    );
  }
}

export default App;
