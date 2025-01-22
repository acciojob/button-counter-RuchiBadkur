
import React from "react";
import './../styles/App.css';
import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0);
  const increament = () => {
      setCounter(counter+1);
  }
  return (
    <div>
        <p>{`Button clicked ${counter} times`}</p>
        <button onClick={increament}>clck</button>
    </div>
  )
}

export default App
