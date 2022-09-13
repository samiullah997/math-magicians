import React, { useState } from 'react';
import calculate from '../logic/calculate';
import NavBar from './NavBar';

export default function Calculator() {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateObject = (e) => {
    const buttonName = e.target.textContent;
    const myObj = calculate(state, buttonName);
    setState(myObj);
  };

  const { total, next, operation } = state;
  const op = operation === '%' ? '%' : operation;
  let result = '';
  if (total) {
    result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
    result = `${next} ${op || ''}`;
  }

  return (
    <div className="main-container">
      <NavBar />
      <div className="container">
        <h3 className="title">Lets Do Some Math!</h3>
        <div className="wrapper">
          <div className="txt-area">{result || 0}</div>
          <div className="input-area">
            <div className="row">
              <div onClick={updateObject} role="presentation">AC</div>
              <div onClick={updateObject} role="presentation">+/-</div>
              <div onClick={updateObject} role="presentation">%</div>
              <div onClick={updateObject} role="presentation" className="orange">÷</div>
            </div>
            <div className="row">
              <div onClick={updateObject} role="presentation">7</div>
              <div onClick={updateObject} role="presentation">8</div>
              <div onClick={updateObject} role="presentation">9</div>
              <div onClick={updateObject} role="presentation" className="orange">x</div>
            </div>
            <div className="row">
              <div onClick={updateObject} role="presentation">4</div>
              <div onClick={updateObject} role="presentation">5</div>
              <div onClick={updateObject} role="presentation">6</div>
              <div onClick={updateObject} role="presentation" className="orange">-</div>
            </div>
            <div className="row">
              <div onClick={updateObject} role="presentation">1</div>
              <div onClick={updateObject} role="presentation">2</div>
              <div onClick={updateObject} role="presentation">3</div>
              <div onClick={updateObject} role="presentation" className="orange">+</div>
            </div>
            <div className="row">
              <div onClick={updateObject} role="presentation" className="btn-zero">0</div>
              <div onClick={updateObject} role="presentation">.</div>
              <div onClick={updateObject} role="presentation" className="orange">=</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
