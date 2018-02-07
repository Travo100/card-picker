import React, { Component } from 'react';

import Header from './components/Header';
import Cards from './components/Cards';

import chihuahuaCards from './cards.json';

class App extends Component {
  
  state = {
    chihuahuas: chihuahuaCards,
    guessScore: 0,
    matchScore: 0,
    chihuahuaMatchId: 0
  }

  componentDidMount() {
    this.setState({
      chihuahuaMatchId: this.getRandomCardId(this.state.chihuahuas)
    });
  }

  updateScore = (chihuahuaClicked) => {
    // if you are matched with a chihuahua 
    if(chihuahuaClicked.id === this.state.chihuahuaMatchId) {
      // update the chihuahua matches score
      this.setState({
        matchScore: this.state.matchScore + 1,
        chihuahuaMatchId: this.getRandomCardId(this.state.chihuahuas)
      });
    } else {
      // otherwise update the chihuahua guess score
      this.setState({
        guessScore: this.state.guessScore + 1
      });
    }
  }

  getRandomCardId = (cards) => Math.floor(Math.random() * cards.length) + 1;
  
  render() {
    return (
      <div className="container">
        <Header guessScore={this.state.guessScore} matchScore={this.state.matchScore}/>
        {this.state.chihuahuas.map(chihuahua => 
          <Cards
            id = {chihuahua.id}
            key = {chihuahua.id}
            image = {chihuahua.image} 
            name={chihuahua.name}
            updateScore={this.updateScore}
          />
        )}
      </div>
    );
  }
}

export default App;
