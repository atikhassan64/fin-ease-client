import React, { use, useState } from 'react';
import logo from '../assets/FinEase-logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const NavBar = () => {

    const { user, logOutUser } = use(AuthContext);
    const [show, setShow] = useState(false);
    
    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success('SignOut success');
            })
            .catch((error) => {
                toast.error(error.message);
            })
    }

    const links = <div className='flex flex-col lg:flex-row'>
        <li><NavLink className={`hover:bg-accent`} to={`/`}>Home</NavLink></li>
        <li><NavLink className={`hover:bg-accent`} to={`/add-transaction`}>Add Transaction</NavLink></li>
        <li><NavLink className={`hover:bg-accent`} to={`/my-transactions`}>My Transactions</NavLink></li>
        <li><NavLink className={`hover:bg-accent`} to={`/reports`}>Reports</NavLink></li>

        {
            user && <li><NavLink className={`hover:bg-accent`} to={`/profile`}>My Profile</NavLink></li>
        }

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
                    {
                        user ?
                            <div>
                                <div onClick={() => setShow(!show)}
                                    className=' flex relative items-center justify-end '>
                                    <div className='absolute z-50 '>
                                        {
                                            show &&
                                            <div className='dropdown-content bg-base-100 rounded-sm z-1 mt-48 w-60 border border-amber-100 shadow-lg md:w-70 py-4'>
                                                <div className='flex items-center justify-start px-4'>
                                                    <div className='h-12 w-12 rounded-full'>
                                                        <img src={user.photoURL} alt={user.displayName} className={`h-12 w-12 rounded-full cursor-pointer object-cover`} />
                                                    </div>
                                                    <div className='ml-4'>
                                                        <h2 className='text-sm md:text-lg font-normal md:font-medium text-secondary cursor-pointer line-clamp-1'>{user.displayName}</h2>
                                                        <p className='text-sm cursor-pointer line-clamp-1'>
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div onClick={handleLogOut} className='w-full hover:bg-accent py-2 cursor-pointer mt-4 bg-accent px-4'>
                                                    <Link  to={`/login`} className="text-sm md:text-lg font-normal md:font-medium text-secondary ">Sign Out</Link>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div className='h-10 w-10 rounded-full border-accent'>
                                        <img src={user.photoURL} alt={user.displayName} className={`h-10 w-10 rounded-full cursor-pointer object-cover`} />

                                    </div>
                                </div>

                            </div>
                            :
                            <Link to={`/login`} className="btn btn-outline hover:bg-accent border-amber-100">Sign in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;