import react, { useState } from "react";
import { useSelector } from "react-redux";
import { selectDays } from "../../budget/budgetSlice";

export default function AddExpenseForm() {
    const [name, setName] = useState('');
    const [type, setType] = useState('Daily');
    const [amount, setAmount] = useState('');
    const [total, setTotal] = useState('');
    const days = Object.values(useSelector(selectDays));

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

    function handleSubmit(e) {
        e.preventDefault();
    }
    
 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input 
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                required
                />
                <label>Amount (€) :</label>
                <input
                id="amount"
                type="number"
                step="0.1"
                value={amount}
                onChange={handleAmountChange}
                required
                />
                <label>Type :</label>
                <select id="type" value={type} onChange={handleTypeChange}>
                    <option key="a" value="Daily">Daily</option>
                    <option key="b" value="One-time">One-time</option>
                </select>
                <label>Total : {total} €</label>
                <button>Add expense</button>
            </form>
        </div>
    )
}