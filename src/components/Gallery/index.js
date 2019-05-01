import React from "react";
import { inkImages } from '../../services/images';

class Gallery extends React.Component {
  state = { inkblots: [] };

  captions() {
    const arr = [
      "The Railroad",
      "Wormwood",
      "Brimstone",
      "Spades",
      "The Whale",
      "Stewpot",
      "Bonaparte",
      "Augustín de Vedia",
      "Nine",
      "Rasputin",
      "Black Phillip",
      "Meat Blanket",
      "The Oceans",
      "Silvery Spider",
      "Dark Pyramid",
      "Labyrinth",
      "Grapevines",
      "Teratoma",
      "Pliny the Elder",
      "Rosewood",
      "Caspian Sea",
      "Abandoned Altar",
      "Fatima",
      "Tigers",
      "Pistons",
      "Bison",
      "Shadow Self",
      "Astrolabe",
      "Pismire",
      "Dread",
      "Bondage",
      "Friendly Angel",
      "Minerva",
      "Hyperion",
      "Blind Faith",
      "Lost Love",
      "Vermillion"
    ];
    const random = Math.floor(Math.random() * (arr.length));
    return arr[random];
  } 

  componentDidMount() {
    this.setState({ inkblots: inkImages });
  }

  handleClick = event => {
    event.preventDefault();
    console.log("CLICKED: ", event.target.alt);
    // window.location.reload();
    // this.componentDidMount();
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
            <img src={require(`../../images/${inkblot}`)} alt={`blot#${this.getIndex(inkblot)}`}  />
            <p>{this.captions()}</p>
          </button>
        )    
      })
    );
  }

  render() {
    console.log('state:', this.state);
    return (
      <div>
        {this.renderImages()}
      </div>
    );
  }

}

export default Gallery;