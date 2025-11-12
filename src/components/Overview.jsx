import React, { use, useEffect, useState } from 'react';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from "lucide-react";
import { AuthContext } from '../context/AuthContext';



const Overview = () => {
    const { user } = use(AuthContext);
    const [heroData, setHeroData] = useState([]);
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalExpense, setTotalExpense] = useState(0);
    console.log(totalIncome, totalExpense, heroData)


    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/transactions?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setHeroData(data);

                    const income = data.filter(d => d.type === "Income");
                    const totalIncome = income.reduce((sum, d) => sum + parseInt(d.amount || 0), 0)
                    const expense = data.filter(d => d.type === "Expense");
                    const totalExpense = expense.reduce((sum, d) => sum + parseInt(d.amount || 0), 0)

                    setTotalIncome(totalIncome);
                    setTotalExpense(totalExpense);

                })
        }
    }, [user])

    const totalBalance = totalIncome - totalExpense;



    return (
        <div className='max-w-[1200px] mx-auto py-10 px-6 lg:px-0'>
            <h2 className='font-semibold text-xl md:text-2xl text-primary mb-4 '>Transactions Overview</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Total Balance */}
                <div className="bg-white border-l-5 border-primary shadow-sm p-6 rounded-lg  hover:shadow-md transition flex justify-between">
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Total Balance</h3>
                        <p className="text-2xl font-semibold text-primary mt-1 mb-1">
                            ৳ {totalBalance}
                        </p>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Net balance from all transactions</h3>
                    </div>
                    <div className="flex justify-center mb-2">
                        <Wallet className="w-8 h-8 text-primary" />
                    </div>
                </div>

                {/* Total Income */}
                <div className="bg-white border-l-5 border-primary shadow-sm p-6 rounded-lg  hover:shadow-md transition flex justify-between">
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Total Income</h3>
                        <p className="text-2xl font-semibold text-primary mt-1 mb-1">
                            ৳ {totalIncome}
                        </p>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Income transactions</h3>
                    </div>
                    <div className="flex justify-center mb-2">
                        <ArrowUpCircle className="w-8 h-8 text-primary" />
                    </div>
                </div>

                {/* Total Expense */}
                <div className="bg-white border-l-5 border-red-600 shadow-sm p-6 rounded-lg  hover:shadow-md transition flex justify-between">
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Total Expense</h3>
                        <p className="text-2xl font-semibold text-red-600 mt-1 mb-1">
                            ৳ {totalExpense}
                        </p>
                        <h3 className="text-gray-500 text-sm font-medium mb-1">Expense transactions</h3>
                    </div>
                    <div className="flex justify-center mb-2">
                        <ArrowDownCircle className="w-8 h-8 text-red-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;