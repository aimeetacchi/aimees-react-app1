import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header title="Aimees React App1"/>
        <p>lorem lorem</p>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
