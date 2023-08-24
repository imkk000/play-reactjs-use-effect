import { useState } from 'react';
import ChildComponent from './ChildComponent';

function App() {
  const [counter, setCounter] = useState(1);
  const [childCounter, setChildCounter] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleButtonClick = (_) => {
    setCounter(counter + 1);
    if (counter % 5 === 0) {
      setChildCounter(childCounter + 1);
    }
    if (counter % 10 === 0) {
      setFlag(!flag);
    }
  }

  return (
    <div>
      <button onClick={handleButtonClick}>{counter}</button>
      <ChildComponent flag={flag} counter={childCounter} />
    </div>
  )
}

export default App;
