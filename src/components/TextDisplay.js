import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { inputText } from '../store/atom';
import { charCountState } from '../store/selector';

const TextDisplay = () => {
  const [userInput] = useRecoilState(inputText);
  const count = useRecoilValue(charCountState);
  return (
    <div>
      <p>{userInput}</p>
      <p>Character Count: {count}</p>
    </div>
  );
};

export default TextDisplay;
