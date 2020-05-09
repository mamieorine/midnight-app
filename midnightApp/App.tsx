
// App.js
import React, { Component } from 'react';
import firebase from 'firebase';

class App extends Component {
  constructor(props: any){super(props);var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);
}
  render() {
    return (
      <div className="container">
      </div>
    );
  }
}
export default App;