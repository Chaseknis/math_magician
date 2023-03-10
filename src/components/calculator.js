import React, { useState, useCallback } from 'react';
import calculate from '../logic/calculate';
import './styles/calculator.css';
import './styles/button.css';

export default function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClickHandler = useCallback((e) => {
    const results = calculate(state, e.target.innerText);
    setState(results);
  }, [state]);

  const { total, next, operation } = state;

  return (
    <div className="calculator_container">
      <h2>Let&rsquo;s Do Some Math!</h2>
      <div className="calculator_wrapper">
        <p>
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </p>
        <div className="number_wrapper">
          <div className="row_container">
            <button type="button" onClick={onClickHandler}>AC</button>
            <button type="button" onClick={onClickHandler}>+/-</button>
            <button type="button" onClick={onClickHandler}>%</button>
            <button type="button" onClick={onClickHandler} className="orange">÷</button>

            <button type="button" onClick={onClickHandler}>9</button>
            <button type="button" onClick={onClickHandler}>8</button>
            <button type="button" onClick={onClickHandler}>7</button>
            <button type="button" onClick={onClickHandler} className="orange">x</button>

            <button type="button" onClick={onClickHandler}>6</button>
            <button type="button" onClick={onClickHandler}>5</button>
            <button type="button" onClick={onClickHandler}>4</button>
            <button type="button" onClick={onClickHandler} className="orange">-</button>

            <button type="button" onClick={onClickHandler}>3</button>
            <button type="button" onClick={onClickHandler}>2</button>
            <button type="button" onClick={onClickHandler}>1</button>
            <button type="button" onClick={onClickHandler} className="orange">+</button>

            <button type="button" onClick={onClickHandler} className="zero">0</button>
            <button type="button" onClick={onClickHandler}>.</button>
            <button type="button" onClick={onClickHandler} className="orange">=</button>
          </div>
        </div>
      </div>
    </div>

  );
}
