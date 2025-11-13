import React from 'react';
import logo from '../assets/FinEase-logo.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="border-t border-amber-100 text-secondary pt-10 mt-10">
            <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">

                
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <Link to={`/`}>
                            <img
                                src={logo}
                                alt="FinEase Logo"
                                className="w-30 cursor-pointer"
                            />
                        </Link>

                    </div>
                    <p className="text-sm ">
                        Manage your income, expenses, and savings smartly with FinEase.
                    </p>
                </div>

              
                <div>
                    <h3 className="text-lg font-semibold text-secondary mb-3">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <a className="hover:text-primary cursor-pointer">support@finease.com</a></li>
                        <li>Phone: <a className="hover:text-primary cursor-pointer">+880 131518-7164</a></li>
                        <li>Location: Dhaka, Bangladesh</li>
                    </ul>
                </div>

               
                <div>
                    <h3 className="text-lg font-semibold text-secondary mb-3">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link className="hover:text-primary">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-primary">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold  mb-3">Follow Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="" className="">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="" className="">
                            <FaXTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="" className="">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="" className="">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

            </div>

        
            <div className="text-center text-sm text-secondary mt-10 border-t border-amber-100 py-4">
                © {new Date().getFullYear()} FinEase. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;