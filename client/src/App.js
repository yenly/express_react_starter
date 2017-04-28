import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';

class App extends Component {
  state = { users: []};

  componentDidMount() {
    // fetch('https://api.github.com/users/yenly', {
    //   accept: 'application/json',
    // })
    //   .then(function(res) {
    //     return res.json();
    //   })
    //   .then(function(json) {
    //     console.log(json);
    //   });
    // axios.get('users')
    // .then(function(response) {
    //   console.log(response.data);
    //   console.log(response.status);
    // });
    fetch('users')
    .then(res => res.json())
    .then(data => {
      console.log(data.users);
      this.setState({ users: data.users });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.users.map(user =>
           <p key={user.id}>{user.username}</p>
         )}
       </div>
      </div>
    );
  }
}

export default App;
