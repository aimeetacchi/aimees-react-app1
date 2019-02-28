import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Header title="Aimees Weather APP"/>
      <Main/>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
