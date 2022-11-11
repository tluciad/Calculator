import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import Button1 from './components/Button1';
import ScreenInput from './components/screenInput';
import ClearButton from './components/ClearButton';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import React, { Component }  from 'react';

function App() {

  const [input, setInput] = useState('');

  const appendInput = val => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('please enter values');
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='image freecodecamp' />
      </div>
      <div className='calculator-container'>
        <ScreenInput input={input} />
        <div className='row'>
          <Button1 manageClick={appendInput}>1</Button1>
          <Button1 manageClick={appendInput}>2</Button1>
          <Button1 manageClick={appendInput}>3</Button1>
          <Button1 manageClick={appendInput}>+</Button1>
        </div>
        <div className='row'>
          <Button1 manageClick={appendInput}>4</Button1>
          <Button1 manageClick={appendInput}>5</Button1>
          <Button1 manageClick={appendInput}>6</Button1>
          <Button1 manageClick={appendInput}>-</Button1>
        </div>
        <div className='row'>
          <Button1 manageClick={appendInput}>7</Button1>
          <Button1 manageClick={appendInput}>8</Button1>
          <Button1 manageClick={appendInput}>9</Button1>
          <Button1 manageClick={appendInput}>*</Button1>
        </div>
        <div className='row'>
          <Button1 manageClick={calculateResult}>=</Button1>
          <Button1 manageClick={appendInput}>0</Button1>
          <Button1 manageClick={appendInput}>.</Button1>
          <Button1 manageClick={appendInput}>/</Button1>
        </div>
        <div className='row'>
          <ClearButton manageClear={() => setInput('')}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
