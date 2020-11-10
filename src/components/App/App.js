import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { deleteUrl } from '../../apiCalls'
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .then(data => this.setState({ urls: data.urls }))
  }

  // componentDidUpdate() {
  //   getUrls()
  //   .then(data => this.setState({ urls: data.urls }))
  // }

  addUrlToAppState = (urlToAdd) => {
    this.setState( { urls: [...this.state.urls, urlToAdd] })
  }

  handleDelete = (id) => {
    deleteUrl(id)
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrlToAppState={this.addUrlToAppState} />
        </header>

        <UrlContainer urls={this.state.urls} addUrlToAppState={this.addUrlToAppState} handleDelete={this.handleDelete} />
      </main>
    );
  }
}

export default App;
