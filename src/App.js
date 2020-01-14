import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Books from './components/Books';
import Footer from './components/Footer';

class App extends Component {
   
  render() {
    
    return (
      <div className="app-header">
        <Header />
        <Navbar />
        <Books />
        <Footer />
      </div>
    );
  }
}
export default App;
