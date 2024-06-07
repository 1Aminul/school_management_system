import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi'
import {AiOutlinePrinter} from 'react-icons/ai'
import {ImDownload3} from 'react-icons/im'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import bgImg from '../../../../../images/bsrm-bg.webp'

const TeacherDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { name, _id, address, bloodGroup,joiningDate, gender, fatherName, motherName, photo_url, phone, email, DateOfBirth, religion, subject } = data;
    return (
        <div className='p-6 print:p-0'>
            <h2 className='text-2xl font-bold print:hidden'>Student Details</h2>
            <div className=' mt-5 py-7 px-5 print:p-0 print:mt-0 text-white print:text-black rounded-md' style={{backgroundImage: `url(${bgImg})`}}>
                <h2 className='text-2xl '>About Me</h2>
                <div className='flex justify-end gap-5'>
                        <Link to={`/dashboard/addteacher/${_id}`} title='Edit' className='text-xl bg-transparent border-2 rounded hover:bg-warning transition-all p-3 w-12 h-12 text-center print:hidden'><BiEdit/></Link>
                        <Link title='Print' onClick={window.print} className='text-xl bg-transparent border-2 rounded hover:bg-warning transition-all p-3 w-12 h-12 text-center print:hidden'><AiOutlinePrinter/></Link>
                        <Link title='Download' className='text-xl bg-transparent border-2 rounded hover:bg-warning transition-all p-3 w-12 h-12 text-center print:hidden'><ImDownload3/></Link>
                    </div>
                <div className='flex justify-start gap-16 mt-2 print:block'>
                    <div>
                        <h2 className='text-2xl font-bold text-center'>{name}</h2>
                        <PhotoProvider>
                            <PhotoView src={photo_url}>
                            <img title='Click on the image for zoom' className='w-64 h-72 border-2 border-warning rounded-lg mt-5 print:w-44 print:h-44' src={photo_url} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        
                    </div>
                    <div className='flex justify-start items-center gap-12'>
                        <ul className='mt-5'>
                            <li className='text-md  mt-5'>Name:</li>
                            <li className='text-md  mt-5'>Gender:</li>
                            <li className='text-md  mt-5'>Father Name:</li>
                            <li className='text-md  mt-5'>Mother Name:</li>
                            <li className='text-md  mt-5'>Date Of Birth:</li>
                            <li className='text-md  mt-5'>Religion:</li>
                            <li className='text-md  mt-5'>Blood Group:</li>
                            <li className='text-md  mt-5'>E-mail:</li>
                            <li className='text-md  mt-5'>Subject:</li>
                            <li className='text-md  mt-5'>Joining Date:</li>
                            <li className='text-md  mt-5'>Address:</li>
                            <li className='text-md  mt-5'>Phone:</li>
                        </ul>
                        <ul className='mt-5'>
                            <li className='text-md font-bold mt-5'>{!name ? "Nill": name}</li>
                            <li className='text-md font-bold mt-5'>{!gender ? "Nill": gender}</li>
                            <li className='text-md font-bold mt-5'>{!fatherName ? "Nill": fatherName}</li>
                            <li className='text-md font-bold mt-5'>{!motherName ? "Nill" : motherName}</li>
                            <li className='text-md font-bold mt-5'>{!DateOfBirth ? "Nill": DateOfBirth}</li>
                            <li className='text-md font-bold mt-5'>{!religion ? "Nill": religion}</li>
                            <li className='text-md font-bold mt-5'>{!bloodGroup ? "Nill": bloodGroup}</li>
                            <li className='text-md font-bold mt-5'>{!email ? "Nill": email}</li>
                            <li className='text-md font-bold mt-5'>{!subject ? "Nill": subject}</li>
                            <li className='text-md font-bold mt-5'>{!joiningDate ? "Nill": joiningDate}</li>
                            <li className='text-md font-bold mt-5'>{!address ? "Nill": address}</li>
                            <li className='text-md font-bold mt-5'>{!phone ? "Nill": phone}</li>
                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default TeacherDetails;