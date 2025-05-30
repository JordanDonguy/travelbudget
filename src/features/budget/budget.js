import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBudget, editDays } from "./budgetSlice";
import { editTotal } from "../expenses/expensesSlice";
import styles from "./budget.module.css";

export default function Budget() {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('');
    const [days, setDays] = useState('');

    function handleBudgetChange (e) {
        setAmount(e.currentTarget.value);
        dispatch(editBudget({amount: e.currentTarget.value}));
    }

    function handleDaysChange (e) {
        setDays(e.currentTarget.value);
        dispatch(editDays({days: e.currentTarget.value}))
        dispatch(editTotal({days: e.currentTarget.value}));
    }

    return (
        <div className={styles.budget}>
            <label className={styles.bloc}>Budget (€) :
                <input
                type="number"
                step="10"
                value={amount}
                onChange={handleBudgetChange}
                className={styles.input}
                />
            </label>
            <label className={styles.bloc}>Trip length (days) :
                <input
                type="number"
                step="1"
                value={days}
                onChange={handleDaysChange}
                className={styles.input2}
                />
            </label>
        </div>
    )
}