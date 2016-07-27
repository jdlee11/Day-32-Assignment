import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

const SingleCard = React.createClass({
  getInitialState: function(){
    return {
      name: '',
      damageType: '',
      number: '',
      height: '',
      weight: ''
    };
  },
  componentDidMount: function(){
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: `https://tiny-za-server.herokuapp.com/collections/jlee-day-32-cards/${this.props.params.id}`,
      success: (response) => {
        this.setState(response);
      }
    });
  },
  componentWillReceiveProps: function(nextProps){
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: `https://tiny-za-server.herokuapp.com/collections/jlee-day-32-cards/${nextProps.params.id}`,
      success: (response) => {
        this.setState(response);
      }
    });
  },
  render: function(){
    return (
      <div className="cardview">
          <p>{`Name: ${this.state.name}`}</p>
          <p>{`Number: ${this.state.number}`}</p>
          <p>{`Type: ${this.state.damageType}`}</p>
          <p>{`Height: ${this.state.height}`}</p>
          <p>{`Weight: ${this.state.weight}`}</p>
      </div>
    );
  }
});

export default SingleCard;
