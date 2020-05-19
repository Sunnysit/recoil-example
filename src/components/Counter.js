import React from 'react';
import { useRecoilState } from 'recoil';
import { counterState } from '../store/atom';

const Counter = () => {
  const [counter, setCounter] = useRecoilState(counterState);

  return (
    <div>
      <p>Number:{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(counter - 1)}>-1</button>
    </div>
  );
};

export default Counter;
