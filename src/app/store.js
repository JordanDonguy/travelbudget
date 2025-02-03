import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from '../features/budget/budgetSlice';
import expensesReducer from '../features/expenses/expensesSlice';

export default configureStore({
    reducer: {
        budget: budgetReducer,
        expenses: expensesReducer
    }
});