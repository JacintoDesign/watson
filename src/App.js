import React, { Component } from 'react';
import './App.css';

import Footer from './Components/Footer/Footer.js';
import Navbar from './Components/Nav/Navbar.js';
import TopImage from './Components/TopImage/TopImage.js';
import Translator from './Components/Translator/Translator.js';
import Morse from './Components/Morse/Morse.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <TopImage />
        <Translator />
        <Morse /> 
        <Footer />
      </div>
    );
  }
}

export default App;