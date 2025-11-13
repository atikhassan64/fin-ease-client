import React, { use, useState } from 'react';
import { useLocation } from 'react-router';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';

const ForgetPassword = () => {
    const { forgetPassword } = use(AuthContext);
    const location = useLocation();
    const transferEmail = location.state?.email || '';
    const [email, setEmail] = useState(transferEmail);
    const [message, setMessage] = useState("");

    const handleForgetPassword = (e) => {
        e.preventDefault();
        
        setMessage("")

        if (!email) {
            setMessage("Please enter your email address");
            return
        }

        forgetPassword(email)
            .then(() => {
                toast.success("Please check your email for Forget Password");
                e.target.reset();
            })
            .catch((error) => {
                if (error.code === "auth/user-not-found") {
                    setMessage("No user found with this email");
                } 
                else if(error.code === "auth/invalid-email"){
                    setMessage("Please provide valid email")

                }
                else {
                    toast.error(error.message);
                }
            })
    };

    return (
        <div>
            <div className='flex justify-center items-center mt-15 max-w-11/12 mx-auto'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='pt-6 text-center font-semibold text-2xl text-primary '>Recover Your Password</h2>
                    <form onSubmit={handleForgetPassword} className="card-body">
                        <fieldset className="fieldset">
                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name='email'
                                className="input outline-0 "
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}

                            />
                            {/* Signup btn */}
                            <button type='submit' className="btn mt-4 btn-primary">Recover</button>
                        </fieldset>
                        <p className='text-red-500'><small>{message}</small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;