import React from 'react';
import { Link, hashHistory } from 'react-router';
import $ from 'jquery';

const NewCardForm = React.createClass({
  makeCardFunction: function(){
    let name = this.refs.name.value;
    let number = this.refs.number.value;
    let damageType = this.refs.damageType.value;
    let height = this.refs.height.value;
    let weight = this.refs.weight.value;
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: `https://tiny-za-server.herokuapp.com/collections/jlee-day-32-cards/`,
      data: JSON.stringify({
        name: name,
        number: number,
        damageType: damageType,
        height: height,
        weight: weight
      }),
      success: function(response){
        console.log('created a new pokemon card');
        hashHistory.push('/');
      }
    });
  },
  render: function(){
    return (
      <div className="cardview">
          <input type="text" placeholder="name" ref="name"/>
          <input type="text" placeholder="number (#...)" ref="number"/>
          <input type="text" placeholder="type" ref="damageType"/>
          <input type="text" placeholder="height" ref="height"/>
          <input type="text" placeholder="weight" ref="weight"/>
          <input type="button" value="Submit" onClick={this.makeCardFunction}/>
      </div>
    );
  }
});

export default NewCardForm;
