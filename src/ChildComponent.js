import { useState, useEffect } from 'react';

function ChildComponent({ flag, counter }) {
  const [color, setColor] = useState('red');

  useEffect(() => {
    setColor(flag ? 'blue' : 'red');
    console.log('current:', flag, counter);
  }, [flag]);
  return <p style={{ color }}>Child: {counter}</p>
}

export default ChildComponent;
