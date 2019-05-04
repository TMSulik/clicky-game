import React from "react";
import Header from '../../components/Header';
import { inkImages } from '../../services/images';
import { words } from '../../services/captions';
import { randomize } from '../../services/shuffle';
import { giveInstruction } from '../../services/click';
import '../../App.css';
import logo from './logo.svg';

class Gallery extends React.Component {

  state = { inkblots: [], guesses: [], caps: [], instruction: "Click any image" };

  componentDidMount() {
    this.setState({ inkblots: inkImages, caps: words });
  }

  handleClick = event => {
    event.preventDefault();
    
    if(!this.state.guesses.includes(event.target.alt) ) {
      this.state.guesses.push(event.target.alt);
      this.setState({
        instruction: giveInstruction(this.state.guesses)
      })
      console.log("GUESSES: ", this.state.guesses);
    } else {
      this.setState({
        guesses: [],
        instruction: "Begin again"
      });
      console.log("GUESSES: ", []);
    }

    randomize(inkImages);
    randomize(words);

    this.setState({
      inkblots: inkImages,
      caps: words
    });
     
  }

  getIndex = (str) => {
    let index = str.slice(8, 10);
    if(index[1] === '.') {
      index = index[0];
    }
    return index;
  }

  renderImages() {    
    return (
      this.state.inkblots.map(inkblot => {
        return(   
          <button onClick={this.handleClick} className="input-lg" key={this.getIndex(inkblot)}>
            <img src={require(`../../images/${inkblot}`)} alt={(`blot#${this.getIndex(inkblot)}`)} />
            <p>{this.state.caps[`${this.getIndex(inkblot)}`]}</p>
          </button>
        )    
      })
    );
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <img src={logo} className={"App-logo"} alt="logo" />
          <img src={logo} className={"App-logo"} alt="logo" />
          <img src={logo} className={"App-logo"} alt="logo" />
          <img src={logo} className={"App-logo"} alt="logo" />
            <div className="top-line">
              <ul>
                <li id="instruction">{this.state.instruction.guide}</li>
                <li id="current-score">Current Score: 0/16</li>
                <li id="top-score">Top Score: 0/16</li>
              </ul>
            </div>
        </div>
        <Header />
        {this.renderImages()}
      </div>
    );
  }

}

export default Gallery;