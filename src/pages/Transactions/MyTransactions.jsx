import React, { use, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const MyTransactions = () => {
    const { user } = use(AuthContext);
    const [transactions, setTransaction] = useState([]);
    const updateRef = useRef(null);
    console.log(transactions)

    useEffect(() => {
        fetch(`http://localhost:3000/transactions?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setTransaction(data);
            })
    }, [user])


    const handleUpdate = () => {
        updateRef.current.showModal();
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
                                <button onClick={handleUpdate} className="flex-1 btn btn-outline text-primary border-primary hover:text-white hover:bg-primary transition">
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
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
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