import { useState } from 'react';
import Restaurant from './Restaurant';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const upCounterHandle = () => {
    const value = counter + 1;
    setCounter(value);
  };
  const upOne = () => {
    const value = counter + 1;
    setCounter(value);
  };
  const upTen = () => {
    const value = counter + 10;
    setCounter(value);
  };
  const downHundred = () => {
    const value = counter - 100;
    setCounter(value);
  };
  const upTwentyfive = () => {
    const value = counter + 25;
    setCounter(value);
  };
  return (
    <>
      <div className="counterBox">
        <button onClick={upCounterHandle}>{counter}</button>
      </div>
      <div>
        <button onClick={upOne}>+1</button>
        <button onClick={upTen}>+10</button>
        <button onClick={downHundred}>-100</button>
        <button onClick={upTwentyfive}>+25</button>
      </div>
      <Restaurant />
    </>
  );
}

export default App;
