import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Budget from "../features/budget/budget";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Travel Budget</h1>
      </header>
      <Budget />
    </div>
  );
};