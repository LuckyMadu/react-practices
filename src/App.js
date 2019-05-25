import React from "react";

function App() {
  const state = {
    count: 1
  };

  function formatCount() {
    const { count } = state;
    return count === 0 ? "zero" : count;
  }

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button style={{ fontSize: 20 }} className="btn btn-secondary btn-md">
        Increment
      </button>
    </div>
  );

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default App;
