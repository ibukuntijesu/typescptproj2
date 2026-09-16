// Code 02: Counter.tsx

import React, { Component } from 'react';

// Step 1: Define an interface for the component's state.
// "count" is a number.
interface CounterState {
  count: number;
}

// Step 2: Since there are no props, we can pass an empty object
// as the first type argument to Component.
// The second type argument describes the state shape.
class Counter extends Component<{}, CounterState> {
  // Step 3: Type the state object with the CounterState interface.
  state: CounterState = {
    count: 0,
  };

  // Step 4: Type the increment method as an arrow function returning void.
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 5: render() returns JSX — its return type is inferred.
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;