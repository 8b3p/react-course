import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const filterChangeHandler = newYear => {
    setSelectedYear(newYear);
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
