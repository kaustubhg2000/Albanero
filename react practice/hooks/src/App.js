import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      const [count, setCount] = useState(0)

      useEffect(() => {
        console.log(count);
      
        return () => {
        console.log("count printed")
      }
      }, [count])


      function decrementHandler(){
        setCount(count - 1)
      }

      <button onClick={incrementHandler}> + </button>
      {count}
      <button onClick={decrementHandler}> - </button>

    </div>
  );
}

export default App;
