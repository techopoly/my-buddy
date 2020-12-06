import React, { Component } from 'react';
import Card from './Card';
/* import robots from './robots'; */

class Cardlist extends Component {

  createElement = (props) => {
    const {robots} = props;
    let element = [];
    for (let i = 0; i < 7; i++) {
      element.push(
        <Card
          key={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
          id={robots[i].id}
        />
      );
    }
    return element;
  };

  render() {
    return this.createElement(this.props);
  }
}


const CardArray = (props) => {
 const {robots} = props;
  const element = robots.map((robot, i) => {
    return (
      <Card
        key={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        id={robots[i].id}
      />
    )
  });

  return element;
}

export {Cardlist, CardArray} 