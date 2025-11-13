import React from 'react';
import { PiggyBank, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

const FinancialPlanning = () => {
    return (
        <div>
            <section className=" from-amber-50 to-white pt-10">
                <div className="max-w-[1200px] mx-auto px-6 text-center">
                    <h2 className="font-semibold text-xl md:text-2xl text-primary mb-2">
                        Why Financial Planning Matters
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto mb-12">
                        Financial planning helps you take control of your money, achieve your goals, and secure your future. Here’s why it’s essential for everyone.
                    </p>
                   
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition p-6">
                            <div className="flex justify-center mb-4">
                                <PiggyBank className="w-10 h-10 text-amber-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">
                                Build Your Savings
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Smart budgeting and saving habits help you grow wealth and prepare for
                                emergencies.
                            </p>
                        </div>

                        <div className="bg-white border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition p-6">
                            <div className="flex justify-center mb-4">
                                <TrendingUp className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">
                                Achieve Your Goals
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Financial planning keeps you on track toward milestones like buying a home or
                                starting a business.
                            </p>
                        </div>

                        <div className="bg-white border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition p-6">
                            <div className="flex justify-center mb-4">
                                <ShieldCheck className="w-10 h-10 text-blue-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">
                                Ensure Financial Security
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Manage risks and protect your income with proper insurance and planning.
                            </p>
                        </div>

                        <div className="bg-white border border-amber-100 rounded-2xl shadow-sm hover:shadow-md transition p-6">
                            <div className="flex justify-center mb-4">
                                <BarChart3 className="w-10 h-10 text-purple-500" />
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">
                                Track Your Progress
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Regularly analyze income, expenses, and investments to stay financially
                                balanced.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinancialPlanning;