import React from 'react';
import banner from '../assets/smart-money-management.jpg'
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-10 px-6 lg:px-10'>
                <div className='mr-10 md:w-[800px]'>
                    <h2 className='font-bold text-xl md:text-2xl lg:text-3xl text-primary-content'>Take Control of Your Finances and Shape Your Future</h2>
                    <p className='text-base-content mt-3 md:mt-4'>Track your spending, set smart budgets, and achieve your financial goals with ease.</p>
                    <Link to={`/add-transaction`} className='btn btn-outline hover:bg-accent-content text-gray-500 hover:text-primary-content border-amber-100 mt-4'>Get Started</Link>
                </div>
                <div className='mb-8 md:mb-0'>
                    <img src={banner} alt="smart-money-management" className='rounded-lg shadow-lg' />
                </div>
            </div>
        </div>
    );
};

export default Hero;