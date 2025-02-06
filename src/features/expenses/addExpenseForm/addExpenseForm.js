import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; 
import { useSelector, useDispatch } from "react-redux";
import { selectDays } from "../../budget/budgetSlice";
import styles from './addExpenseForm.module.css';
import { addExpense } from "../expensesSlice";

export default function AddExpenseForm() {
    const [name, setName] = useState('');
    const [type, setType] = useState('Daily');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState(0);
    const days = Object.values(useSelector(selectDays));
    const dispatch = useDispatch();

    function handleAmountChange(e) {
        setAmount(e.currentTarget.value);
        if (type === 'Daily') {
            setTotal(Math.round(e.currentTarget.value * days * 100) / 100)
        } else {
            setTotal(e.currentTarget.value)
        }
    }

    function handleTypeChange(e) {
        setType(e.currentTarget.value);
        if (e.currentTarget.value === "Daily") {
            setTotal(Math.round(amount * days * 100) / 100)
        } else {
            setTotal(amount)
        }
    }

    useEffect(() => {
        if (type === "Daily") {
            setTotal(Math.round(amount * days * 100) / 100)
        } else {
            setTotal(amount)
        }
    }, [days, type, amount]);

    function handleSubmit(e) {
        e.preventDefault(); 
        let id = uuidv4();
        dispatch(addExpense({
            id: id,
            name: name,
            amount: amount,
            total: total,
            type: type
        }));
        setName('');
        setAmount('');
        setTotal(0);
    };
 
    return (
        <div >
            <form onSubmit={handleSubmit} className={styles['expense-form']}>
                <label className={styles.name}>Description :
                    <input 
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    className={styles.input}
                    required
                    />
                </label>
                <label className={styles.amount}>Amount (€) :
                    <input
                    id="amount"
                    type="number"
                    step="0.1"
                    value={amount}
                    onChange={handleAmountChange}
                    className={styles.input}
                    required
                    />
                </label>
                <label className={styles.type}>Type :
                    <select id="type" value={type} onChange={handleTypeChange} className={styles.input}>
                        <option key="a" value="Daily">Daily</option>
                        <option key="b" value="One-time">One-time</option>
                    </select>
                </label>
                <label className={styles['total-bloc']}>Total : <span  className={styles.total}>{total} €</span></label>
                <button className={styles.button}>Add expense</button>
            </form>
        </div>
    )
}