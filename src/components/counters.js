import React, { Component } from "react";
import Counter from "./counter";
export class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
