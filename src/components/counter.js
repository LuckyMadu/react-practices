import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [product] = useState();

  function formatCount() {
    return count === 0 ? "zero" : count;
  }

  const handleIncrement = product => {
    console.log(product);
    setCount(count + 1);
  };

  /* const doHandleIncrement = () => {
    handleIncrement({ id: 1 });
  }; */

  return (
    <div>
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => handleIncrement(product)}
        className="btn btn-secondary btn-md"
      >
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

export default Counter;
