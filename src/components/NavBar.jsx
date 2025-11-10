import React from 'react';
import logo from '../assets/FinEase-logo.png'
import { Link, NavLink } from 'react-router';

const NavBar = () => {
    const links = <div className='flex flex-col lg:flex-row'>
        <li><NavLink className={`hover:bg-accent`} to={`/`}>Home</NavLink></li>
        <li><NavLink className={`hover:bg-accent`} to={`/`}>My Transactions</NavLink></li>
        <li><NavLink className={`hover:bg-accent`} to={`/`}>Add Transaction</NavLink></li>
        <li><NavLink className={`hover:bg-accent`} to={`/`}>Reports</NavLink></li>

    </div>
    return (
        <div className='bg-base-100 shadow-sm shadow-amber-100'>
            <div className="navbar max-w-[1200px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={`/`} className='w-30'><img src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={`/login`} className="btn btn-outline hover:bg-accent border-amber-100">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;