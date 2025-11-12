import React, { use, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
    const { user, updateUser, setUser } = use(AuthContext);
    const [updateInfo, setUpdateInfo] = useState();
    const { photoURL, displayName, email } = user;
    const profileRef = useRef();

    const handleUpdate = (e) => {
        setUpdateInfo(e);
        profileRef.current.showModal();

    };

    const handleUpdateInfo = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                e.target.reset();
            })
            .catch((error) => {
                toast.error(error.message);
                setUser(user);
            })

        profileRef.current.close();
    }

    return (
        <div className='max-w-11/12 mx-auto mt-10 px-2 md:px-20 '>
            <div className='px-5 md:px-10 py-10 md:py-16 bg-white rounded-xl shadow-lg border border-amber-100'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={photoURL} alt={displayName} className='h-15 w-15 object-cover rounded-full' />
                        <div className='ml-5'>
                            <h2 className='font-semibold md:font-bold text-xl md:text-2xl text-secondary'>{displayName}</h2>
                            <p className='text-gray-500 text-sm md:text-[16px] mt-1'>{email}</p>
                        </div>
                    </div>
                    <div className='hidden md:flex'>
                        <button onClick={handleUpdate} className="btn md:btn btn-sm bg-base-200 text-primary">Update Profile</button>
                    </div>
                </div>
                <div className='mt-10 border border-amber-100 pt-4 pb-2'>
                    <h3 className='px-2 md:px-4 font-semibold text-sm md:text-lg'>Personal Details</h3>
                    <div className='px-2 md:px-4 flex justify-between items-center border-b-2 border-dashed border-amber-100 pt-4 pb-2 '>
                        <h2 className='font-semibold md:font-semibold text-sm md:text-sm text-gray-500'>Full Name</h2>
                        <h4 className=' text-sm text-secondary font-semibold md:text-lg'>{displayName}</h4>
                    </div>
                    <div className='flex justify-between items-center py-2 px-2 md:px-4'>
                        <h2 className='font-semibold md:font-semibold text-sm md:text-sm text-gray-500'>Email Account</h2>
                        <h4 className='text-sm text-secondary font-semibold md:text-lg'>{email}</h4>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={handleUpdate} className="btn mt-8 w-full bg-base-200 text-primary">Update Profile</button>
                    </div>
                </div>
            </div>

           
            <dialog ref={profileRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div >
                        {
                            updateInfo ?
                                <div className='flex justify-center items-center mt-20 max-w-11/12 mx-auto'>
                                    <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl">
                                        <h2 className='pt-6 text-center font-semibold text-2xl text-primary '>Update Profile Info</h2>
                                        <form onSubmit={handleUpdateInfo} className="card-body">
                                            <fieldset className="fieldset">
                                                {/* Name */}
                                                <label className="label">Name</label>
                                                <input
                                                    type="text"
                                                    name='name'
                                                    className="input outline-0 "
                                                    placeholder="Name" />
                                                {/* Photo-URL */}
                                                <label className="label">Photo-URL</label>
                                                <input
                                                    type="text"
                                                    name='photo'
                                                    className="input outline-0 "
                                                    placeholder="Photo-URL" />

                                                {/* Signup btn */}
                                                <button type='submit' className="btn mt-4 btn-primary">Update</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                                :
                                ''
                        }
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>



        </div>
    );
};

export default Profile;