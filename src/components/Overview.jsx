import React from 'react';
import { ArrowUpCircle, ArrowDownCircle, Wallet } from "lucide-react";



const Overview = ({ heroData }) => {
    console.log(heroData)
    



    return (
        <div className="max-w-[1200px] mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Balance */}
            <div className="bg-white border border-amber-100 shadow-sm p-6 rounded-lg text-center hover:shadow-md transition">
                <div className="flex justify-center mb-2">
                    <Wallet className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-gray-500 text-sm mb-1">Total Balance</h3>
                <p className="text-2xl font-semibold text-secondary">
                    ৳ 100
                </p>
            </div>

            {/* Total Income */}
            <div className="bg-white border border-amber-100 shadow-sm p-6 rounded-lg text-center hover:shadow-md transition">
                <div className="flex justify-center mb-2">
                    <ArrowUpCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-gray-500 text-sm mb-1">Total Income</h3>
                <p className="text-2xl font-semibold text-green-600">
                    ৳ 40
                </p>
            </div>

            {/* Total Expense */}
            <div className="bg-white border border-amber-100 shadow-sm p-6 rounded-lg text-center hover:shadow-md transition">
                <div className="flex justify-center mb-2">
                    <ArrowDownCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-gray-500 text-sm mb-1">Total Expense</h3>
                <p className="text-2xl font-semibold text-red-600">
                    ৳ 20
                </p>
            </div>
        </div>
    );
};

export default Overview;