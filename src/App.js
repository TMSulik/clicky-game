import React, { Component } from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
class App extends Component {

  render() {  
    return (
      <div className="App">
        <div className="App-body"> 
          <Gallery />
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
