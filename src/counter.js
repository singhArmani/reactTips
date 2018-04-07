import React from "react";
export default class Counter extends React.PureComponent {
  state = {
    count: 0 // initial state
  };

  handleIncrement = () => {
    // as increment count depends on previous count value, we should use updater function
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter value is: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}
