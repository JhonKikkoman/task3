import Stars from './components/Stars/Stars';
import Button from './components/button/Button'
import './App.css';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState(3);

  const addClickFunc = () => {
    let counter: number = state;
    counter++;
    setState(counter > 5 ? counter = 0 : counter)
  }
  const minusClickFunc = () => {
    let counter: number = state;
    counter--;
    setState(counter < 0 ? counter = 0 : counter)
  }
  return (
    <>
      <Button addClick={addClickFunc} minusClick={minusClickFunc} />
      <Stars count={state} />
    </>
  );
}

export default App;
