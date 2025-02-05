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
            const expenseId = Number(id)
            state = state.filter((expense) => expense.id !== expenseId)
            return state
        },
        editTotal: (state, action) => {
            const { days } = action.payload;
            const oneTime = state.filter((expense) => expense.type === 'One-time');
            const daily = state.filter((expense) => expense.type === 'Daily');
            const updateDaily = daily.map((expense) => expense.total = expense.amount * days);
            state = oneTime.concat(updateDaily);
        }
    }
});

export const selectExpenses = (state) => state.expenses;
export const {addExpense, removeExpense, editTotal} = expensesSlice.actions;
export default expensesSlice.reducer;