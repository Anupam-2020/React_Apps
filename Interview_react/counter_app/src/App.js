import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);
  const [startStop, setStartStop] = useState(false);
  const [pause, setPause] = useState(false);


  const startStopHandler = () => {
    setStartStop(!startStop)
  }

  const pauseHandler = () => {
    setPause(!pause)
  }

  useEffect(() => {
    if(startStop === false) {
      setCounter(10)
    }

    const interval = setInterval(() => {
      if(startStop === true) {
        setCounter((counter) => counter - 1);
      }
    }, 1000)
    
    if (counter === 0 || pause === true) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [counter, startStop, pause]);



  return (
    <div className="parent_div">
      <h2>Counter: {counter}</h2>
      <div>
        <button onClick={startStopHandler}>{startStop === false ? "Start" : "Stop"}</button>
        {startStop && <button onClick={pauseHandler}>Pause</button>}
      </div>
    </div>
  );
}

export default App;
