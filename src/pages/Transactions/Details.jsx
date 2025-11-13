import React, { useEffect, useState } from "react";
import { ArrowLeft, Wallet, CalendarDays, FileText, Tag } from "lucide-react";
import { useLoaderData, useParams } from "react-router";

const TransactionDetails = () => {
    const { id } = useParams();
    const transactionsDetails = useLoaderData();
    const [transaction, setTransaction] = useState(null);
    const { type, date, description, amount, category } = transactionsDetails;
    const [totalCategoryAmount, setTotalCategoryAmount] = useState(0);
    console.log(transaction, totalCategoryAmount)

    useEffect(() => {
        
        fetch(`https://fin-ease-server-three.vercel.app/transactions/${id}`)
            .then(res => res.json())
            .then(data => {
                setTransaction(data);

             
                fetch(`https://fin-ease-server-three.vercel.app/transactions`)
                    .then(res => res.json())
                    .then(transactions => {
                        const sameCategory = transactions.filter(
                            t => t.category === data.category
                        );
                       
                        const total = sameCategory.reduce(
                            (sum, t) => sum + Number(t.amount || 0),
                            0
                        );
                        setTotalCategoryAmount(total);
                    });
            });
    }, [id]);

    return (
        <div className="max-w-[1200px] mx-auto px-6 md:px-80 mt-10">
            {/* Back Button */}
            <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-primary hover:text-secondary mb-6 transition cursor-pointer"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Transactions</span>
            </button>

            {/* Details Card */}
            <div className="bg-white rounded-lg shadow-md border border-amber-100 p-8">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold bg-accent text-primary`}
                    >
                        {type}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                        <CalendarDays className="w-4 h-4" /> {date}
                    </span>
                </div>

                {/* Main Info */}
                <div className="mb-5">
                    <h2 className="text-xl font-semibold text-secondary mb-2 flex items-center gap-2">
                        <Tag className="w-5 h-5 text-amber-500" /> {category}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Amount Section */}
                <div className="bg-accent rounded-xl p-4 mb-6">
                    <h3 className="text-gray-500 text-sm mb-1">Amount</h3>
                    <p className="text-3xl font-bold text-primary flex items-center gap-2">
                        <Wallet className="w-6 h-6" /> ৳ {amount}
                    </p>
                </div>

                {/* Total for this Category */}
                <div className="border-t border-amber-100 pt-4">
                    <h3 className="text-gray-500 text-sm mb-1">
                        Total Amount in this Category
                    </h3>
                    <p className="text-2xl font-semibold text-secondary">৳ {totalCategoryAmount}</p>
                </div>
            </div>
        </div>
    );
};

export default TransactionDetails;
