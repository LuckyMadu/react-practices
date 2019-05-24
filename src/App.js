import React from "react";

function App() {
  const state = {
    count: 0
  };

  function formatCount() {
    const { count } = state;
    return count === 0 ? <h3>zero</h3> : count;
  }
  return (
    <div className="App">
      <span>{formatCount()}</span>
      <button>Increment</button>
    </div>
  );
}

export default App;
