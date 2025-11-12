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
        <div className="min-h-screen bg-base-200 py-10 px-6">
            <div className='max-w-[1200px] mx-auto'>
                <h2 className='font-semibold text-xl md:text-2xl text-primary mb-4 '>Budgeting Tips</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
                    <div className="flex items-start gap-4">
                        <div className="rounded-lg bg-primary p-3">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M3 12h18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M6 8h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M9 16h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-secondary">Budgeting Tips</h1>
                            <p className="text-sm text-gray-500 mt-1">
                                Practical advice to manage income, cut unnecessary spending and grow savings.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <div className="p-3 bg-accent rounded-lg border border-amber-100">
                            <p className="text-xs text-gray-500">Monthly Income</p>
                            <p className="mt-1 font-medium text-secondary">৳ 80,000</p>
                        </div>
                        <div className="p-3 bg-accent rounded-lg border border-amber-100">
                            <p className="text-xs text-gray-500">Saved This Month</p>
                            <p className="mt-1 font-medium text-secondary">৳ 12,300</p>
                        </div>
                    </div>

                    <div className="mt-6 space-y-4">
                        <div>
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Needs (50%)</span>
                                <span>45%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="h-2 rounded-full" style={{ width: "45%", background: "linear-gradient(90deg,#479f81,#479f81)" }} />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>Savings (20%)</span>
                                <span>15%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="h-2 rounded-full" style={{ width: "15%", background: "linear-gradient(90deg,#07314d,#07314d)" }} />
                            </div>
                        </div>
                    </div>

                    <button className="mt-6 w-full py-2 rounded-md btn btn-outline border-amber-100 text-gray-500 hover:text-primary text-sm hover:bg-accent transition">
                        Start a Budget Plan
                    </button>
                </div>


                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 space-y-4">
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
                            <h2 className="text-lg font-semibold text-secondary">Top Tips</h2>
                            <p className="text-sm text-gray-500 mt-1">Handy, quick-to-apply budgeting tips to improve finances.</p>

                            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {tips.map((tip) => (
                                    <div key={tip.id} className="p-4 bg-accent rounded-lg border border-amber-100">
                                        <div>
                                            <div className="flex items-start justify-between gap-3">
                                                <h3 className="text-sm font-semibold text-secondary">{tip.title}</h3>
                                                <span className="text-xs font-medium px-2 py-1 rounded-full bg-white border text-primary">
                                                    {tip.tag}
                                                </span>

                                            </div>
                                            <div className="">
                                                <p className="text-xs text-gray-500 mt-1">{tip.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-amber-100">
                            <h3 className="text-sm font-semibold text-secondary">30-Minute Budget Tune-up</h3>
                            <ul className="mt-3 space-y-2 text-sm text-gray-500">
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
                        <div className=" rounded-2xl p-5 shadow-sm border border-amber-100">
                            <h4 className="text-sm font-semibold text-primary">Featured</h4>
                            <h3 className="mt-2 font-semibold text-secondary">Automate Your Savings</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Move a fixed percentage of every paycheck to savings automatically.
                            </p>
                            <div className="mt-4">
                                <div className="w-full bg-green-200 rounded-full h-2">
                                    <div className="h-2 rounded-full" style={{ width: "60%", background: "linear-gradient(90deg,#479f81,#479f81)" }} />
                                </div>
                                <p className="mt-2 text-xs text-gray-500">Savings automation progress</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-amber-100">
                            <h5 className="text-sm font-semibold text-secondary">Quick Resources</h5>
                            <ul className="mt-3 text-sm text-gray-500 space-y-2">
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
        </div>

        
    );
};

export default Budgeting;