import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectExpenses } from '../expensesSlice';
import styles from './expensesList.module.css';
import { removeExpense } from '../expensesSlice';

const ExpensesList = () => {
    const expenses = useSelector(selectExpenses);
    const dispatch = useDispatch();

    const handleOnClick = (e) => {
        dispatch(removeExpense({id: e.currentTarget.id}));
    }

    const renderedExpenses = expenses.map(expense => (
        <article key={expense.id}  className={styles.expense}>
            <span className={styles.name}>{expense.name}</span>
            <span className={styles.amount}>{expense.amount} €</span>
            <span className={styles.type}>{expense.type}</span>
            <span className={styles.total}>{expense.total} €</span>
            <button className={styles.x} id={expense.id} onClick={handleOnClick}>☒</button>
        </article>
    ))

  return (
    <div className={styles.expensesList}>
        <div>{renderedExpenses}</div>
    </div>
  )
}

export default ExpensesList;