import React from 'react';
import styles from './total.module.css';
import { selectBudget } from '../budget/budgetSlice';
import { selectExpenses } from '../expenses/expensesSlice';
import { useSelector } from 'react-redux';


const Total = () => {
    const expenses = useSelector(selectExpenses);
    let expensesAmounts = expenses.map(expense => expense.total);
    expensesAmounts = expensesAmounts.map((expense) => Number(expense));
    const totalExpenses = expensesAmounts.reduce((a,b) => a + b, 0);
    const budget = useSelector(selectBudget);
    const moneyLeft = (Math.round((budget.amount - totalExpenses) * 100)) / 100;
    console.log(expenses)

  return (
    <div className={styles.total}>
        <span className={styles['money-left']}>Money left : {moneyLeft > 0 ? moneyLeft : 0} €</span>
        <span className={styles['total-expenses']}>Total expenses : {Math.round(totalExpenses * 100) / 100} €</span>
    </div>
  )
}

export default Total