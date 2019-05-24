import React from "react";

function App() {
  const state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  function formatCount() {
    const { count } = state;
    return count === 0 ? 'zero': count;
  }

  const styles = {
    fontSize: 14,
    fontWeight: "bold",
    paddingLeft:5,
    paddingRight:5
  };

  return (
    <div className="App">
      <img src={state.imageUrl} alt="" />
      <span style={styles} className="badge badge-primary m-2">
        {formatCount()}
      </span>
      <button style={{fontSize:20}} className="btn btn-secondary btn-md">Increment</button>
    </div>
  );
}

export default App;
