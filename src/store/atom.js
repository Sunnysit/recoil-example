import { atom } from 'recoil';

export const counterState = atom({
  key: 'CounterState',
  default: 0,
});

export const inputText = atom({
  key: 'inputText',
  default: '',
});
