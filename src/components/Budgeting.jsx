import React from 'react';

const Budgeting = () => {
    const tips = [
        {
            id: 1,
            title: "Create a Monthly Budget",
            desc: "List income and fixed/variable expenses. Assign every dollar a job.",
            tag: "Essential",
        },
        {
            id: 2,
            title: "Follow the 50/30/20 Rule",
            desc: "Allocate 50% needs, 30% wants, 20% savings/debt paydown.",
            tag: "Rule",
        },
        {
            id: 3,
            title: "Automate Savings",
            desc: "Set recurring transfers to your savings account the day you get paid.",
            tag: "Automation",
        },
        {
            id: 4,
            title: "Track Your Spending",
            desc: "Review weekly expenses to catch small leaks before they grow.",
            tag: "Tracking",
        },
        {
            id: 5,
            title: "Use Clear Categories",
            desc: "Split spending into clear categories (Food, Transport, Subscriptions).",
            tag: "Practical",
        },
        {
            id: 6,
            title: "Build an Emergency Fund",
            desc: "Aim for 3–6 months of essential expenses in an accessible account.",
            tag: "Security",
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left column - Hero + short summary */}
                <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border">
                    <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 p-3">
                            {/* simple icon */}
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M6 8h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M9 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-gray-900">Budgeting Tips</h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Practical advice to manage income, cut unnecessary spending and grow savings.
                            </p>
                        </div>
                    </div>

                    {/* Quick summary cards */}
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="p-3 bg-gray-50 rounded-lg border">
                            <p className="text-xs text-gray-500">Monthly Income</p>
                            <p className="mt-1 font-medium text-gray-900">৳ 80,000</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg border">
                            <p className="text-xs text-gray-500">Saved This Month</p>
                            <p className="mt-1 font-medium text-gray-900">৳ 12,300</p>
                        </div>
                    </div>

                    {/* Progress bars */}
                    <div className="mt-6 space-y-4">
                        <div>
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Needs (50%)</span>
                                <span>45%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="h-2 rounded-full" style={{ width: "45%", background: "linear-gradient(90deg,#34D399,#10B981)" }} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Savings (20%)</span>
                                <span>15%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="h-2 rounded-full" style={{ width: "15%", background: "linear-gradient(90deg,#60A5FA,#3B82F6)" }} />
                            </div>
                        </div>
                    </div>

                    <button className="mt-6 w-full py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
                        Start a Budget Plan
                    </button>
                </div>

                {/* Middle + Right - Tips list + Featured */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Tips cards (2 columns on md using spanning) */}
                    <div className="md:col-span-2 space-y-4">
                        <div className="bg-white rounded-2xl p-5 shadow-sm border">
                            <h2 className="text-lg font-semibold text-gray-900">Top Tips</h2>
                            <p className="text-sm text-gray-500 mt-1">Handy, quick-to-apply budgeting tips to improve finances.</p>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tips.map((tip) => (
                                    <div key={tip.id} className="p-4 bg-gray-50 rounded-lg border">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-900">{tip.title}</h3>
                                                <p className="text-xs text-gray-500 mt-1">{tip.desc}</p>
                                            </div>
                                            <div className="flex-shrink-0">
                                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white border text-gray-600">
                                                    {tip.tag}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card with actionable checklist (UI only) */}
                        <div className="bg-white rounded-2xl p-5 shadow-sm border">
                            <h3 className="text-sm font-semibold text-gray-900">30-Minute Budget Tune-up</h3>
                            <ul className="mt-3 space-y-2 text-sm text-gray-600">
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1" disabled />
                                    <span>List all monthly income sources</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1" disabled />
                                    <span>Identify recurring subscriptions to cut</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <input type="checkbox" className="mt-1" disabled />
                                    <span>Set a small automatic transfer to savings</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right column - Featured tip */}
                    <div className="space-y-4">
                        <div className="bg-gradient-to-br from-yellow-50 to-white rounded-2xl p-5 shadow-sm border border-yellow-100">
                            <h4 className="text-sm font-semibold text-yellow-800">Featured</h4>
                            <h3 className="mt-2 font-semibold text-gray-900">Automate Your Savings</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Move a fixed percentage of every paycheck to savings automatically.
                            </p>
                            <div className="mt-4">
                                <div className="w-full bg-yellow-100 rounded-full h-2">
                                    <div className="h-2 rounded-full" style={{ width: "60%", background: "linear-gradient(90deg,#F59E0B,#F97316)" }} />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">Savings automation progress</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-sm border">
                            <h5 className="text-sm font-semibold text-gray-900">Quick Resources</h5>
                            <ul className="mt-3 text-sm text-gray-600 space-y-2">
                                <li className="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                    <span>Free budgeting template</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" /></svg>
                                    <span>Expense tracker guide</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Budgeting;