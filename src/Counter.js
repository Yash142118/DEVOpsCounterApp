import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Counter() {
  const [initialValue, setInitialValue] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
    <p>Use the below buttons to Increase or Decrease the counter value.</p>
        <div className='Parent-Counter'>
          <div className='Counter-Adjustments'>
            <p>INCREASE FROM HERE</p>
            <button
              className='Increase-Counter Counter-button'
              onClick={() => setInitialValue(initialValue + 1)}
            >
              <p className='Icon-style'>+</p>
            </button>
          </div>

          <div className='Counter-value Counter-Adjustments'>
            <p>Count is</p>
            <span>{initialValue}</span>
          </div>

          <div className='Counter-Adjustments'>
            <p>DECREASE FROM HERE</p>
            <button
              className='Decrease-Counter Counter-button'
              onClick={() => setInitialValue(initialValue === 0 ? initialValue : initialValue - 1)}
            >
              <p className='Icon-style'>-</p>
            </button>
          </div>
        </div>
        <button className='button' onClick={() => setInitialValue(0)}>Reset</button>    
      </header>
    </div>
  );
}

export default Counter;
