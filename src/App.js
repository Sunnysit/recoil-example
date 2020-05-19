import React from 'react';
import { RecoilRoot } from 'recoil';

import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TextDisplay from './components/TextDisplay';

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <TextInput />
      <TextDisplay />
    </RecoilRoot>
  );
}

export default App;
