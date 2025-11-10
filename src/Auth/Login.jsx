import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { signUser, setUser, loginWithGoogle } = use(AuthContext);
    const [error, setError] = useState("");
    const emailRef = useRef();
    const location = useLocation();
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("");

        signUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                e.target.reset();
                // toast.success("Login Success")
                navigate(location.state || "/");

            })
            .catch((error) => {
                setError(error.message)
            })
    };

    const handleGoogleSignin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location.state || '/')
            })
            .catch((error) => {
                // toast.error(error.message);
                console.log(error)
            })
    };

    const handleForgetPage = () => {
        const email = emailRef.current.value;
        navigate('/forget_password', { state: { email: email } });
    };

    return (
        <div className='flex justify-center items-center mt-10 md:min-h-screen max-w-11/12 mx-auto'>
            <div className="card bg-base-100 w-full md:max-w-sm shrink-0 border-2 shadow-xl">
                <h2 className='pt-6 text-center font-semibold text-2xl text-primary '>Login your Account</h2>
                <form onSubmit={handleSignIn} className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="input outline-0 "
                            placeholder="Email"
                            ref={emailRef}
                            required
                        />
                        {/* Password */}
                        <label className="label">Password</label>
                        <div className='flex items-center relative'>
                            <input
                                type={toggle ? "text" : "password"}
                                name='password'
                                className="input outline-0 "
                                placeholder="Password"
                                required
                            />
                            <div onClick={() => setToggle(!toggle)} className='absolute text-primary ml-68 md:ml-70'>
                                {
                                    toggle ?
                                        <FaEyeSlash className='' size={20}></FaEyeSlash>
                                        :
                                        <FaEye className=' ' size={20}></FaEye>

                                }
                            </div>
                        </div>

                        {/* Forget btn */}
                        <div><button onClick={handleForgetPage} className="link link-hover">Forgot password?</button></div>
                        {/* Login btn */}
                        <button type='submit' className="btn btn-primary mt-4">Login</button>
                    </fieldset>


                    {/* Google */}
                    <button
                        onClick={handleGoogleSignin}
                        type='button'
                        className="btn btn-secondary btn-outline ">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button>
                    <p className='text-red-500 mt-2'><small>{error}</small></p>

                    <p className='text-center font-medium text-accent pt-3'>Don't Have An Account ? <Link to={`/register`} className='text-secondary font-bold'>Signup</Link></p>

                </form>
            </div>
        </div>
    );
};

export default Login;