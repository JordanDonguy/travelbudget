import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBudget, editDays } from "./budgetSlice";
import styles from "./budget.module.css";

export default function Budget() {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState('');
    const [days, setDays] = useState('');

    function handleBudgetChange (e) {
        setAmount(e.target.value);
        dispatch(editBudget({amount: amount}));
    }

    function handleDaysChange (e) {
        setDays(e.target.value);
        dispatch(editDays({days: days}))
    }

    return (
        <div className={styles.budget}>
            <div>
                <span>Budget (€) :</span>
                <input
                type="number"
                step="0.1"
                value={amount}
                onChange={handleBudgetChange}
                className={styles.input}
                />
            </div>
            <div>
                <span>Trip length (days) :</span>
                <input
                type="number"
                step="1"
                value={days}
                onChange={handleDaysChange}
                className={styles.input}
                />
            </div>
        </div>
    )
}