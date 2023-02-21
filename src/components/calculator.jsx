import React from 'react';
import Calculate from '../logic/calculate';

export default function Calculator() {

  // const obj = { total:2, next:2, operation:"-" }

  // const calculate = Calculate (obj, "AC")
  // console.log(calculate);
  // const [value, setValue] = useState('');

  // const [obj, setObj] = useState({
  //   total: '',
  //   next: '',
  //   operation: '',
  // });

  // function cal(e) {
  //   if (e.target.innerText === 'AC') {
  //     const total = Calculate(obj, 'AC');
  //     if (total.total === null) setValue('');
  //     setObj(total);
  //   } else if (e.target.innerText === '+/-') {
  //     const total = Calculate(obj, '+/-');
  //     if (total.total) {
  //       setValue(total.total);
  //     }
  //   } else if (e.target.innerText === '=') {
  //     const total = Calculate(obj, '=');
  //     if (total.total) {
  //       setValue(total.total);
  //     }
  //   } else {
  //     setValue(value + e.target.innerText);
  //     const inputValue = value + e.target.innerText;
  //     for (let i = 0; i < inputValue.length; i += 1) {
  //       if (inputValue[i] === '%' || inputValue[i] === '÷' || inputValue[i] === 'x' || inputValue[i] === '-' || inputValue[i] === '+') {
  //         const newObj = obj;
  //         let value1 = '';
  //         for (let j = 0; j < i; j += 1) {
  //           value1 += inputValue[j];
  //           newObj.total = value1;
  //         }
  //         for (let j = i; j <= i; j += 1) {
  //           newObj.operation = inputValue[j];
  //         }
  //         let value2 = '';
  //         for (let j = i + 1; j < inputValue.length; j += 1) {
  //           value2 += inputValue[j];
  //           newObj.next = value2;
  //         }
  //         setObj(newObj);
  //       }
  //     }
  //   }
  // }
  return (
    <div className="calculator_container">
      <p>0</p>
      <div className="number_wrapper">
        <div className="row_container">
          <button type="button">AC</button>
          <button type="button">+/-</button>
          <button type="button">%</button>
          <button type="button" className="orange">/</button>

          <button type="button">9</button>
          <button type="button">8</button>
          <button type="button">7</button>
          <button type="button" className="orange">x</button>

          <button type="button">6</button>
          <button type="button">5</button>
          <button type="button">4</button>
          <button type="button" className="orange">-</button>

          <button type="button">3</button>
          <button type="button">2</button>
          <button type="button">1</button>
          <button type="button" className="orange">+</button>

          <button type="button" className="zero">0</button>
          <button type="button">.</button>
          <button type="button" className="orange">=</button>
        </div>
      </div>
    </div>

  );
}
