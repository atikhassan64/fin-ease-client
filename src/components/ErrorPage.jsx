import React from 'react';
import errorImg from '../assets/error.png';
import { ArrowLeft } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div>
            <div className='bg-accent'>
                <div className='max-w-[1200px] mx-auto py-[69px] h-screen flex justify-center items-center px-6 md:px-0 '>
                    <div>
                        <img src={errorImg} alt="" className='mx-auto px-6 ' />
                        <h1 className=' font-semibold text-secondary text-[30px] md:text-[48px] text-center  '>Page not found!</h1>
                        <div className='flex justify-center items-center mt-3'>
                            <button
                                onClick={() => window.history.back()}
                                className="flex items-center gap-2 text-primary hover:text-secondary mb-6 transition text-center cursor-pointer"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                <span>Back to Transactions</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;