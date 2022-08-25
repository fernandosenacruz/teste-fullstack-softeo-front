import React, { useEffect, useState } from 'react';
// import pacients from '../api/termIncome.json';

function Calc() {
  const [showInput, setShowInput] = useState(false);
  const [month, setMonth] = useState('');
  const [dateIncome, setDateIncome] = useState('');

  useEffect(() => {}, []);

  console.log(month);
  // const monthIncome = pacients.map(pacient => pacient.dateInstallmentAmount.paymentMonths.filter(paymentMonth => paymentMonth === month));

  const handleMonth = (e) => {
    if (e.target.id !== 'other-month') {
      setShowInput(false);
      setMonth(e.target.id);
    } else {
      setShowInput(true);
      setDateIncome(e.target.id);
    }
  };

  const handleDateIncome = (e) => {
    console.log(e.target.value);
    setDateIncome(e.target.value);
  };

  return (
    <div>
      <fieldset>
        <legend>Receita em:</legend>
        <div>
          <input
            type="radio"
            id="actually-month"
            name="selected-month"
            onClick={(e) => handleMonth(e)}
          />
          <label htmlFor="actually-month">mês atual</label>
        </div>
        <div>
          <input
            type="radio"
            id="next-month"
            name="selected-month"
            onClick={(e) => handleMonth(e)}
          />
          <label htmlFor="next-month">próximo mês</label>
        </div>
        <div>
          <input
            type="radio"
            id="other-month"
            name="selected-month"
            onClick={(e) => handleMonth(e)}
          />
          <label htmlFor="other-month">outro mês</label>
        </div>
        {showInput && (
          <div>
            <input
              type="text"
              id="date-income"
              name="date-income"
              onChange={(e) => handleDateIncome(e)}
              placeholder="dia/mês/ano"
            />
          </div>
        )}
      </fieldset>
    </div>
  );
}

export default Calc;
