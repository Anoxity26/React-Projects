import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
const [counter, setCounter] = useState(0)

const increaseValue = () =>{
  if (counter >= 20) {
    setCounter(20);
  } else {
    setCounter(counter + 1);
  }
}

const decreaseValue = () => {
  if(counter<=0){
    setCounter(0)
  }
  else{setCounter(counter - 1);}
  ;
};

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={increaseValue}>Increase</button>
      <button onClick={decreaseValue}>Deccrease</button>
    </>
  );
}

export default App
