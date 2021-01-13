import React, { Component } from 'react';

export default class ComponentWithState extends Component {
  state = {
    clicks: 0,
  };

  increase = event => {
    console.log(event);
    this.setState(prevState => {
      {
        const clicks = prevState.clicks + 1;
        console.log(clicks);
        return { clicks };
      }
    });
  };

  render() {
    return (
      <>
        <h1>clik:{this.state.clicks}</h1>
        <button onClick={this.increase} type="button">
          Click me
        </button>
      </>
    );
  }
}
