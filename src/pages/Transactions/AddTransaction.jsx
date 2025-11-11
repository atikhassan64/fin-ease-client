import React from 'react';

const AddTransaction = () => {
    return (
        <div className='max-w-[1200px] mx-auto px-20'>
            <div className=" mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-amber-100">
                <h2 className="text-2xl font-semibold mb-6 text-primary">
                    Add Transaction
                </h2>
                <form className="">
                    <div className='flex justify-between items-center gap-4'>
                        {/* Left */}
                        <div>
                            {/* Type */}
                            <label className="label">Type</label>
                            <select className="w-full border border-amber-100 p-2 mb-4 outline-none ">
                                <option>Income</option>
                                <option>Expense</option>
                            </select>

                            {/* Name */}
                            <label className="label">Name</label>
                            <input
                                type="text"
                                placeholder="User Name"
                                readOnly
                                className="w-full border border-amber-100 p-2 mb-4 outline-none"
                            />

                            {/* Date */}
                            <label className="label">Date</label>
                            <input
                                type="date"
                                className="w-full border p-2 border-amber-100 outline-none"
                            />
                        </div>

                        {/* Right */}
                        <div>
                            {/* Category */}
                            <label className="label">Category</label>
                            <select className="w-full border p-2 border-amber-100 mb-4 outline-none">
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
                                placeholder="User Email"
                                readOnly
                                className="w-full border p-2 border-amber-100 mb-4 outline-none"
                            />

                            {/* Amount */}
                            <label className="label">Amount</label>
                            <input
                                type="number"
                                placeholder="Enter Amount"
                                className="w-full border p-2 border-amber-100 outline-none"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <label className="label mt-5">Description</label>
                    <textarea
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