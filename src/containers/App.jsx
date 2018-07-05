import React, { Component } from 'react';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div id="app">
        <h1 className="app-title">Tweeter</h1>
        <Post />
      </div>
    );
  }
}

export default App;
