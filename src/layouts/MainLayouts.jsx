import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className='bg-base-100 shadow-sm'>
                <NavBar />
            </header>
            <main className='grow'>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default MainLayouts;