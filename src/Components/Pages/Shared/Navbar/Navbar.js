import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { AuthContext } from '../../../Context/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import navbarimg from '../../../../images/bsrm-bg.webp'
import bsrmLogo from '../../../../images/bsrm-logo-2.png'

const Navbar = () => {
    const { user, LogOut } = useContext(AuthContext)


    const menu = <>
        <li className='hover:text-white cursor-pointer'><Link to='/'>Home</Link></li>
        <li className='hover:text-white cursor-pointer'><Link to='/about'>About</Link></li>
        <li className='hover:text-white cursor-pointer'><Link to='/contact'>Contact Us</Link></li>
        <li className='hover:text-white cursor-pointer'><Link to='/blog'>Blog</Link></li>
        <li className='hover:text-white cursor-pointer'><Link to='/dashboard'>Dashboard</Link></li>
    </>

    const account = <>
        {
            user?.email ?
                <li className='cursor-pointer'><Link to='/login' onClick={() => LogOut()}>Sign Out</Link></li> :
                <><li className='cursor-pointer'><Link to='/login'>Login</Link></li>
                    <li className='cursor-pointer'><Link to='/signup'>Sign up</Link></li></>
        }
    </>

    return (
        <div className='print:hidden relative'>
            <div className="navbar bg-accent text-warning lg:px-24 text-lg shadow-lg w-full bg-no-repeat bg-cover " style={{backgroundImage: `url(${navbarimg})`}}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  z-50">
                        
                            {
                                menu
                            }
                        </ul>
                    </div>
                    <img className='w-44 h-12' src={bsrmLogo} alt="" />
                    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex ">
                
                    <ul className="flex justify-between items-center gap-10 px-1">
                   
                        {
                            menu
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='mr-5 '>
                        <details className="dropdown">
                            <summary className="m-1 cursor-pointer">
                                Account
                                {
                                    user?.email ?
                                        <><PhotoProvider>
                                            <PhotoView src={user?.photoURL}>
                                                <img title={user?.email} className='w-10 h-10 rounded-full inline-block' src={user?.photoURL} alt='user' />
                                            </PhotoView>
                                        </PhotoProvider></> :
                                        <BiUser className='inline-block' />
                                }
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 absolute z-50 ">
                                {account}
                            </ul>
                        </details>

                    </div>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;