import React from 'react';
import { useRecoilState } from 'recoil';
import { inputText } from '../store/atom';

const TextInput = () => {
  const [userInput, setUserInput] = useRecoilState(inputText);

  const textChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <input onChange={textChangeHandler} type='text' value={userInput} />
    </div>
  );
};

export default TextInput;
