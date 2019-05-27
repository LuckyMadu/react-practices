import React, { useState } from "react";

function Counter(props) {
  const [value, setCount] = useState(props.counter.value);

  function formatCount() {
    return value === 0 ? "zero" : value;
  }

  const handleIncrement = () => {
    setCount(value + 1);
  };

  /* const doHandleIncrement = () => {
    handleIncrement({ id: 1 });
  }; */

  return (
    <div>
      {props.children}
      {/*  <h4>Counter #{props.counter.id}</h4> */}
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => handleIncrement()}
        className="btn btn-secondary btn-md"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        Delete
      </button>
    </div>
  );

  function getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
