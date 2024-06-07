import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
// import { useTitle } from '../../hooks/useTitle';
import bg1 from '../../../../images/logingbackground.PNG'

const SignUp = () => {
    // useTitle("signUP")
    const [error, setError] = useState('')
    const { register, handleSubmit } = useForm();
    const { createUser, ProfileUpdate } = useContext(AuthContext)
    const navigate = useNavigate()
    const hanlderSignUp = data => {

        const formData = new FormData()
        formData.append('image', data.file[0])
        const imgHostKey = process.env.REACT_APP_img_apiKey

        fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(datas => {
                console.log(datas)
                createUser(data.email, data.password)
                    .then(res => {
                        const user = res.user;
                        console.log(user);
                        toast.success('Profile is updated')
                        ProfileUpdate(data.name, datas.data.display_url)
                            .then(() => {
                                toast.success('Profile is updated')
                                // users(data.name, data.email, data.option)
                                navigate('/login')
                            }).catch(err => console.error(err))
                    }).catch(err => setError(err.message))
            })

    }

    // const users = (name, email, option)=>{
    //     const user = {name, email, option}
    //     fetch(`https://used-products-resale-server-1aminul.vercel.app/users`,{
    //         method: "POST",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     }).then(res=> res.json())
    //     .then(data=> {
    //         console.log(data);
    //     })
    // }
    return (
        <div className=''  >
            <div className='flex justify-center items-center h-[100vh] bg-cover bg-center' style={{ backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat' }}>
                <div className='w-96 shadow-xl rounded-lg p-4 bg-warning'>
                    <h2 className="text-2xl font-bold text-white text-center">Sign Up</h2>
                    <form onSubmit={handleSubmit(hanlderSignUp)}>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input {...register("name")} type='text' className='input input-bordered w-full' />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} type='email' className='input input-bordered w-full' />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password")} className='input input-bordered w-full' />
                        <label className="label">
                            <span className="label-text">Upload Photo</span>
                        </label>
                        <input type='file' {...register("file")} className='input input-bordered w-full' />
                        {/* <label className="label">
                        <span className="label-text">Select Your Option</span>
                    </label>
                    <select {...register("option")} className="select select-bordered w-full">
                        <option>Buyer</option>
                        <option>Seller</option>
                    </select> */}
                        <input type="submit" value='Sign Up' className='w-full bg-accent rounded py-3 mt-6 text-white' />
                    </form>
                    <label className="label">
                        <span className="label-text text-error">{error}</span>
                    </label>
                    <p className='my-6 text-center'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link> </p>

                </div>
            </div>
        </div>

    );
};

export default SignUp;