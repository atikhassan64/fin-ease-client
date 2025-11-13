import React, { use, useState } from 'react';
import logo from '../assets/FinEase-logo.png'
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { LogOut } from 'lucide-react';

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
        <li><NavLink className={`hover:bg-accent font-medium text-gray-500 hover:text-primary`} to={`/`}>Home</NavLink></li>
        <li><NavLink className={`hover:bg-accent font-medium text-gray-500 hover:text-primary`} to={`/add-transaction`}>Add Transaction</NavLink></li>
        <li><NavLink className={`hover:bg-accent font-medium text-gray-500 hover:text-primary`} to={`/my-transactions`}>My Transactions</NavLink></li>
        <li><NavLink className={`hover:bg-accent font-medium text-gray-500 hover:text-primary`} to={`/reports`}>Reports</NavLink></li>



    </div>
    return (
        <div className='bg-base-100 shadow-sm shadow-amber-100'>
            <div className="navbar max-w-[1200px] mx-auto px-6 lg:px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-3 py-3 ml-0">
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
                                            <div className="relative inline-block text-left">

                                                {/* Dropdown Menu */}
                                                <div className="absolute right-0 mt-5 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                                    <div className="p-4 flex items-center space-x-3">
                                                        <img
                                                            src={user.photoURL}
                                                            alt={user.displayName}
                                                            className="h-12 w-12 rounded-full object-cover"
                                                        />
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-semibold text-gray-900 truncate">
                                                                {user.displayName}
                                                            </p>
                                                            <p className="text-xs text-gray-500 truncate line-clamp-1">
                                                                {user.email}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="border-t border-amber-100"></div>

                                                    
                                                        {
                                                            user && <NavLink className={` w-full text-left px-4 py-3 text-sm text-gray-500
                                                        font-medium hover:text-primary hover:bg-gray-50 flex items-center space-x-2 rounded-b-lg cursor-pointer`} to={`/profile`}>My Profile</NavLink>
                                                        }
                                                    
                                                    <Link
                                                        to={`/`}
                                                        className="w-full text-left px-4 py-3 text-sm text-gray-500
                                                        font-medium hover:text-primary hover:bg-gray-50 flex items-center space-x-2 rounded-b-lg cursor-pointer border-t border-amber-100"
                                                        onClick={handleLogOut}
                                                    >
                                                        <LogOut className="h-4 w-4" />
                                                        <span>Sign Out</span>
                                                    </Link>
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
                            <Link to={`/login`} className="btn btn-outline text-gray-500 hover:text-primary hover:bg-accent border-amber-100">Sign in</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;