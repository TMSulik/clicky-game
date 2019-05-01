import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

class App extends Component {

  handleClick = event => {
    event.preventDefault();
    console.log("CLICKED: ", event.target.alt);
  }

  render() {  
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h4>Click on an image to earn points, but don't click on the same image more than once!</h4>
      </header>

      <div className="App-body"> 
        <h1>Hello from the Tragic Cavern!</h1>
        <div>
          <Gallery />
        </div>
      </div>
      <Footer />
    </div>
    
  );
}
}
export default App;
