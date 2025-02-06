import { createSlice } from "@reduxjs/toolkit";
import { selectDays } from "../budget/budgetSlice";
import { useSelector } from "react-redux";

export const expensesSlice = createSlice({
    name: "expenses",
    initialState: [],
    reducers: {
        addExpense: (state, action) => {
            const { id, name, type, amount, total } = action.payload;
            state.push(action.payload)
        },
        removeExpense: (state, action) => {
            const { id } = action.payload;
            state = state.filter((expense) => expense.id !== id)
            return state
        },
        editTotal: (state, action) => {
            const { days } = action.payload;
            const oneTime = state.filter((expense) => expense.type === 'One-time');
            const daily = state.filter((expense) => expense.type === 'Daily');
            const updateDaily = daily.map((expense) => expense.total = Math.round((expense.amount * days) * 100) / 100);
            state = oneTime.concat(updateDaily);
        },
        sortExpenses: (state, action) => {
            state = state.sort((a, b) => b.total - a.total)
        }
    }
});

export const selectExpenses = (state) => state.expenses;
export const {addExpense, removeExpense, editTotal, sortExpenses} = expensesSlice.actions;
export default expensesSlice.reducer;