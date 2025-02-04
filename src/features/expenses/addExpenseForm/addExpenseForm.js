import react, { useState, useEffect } from "react";
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
            setTotal(e.currentTarget.value * days)
        } else {
            setTotal(e.currentTarget.value)
        }
    }

    function handleTypeChange(e) {
        setType(e.currentTarget.value);
        if (e.currentTarget.value === "Daily") {
            setTotal(amount * days)
        } else {
            setTotal(amount)
        }
    }

    useEffect(() => {
        if (type === "Daily") {
            setTotal(amount * days)
        } else {
            setTotal(amount)
        }
    }, [days]);

    function handleSubmit(e) {
        e.preventDefault();
        let id = Math.floor(Math.random() * 1000)
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
                <div>
                    <label>Name :</label>
                    <input 
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    className={styles.input}
                    required
                    />
                </div>
                <div>
                    <label>Amount (€) :</label>
                    <input
                    id="amount"
                    type="number"
                    step="0.1"
                    value={amount}
                    onChange={handleAmountChange}
                    className={styles.input}
                    required
                    />
                </div>
                <div>
                    <label>Type :</label>
                    <select id="type" value={type} onChange={handleTypeChange} className={styles.input}>
                        <option key="a" value="Daily">Daily</option>
                        <option key="b" value="One-time">One-time</option>
                    </select>
                </div>
                <label>Total : <span  className={styles.total}>{total} €</span></label>
                <button className={styles.button}>Add expense</button>
            </form>
        </div>
    )
}