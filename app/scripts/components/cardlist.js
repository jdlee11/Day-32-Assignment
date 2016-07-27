import React from 'react';
import $ from 'jquery';
import SingleCard from './singlecard';
import { Link } from 'react-router';

const CardList = React.createClass({
  getInitialState: function(){
    return {
      cards: []
    };
  },
  componentDidMount: function(){
    $.ajax({
      type: 'GET',
      url: "https://tiny-za-server.herokuapp.com/collections/jlee-day-32-cards",
      success: (data) => {
        this.setState({cards: data});
      }
    });
  },
  componentWillReceiveProps: function(nextProps){
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: `https://tiny-za-server.herokuapp.com/collections/jlee-day-32-cards`,
      success: (data) => {
        this.setState({cards: data});
      }
    });
  },
  render: function(){
    let listOfCards = this.state.cards.map(function(card, index, arr){
      return <li key={index}><Link to={`/pokemon/${card._id}`}>{card.name}</Link></li>;
    });
    return (
      <ul className="cardlist">
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/makenew">Add card</Link></li>
        {listOfCards}
      </ul>
    );
  }
});

export default CardList;
