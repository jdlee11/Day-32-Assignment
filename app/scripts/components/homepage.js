import React from 'react';
import Header from './header';
import CardList from './cardlist';

const HomePage = React.createClass({
  render: function(){
    return (
      <div>
        <Header title="Pokemon Cards" />
        <CardList />
        {this.props.children}
      </div>
    );
  }
});

export default HomePage;
