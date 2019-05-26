import React from "react";

function App() {
  const state = {
    count: 1,
    tags: []
  };

  function renderTags() {
    if (state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      {state.tags.length === 0 && "Please create a new tag!"}
      {renderTags()}
    </div>
  );
}

export default App;
