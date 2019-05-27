import React from "react";

function Counter(props) {
  function formatCount() {
    return props.counter.value === 0 ? "zero" : props.counter.value;
  }

  /* const doHandleIncrement = () => {
    handleIncrement({ id: 1 });
  }; */

  return (
    <div>
      {props.children}
      {/*  <h4>Counter #{props.counter.id}</h4> */}
      <span className={getBadgeClasses()}>{formatCount()}</span>
      <button
        onClick={() => props.onIncrement(props.counter)}
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
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
