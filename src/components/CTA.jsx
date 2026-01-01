import React from 'react';
import { Link } from 'react-router';

const CTA = () => {
    return (
        <section className="pt-10 bg-base-100 text-center px-6">
            <h2 className="text-2xl font-semibold text-primary-content mb-6">Start Managing Your Money Smarter Today</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to={`/add-transaction`} className="button">
                    Get Started
                </Link>
                <Link to={`/add-transaction`} className="button">
                    Add Transaction
                </Link>
            </div>
        </section>
    );
};

export default CTA;