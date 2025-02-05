import React from 'react';
import styles from './total.module.css';
import { selectBudget } from '../budget/budgetSlice';
import { selectExpenses } from '../expenses/expensesSlice';
import { useSelector } from 'react-redux';


const Total = () => {
    const expenses = useSelector(selectExpenses);
    const expensesAmounts = expenses.map(expense => expense.total);
    const totalExpenses = expensesAmounts.reduce((a,b) => a + b, 0);
    const budget = useSelector(selectBudget);
    const moneyLeft = budget.amount - totalExpenses;

  return (
    <div className={styles.total}>
        <span className={styles['money-left']}>Money left : {moneyLeft} €</span>
        <span className={styles['total-expenses']}>Total expenses : {totalExpenses} €</span>
    </div>
  )
}

export default Total