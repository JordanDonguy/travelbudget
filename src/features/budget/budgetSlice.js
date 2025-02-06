import { createSlice } from "@reduxjs/toolkit";

export const budgetSlice = createSlice({
    name: "budget",
    initialState: {
        budget: 0,
        days: 0
    },
    reducers: {
        editBudget: (state, action) => {
            state.budget = action.payload
        },
        editDays: (state, action) => {
            state.days = action.payload;
        }
    }
});

export const selectBudget = (state) => state.budget.budget;
export const selectDays = (state) => state.budget.days;
export const {editBudget, editDays} = budgetSlice.actions;
export default budgetSlice.reducer;