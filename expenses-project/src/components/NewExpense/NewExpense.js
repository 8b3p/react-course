import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [formShow, setFormShow] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const hideForm = () => {
    setFormShow(false);
  }
  const showForm = () => {
    setFormShow(true);
  }

  return (
    <div className='new-expense'>
      {formShow && <ExpenseForm onHideForm={hideForm} onSaveExpenseData={saveExpenseDataHandler} />}
      {!formShow && <button onClick={showForm}>Add new expense</button>}
    </div>
  );
};

export default NewExpense;