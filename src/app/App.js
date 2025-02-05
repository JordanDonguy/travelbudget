import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import styles from './App.module.css';
import Budget from "../features/budget/budget";
import AddExpenseForm from "../features/expenses/addExpenseForm/addExpenseForm";
import ExpensesList from "../features/expenses/expensesList/expensesList";
import Total from "../features/total/total";

export default function App() {
  return (
    <div className={styles.app}>
      <header className="App-header">
        <h1>Travel Budget</h1>
      </header>
      <Budget />
      <Total />
      <AddExpenseForm />
      <ExpensesList />
    </div>
  );
};