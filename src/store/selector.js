import { selector } from 'recoil';
import { inputText } from './atom';

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(inputText);

    return text.length;
  },
});
