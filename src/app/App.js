import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Budget from "../features/budget/budget";
import AddExpenseForm from "../features/expenses/addExpenseForm/addExpenseForm";
import ExpensesList from "../features/expenses/expensesList/expensesList";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Budget</h1>
      </header>
      <Budget />
      <AddExpenseForm />
      <ExpensesList />
    </div>
  );
};