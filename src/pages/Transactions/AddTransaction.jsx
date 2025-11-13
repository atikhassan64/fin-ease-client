import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const AddTransaction = () => {
    const { user } = use(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const type = e.target.type.value;
        const name = user.displayName;
        const date = e.target.date.value;
        const category = e.target.category.value;
        const email = user.email;
        const amount = e.target.amount.value;
        const description = e.target.description.value;



        const newTransaction = {
            type: type,
            category: category,
            amount: parseInt(amount),
            description: description,
            date: date,
            email: email,
            name: name
        }

        fetch("http://localhost:3000/transactions", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTransaction)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after data :', data)
                e.target.reset();
                toast.success('Add Transaction Success');
            })
    }

    return (
        <div className='max-w-[1200px] mx-auto px-6 md:px-20'>
            <div className=" mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-amber-100">
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                    Add Transaction
                </h2>
                <form onSubmit={handleSubmit} className="">
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                        {/* Left */}
                        <div className='flex-1'>
                            {/* Type */}
                            <label className="label">Type</label>
                            <select name='type' className="w-full border border-amber-100 p-2 mb-4 outline-none ">
                                <option>Income</option>
                                <option>Expense</option>
                            </select>

                            {/* Name */}
                            <label className="label">Name</label>
                            <input
                                type="text"
                                name='name'
                                placeholder="User Name"
                                value={user.displayName}
                                readOnly
                                className="w-full border border-amber-100 p-2 mb-4 outline-none"
                            />

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

                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder="User Email"
                                value={user.email}
                                readOnly
                                className="w-full border p-2 border-amber-100 mb-4 outline-none"
                            />

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
                        value="Add Transaction"
                        className='btn btn-outline w-full border-amber-100 hover:bg-accent mt-4'
                    />
                </form>
            </div>
        </div>
    );
};

export default AddTransaction;