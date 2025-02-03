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
        }
    }
});

export const {addExpense} = expensesSlice.actions;
export default expensesSlice.reducer;