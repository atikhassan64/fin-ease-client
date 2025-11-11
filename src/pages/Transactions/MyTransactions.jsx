import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const MyTransactions = () => {
    const { user } = use(AuthContext);
    const [transactions, setTransaction] = useState([]);
    const updateRef = useRef(null);
    const [id, setId] = useState(null);
    // console.log(id)

    useEffect(() => {
        fetch(`http://localhost:3000/transactions?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTransaction(data);
            })
    }, [user])


    const handleUpdate = (id) => {
        updateRef.current.showModal();
        setId(id)
    }
    const handleUpdateTransaction = e => {
        e.preventDefault();
        const type = e.target.type.value;
        const date = e.target.date.value;
        const category = e.target.category.value;
        const amount = e.target.amount.value;
        const description = e.target.description.value;

        const newUpdate = {
            type: type,
            category: category,
            amount: amount,
            description: description,
            date: date,
        }


        fetch(`http://localhost:3000/transactions/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setTransaction(prev => prev.map(t => t._id === id ? { ...t, ...newUpdate } : t));
                updateRef.current.close();
            })
    }


    return (
        <div className="max-w-[1200px] mx-auto py-10">
            <h2 className="text-2xl font-semibold mb-6 text-primary">
                My Transactions
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    transactions.map(transaction => (
                        <div
                            key={transaction._id}
                            className="bg-white rounded-lg shadow-md p-5 border border-amber-100 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${transaction.type === "Income"
                                        ? "bg-accent text-primary"
                                        : "bg-accent text-secondary"
                                        }`}
                                >
                                    {transaction.type}
                                </span>
                                <span className="text-secondary text-sm">{transaction.date}</span>
                            </div>

                            <h3 className="text-lg font-semibold text-secondary">
                                {transaction.category}
                            </h3>
                            <p className="text-primary mt-1 mb-3">৳ {transaction.amount}</p>

                            {/* Buttons */}
                            <div className="flex justify-between gap-2">
                                <button onClick={() => handleUpdate(transaction._id)} className="flex-1 btn btn-outline text-primary border-primary hover:text-white hover:bg-primary transition">
                                    Update
                                </button>
                                <button className="flex-1 btn btn-outline text-secondary border-amber-100 hover:bg-accent transition">
                                    Delete
                                </button>
                                <button className="flex-1 btn btn-outline text-primary border-primary hover:text-white hover:bg-primary transition">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* Update modal */}
            <dialog ref={updateRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-10/12">
                    <h3 className="font-bold text-lg mb-4 text-primary">Update Transaction</h3>
                    <form onSubmit={handleUpdateTransaction} className="">
                        <div className='flex justify-between items-center gap-4'>
                            {/* Left */}
                            <div className='flex-1'>
                                {/* Type */}
                                <label className="label">Type</label>
                                <select name='type' className="w-full border border-amber-100 p-2 mb-4 outline-none ">
                                    <option>Income</option>
                                    <option>Expense</option>
                                </select>

                                {/* Date */}
                                <label className="label">Date</label>
                                <input
                                    type="date"
                                    name='date'
                                    className="w-full border p-2 border-amber-100 outline-none"
                                />
                            </div>

                            {/* Right */}
                            <div className='flex-1'>
                                {/* Category */}
                                <label className="label">Category</label>
                                <select name='category' className="w-full border p-2 border-amber-100 mb-4 outline-none">
                                    <option>Select Category</option>
                                    <option>Salary</option>
                                    <option>Food</option>
                                    <option>Transport</option>
                                    <option>Shopping</option>
                                    <option>Bills</option>
                                </select>

                                {/* Amount */}
                                <label className="label">Amount</label>
                                <input
                                    type="number"
                                    name='amount'
                                    placeholder="Enter Amount"
                                    className="w-full border p-2 border-amber-100 outline-none"
                                />
                            </div>
                        </div>

                        {/* Description */}
                        <label className="label mt-5">Description</label>
                        <textarea
                            name='description'
                            placeholder="Description"
                            className="w-full border p-2 border-amber-100 outline-none"
                        ></textarea>

                        {/* Submit button */}
                        <input
                            type="submit"
                            value="Update Transaction"
                            className='btn btn-outline w-full border-amber-100 hover:bg-accent mt-4 text-secondary'
                        />
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyTransactions;