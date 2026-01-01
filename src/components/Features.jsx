import React from 'react';

const Features = () => {
    return (
        <section className="py-10 px-6 bg-base-200">
            <div className="max-w-[1200px] mx-auto text-center">
                <h2 className="text-2xl font-semibold text-primary-content text-left mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="p-6 bg-base-100 rounded shadow hover:shadow-lg transition">
                        <div className="text-4xl mb-4">🔐</div>
                        <h3 className="font-semibold text-primary-content mb-2">Secure Authentication</h3>
                        <p>Your data is safe with advanced encryption and login security.</p>
                    </div>
                    <div className="p-6 bg-base-100 rounded shadow hover:shadow-lg transition">
                        <div className="text-4xl mb-4">📊</div>
                        <h3 className="font-semibold text-primary-content mb-2">Visual Reports</h3>
                        <p>See your finances clearly with interactive charts & graphs.</p>
                    </div>
                    <div className="p-6 bg-base-100 rounded shadow hover:shadow-lg transition">
                        <div className="text-4xl mb-4">🔄</div>
                        <h3 className="font-semibold text-primary-content mb-2">Real-time Updates</h3>
                        <p>Track your transactions instantly as they happen.</p>
                    </div>
                    <div className="p-6 bg-base-100 rounded shadow hover:shadow-lg transition">
                        <div className="text-4xl mb-4">🌙</div>
                        <h3 className="font-semibold text-primary-content mb-2">Light / Dark Mode</h3>
                        <p>Switch between light & dark theme for comfortable viewing.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;