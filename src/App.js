import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCardsFrom, addCardsTo } from './server/db/kanban.db';
import cardForm from './cardForm'; //add new card form
let card;
let cards = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    };
    this.addCard = this.addCard.bind(this);
  }

  componentDidMount() {
    getCardsFrom().then(cards => {
      this.setState({ cards }, () => {
        console.log('this.state', this.state);
      });
    });
  }

  addCard(card) {
    addCardsTo(card).then(card => {
      this.setState({ cards });
    });
  }

  renderAllCards() {
    return this.state.cards.map(card => {
      <div>{card.name}</div>;
    });
  }
  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Here's Your Cards:</h1>
        </header>
        <CardsList cards={cards} />
        <cardForm addCard={this.addCard} />
      </div>
    );
  }
}

function CardsList(props) {
  return props.cards.map(item => <div> {card.name}</div>);
}

export default App;
