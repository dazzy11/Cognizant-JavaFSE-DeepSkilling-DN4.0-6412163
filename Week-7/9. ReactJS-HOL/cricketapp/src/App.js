import React, { Component } from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      flag: false // Change to false to test other view
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Cricket App</h1>
        {this.state.flag ? <ListofPlayers /> : <IndianPlayers />}
      </div>
    );
  }
}

export default App;
