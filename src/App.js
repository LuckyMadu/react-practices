import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  function formatCount() {
    return count === 0 ? "zero" : count;
  }

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button onClick={handleIncrement} className="btn btn-secondary btn-md">
        Increment
      </button>
    </div>
  );

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default App;
