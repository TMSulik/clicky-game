import React from "react";
import Header from '../../components/Header';
import { inkImages } from '../../services/images';
import { words } from '../../services/captions';
import { randomize } from '../../services/shuffle';
import { giveInstruction } from '../../services/click';
import { setHighScore } from '../../services/top-score';
import '../../App.css';
import "./style.css";
import logo from './logo.svg';

class Gallery extends React.Component {

  state = { inkblots: [], guesses: [], caps: [], instruction: {guide:"Click any image to start", correct: 0}, best: 0 };

  componentDidMount() {
    this.setState({ inkblots: inkImages, caps: words });
  }

  handleClick = event => {
    event.preventDefault();
    
    if(!this.state.guesses.includes(event.target.alt) ) {
      this.state.guesses.push(event.target.alt);
      this.setState({
        instruction: giveInstruction(this.state.guesses),
        best: setHighScore(this.state.best, this.state.instruction.correct+1)
      })
      console.log("GUESSES: ", this.state.guesses);
    } else {
      this.setState({
        guesses: [],
        instruction: {guide: "Begin again", correct: '0'}
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
        <div className="navbar top-line">
          <img src={logo} className={"App-logo"} alt="logo" />
          <img src={logo} className={"App-logo"} alt="logo" />
          <img src={logo} className={"App-logo"} alt="logo" />
          <img src={logo} className={"App-logo"} alt="logo" />
            <div className="top-line">
              <ul>
                <li id="instruction">{this.state.instruction.guide}</li>
                <li id="current-score">Current Score: {this.state.instruction.correct}/16</li>
                <li id="top-score">Best Score: {this.state.best}/16</li>
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