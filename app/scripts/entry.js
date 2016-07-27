import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import HomePage from './components/homepage';
import LoginForm from './components/loginform';
import SingleCard from './components/singlecard';
import NewCardForm from './components/newcard';
import { Router, Route, hashHistory } from 'react-router'; // this module has named exports

$.ajax({
  type: 'GET',
  url: "https://tiny-za-server.herokuapp.com/collections/jlee-day-32-cards",
  contentType: 'application/json',
  // data: JSON.stringify({
  //   name: "Bulbasaur",
  //   damageType: "Grass",
  //   number: "#001",
  //   height: "0.9 m",
  //   weight: "0.7 kg"
  // }),
  success: function(response){
    console.log(response);
  }
});

const TradingRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={HomePage}>
      <Route path='login' component={LoginForm}/>
      <Route path='makenew' component={NewCardForm}/>
      <Route path='pokemon/:id' component={SingleCard}/>
    </Route>
  </Router>
);

ReactDOM.render(TradingRouter,
  document.getElementById('container'));






// **********************************************************
