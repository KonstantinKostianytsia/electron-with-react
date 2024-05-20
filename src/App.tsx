import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>
        <p>Click to increase</p>
      </button>
    </div>
  );
}

export default App;
