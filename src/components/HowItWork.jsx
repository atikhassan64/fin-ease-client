import React from 'react';

const HowItWork = () => {
    return (
        <section className="py-10 bg-base-200 px-6">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-2xl text-primary-content font-semibold mb-4">How FinEase Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-base-100 rounded shadow hover:shadow-lg transition">
                        <div className="text-4xl mb-4">📝</div>
                        <h3 className="font-semibold text-xl mb-2">Create Your Account</h3>
                        <p>Sign up quickly and securely to start your financial journey.</p>
                    </div>
                    <div className="p-6 bg-base-100 rounded shadow hover:shadow-lg transition">
                        <div className="text-4xl mb-4">💰</div>
                        <h3 className="font-semibold text-xl mb-2">Add Income & Expenses</h3>
                        <p>Keep track of every transaction for complete control over your money.</p>
                    </div>
                    <div className="p-6 bg-base-100 rounded shadow hover:shadow-lg transition">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="font-semibold text-xl mb-2">Track Reports & Grow Savings</h3>
                        <p>Visual reports help you make smarter financial decisions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWork;