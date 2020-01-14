import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Books from './components/Books';

class App extends Component {
   
  render() {
    
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Books />
      </div>
    );
  }
}
export default App;
