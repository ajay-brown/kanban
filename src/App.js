import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getCardsFrom, addCardsTo } from './server/db/kanban.db';
import CardForm from './cardForm'; //add new card form

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
      console.log('cards in componnent did mount', cards);
      this.setState({ cards }, () => {
        console.log('this.state', this.state);
      });
    });
  }

  addCard(card) {
    addCardsTo(card).then(cards => {
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
        <CardForm addCard={this.addCard} />
      </div>
    );
  }
}
React.createElement;

function CardsList(props) {
  console.log('cardslist props', props.cards);
  return props.cards.map(card => <div key={card.id}> {card.name}</div>);
}

export default App;
