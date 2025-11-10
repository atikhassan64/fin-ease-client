import React from 'react';
import banner from '../../assets/smart-money-management.jpg'
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className='bg-base-200'>
            <div className='max-w-[1200px] mx-auto flex justify-between items-center py-10'>
                <div className='mr-10 w-[800px]'>
                    <h2 className='font-bold text-3xl text-primary'>The Best Personal Finance and Budgeting Apps for 2025</h2>
                    <p className='text-secondary mt-4'>What's your checking account balance? Your credit score? The top personal finance apps we've tested can give you the answers in seconds. We help you choose the right one to take control of your money.</p>
                    <Link to={`/login`} className='btn btn-outline hover:bg-accent border-amber-100 mt-4'>View More</Link>
                </div>
                <div className='mr-10'>
                    <img src={banner} alt="smart-money-management" className='rounded-lg shadow-lg' />
                </div>
            </div>
        </div>
    );
};

export default Home;