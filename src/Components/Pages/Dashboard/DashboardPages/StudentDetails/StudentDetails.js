import React, {useRef, useState} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {BiEdit} from 'react-icons/bi'
import {AiOutlinePrinter} from 'react-icons/ai'
import {ImDownload3} from 'react-icons/im'
import 'react-photo-view/dist/react-photo-view.css';
import bgImg from '../../../../../images/bsrm-bg.webp'
import html2pdf from 'html2pdf.js';
import StudentDataPdf from '../../StudentDataPDf/StudentDataPdf';


const StudentDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { name, _id, address, bloodGroup, admitDate, occupation, gender, fatherName, motherName, roll, photo_url, phone, email, DateOfBirth, religion, section } = data;
    const contentRef = useRef();
    console.log(photo_url)
     const generatePdf = async ()=>{
        const content = contentRef.current;
            await html2pdf(content, {
            margin: 5,
            filename: `${name}.pdf`,
            image: { type: 'jpeg', quality: 0.95},
            html2canvas: {scale:2, useCORS: true},
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            
        });
        
    } 
    return (
        <div className='p-6 print:p-0'>
                <h2 className='text-2xl font-bold print:hidden'>Student Details</h2>
                <div className=' mt-5 py-7 px-5 rounded-md text-white' style={{backgroundImage: `url(${bgImg})`}}>
                    <h2 className='text-2xl print:hidden'>About Me</h2>
                    <div className='flex lg:justify-end sm:justify-start md:justify-start gap-5 print:hidden'>
                            <Link to={`/dashboard/form/${_id}`} title='Edit' className='text-xl bg-transparent border-2 rounded hover:bg-warning transition-all p-3 w-12 h-12 text-center print:hidden'><BiEdit/></Link>
                            <Link title='Print' onClick={window.print} className='text-xl bg-transparent border-2 rounded hover:bg-warning transition-all p-3 w-12 h-12 text-center print:hidden'><AiOutlinePrinter/></Link>
                            <Link title='Download' onClick={generatePdf}  className='text-xl bg-transparent border-2 rounded hover:bg-warning transition-all p-3 w-12 h-12 text-center print:hidden'><ImDownload3/></Link>
                    </div>
                    {/* <div className='lg:flex lg:justify-center md:block sm:block  gap-10 my-4' id='capture'>
                        <div>
                            <h2 className='text-xl font-bold text-center'>{name}</h2>
                                <img title='Click on the image for zoom' 
                                className='w-44 h-48 border-4 border-warning rounded-lg mt-5' src={photo_url} alt="" />
                                
                        </div>
                        <div className='flex justify-start items-center gap-12 mt-6'>
                            <ul className='mt-2'>
                                <li className='text-md  mt-2'>Name:</li>
                                <li className='text-md  mt-2'>Roll:</li>
                                <li className='text-md  mt-2'>Gender:</li>
                                <li className='text-md  mt-2'>Father Name:</li>
                                <li className='text-md  mt-2'>Mother Name:</li>
                                <li className='text-md  mt-2'>Date Of Birth:</li>
                                <li className='text-md  mt-2'>Religion:</li>
                                <li className='text-md  mt-2'>Blood Group:</li>
                                <li className='text-md  mt-2'>Father Occupation:</li>
                                <li className='text-md  mt-2'>E-mail:</li>
                                <li className='text-md  mt-2'>Admission Date:</li>
                                <li className='text-md  mt-2'>Class:</li>
                                <li className='text-md  mt-2'>Section:</li>
                                <li className='text-md  mt-2'>Address:</li>
                                <li className='text-md  my-2'>Phone:</li>
                            </ul>
                            <ul className='mt-2'>
                                <li className='text-md font-bold mt-2'>{!name ? "Nill": name}</li>
                                <li className='text-md font-bold mt-2'>{!roll ? "Nill": roll}</li>
                                <li className='text-md font-bold mt-2'>{!gender ? "Nill": gender}</li>
                                <li className='text-md font-bold mt-2'>{!fatherName ? "Nill": fatherName}</li>
                                <li className='text-md font-bold mt-2'>{!motherName ? "Nill" : motherName}</li>
                                <li className='text-md font-bold mt-2'>{!DateOfBirth ? "Nill": DateOfBirth}</li>
                                <li className='text-md font-bold mt-2'>{!religion ? "Nill": religion}</li>
                                <li className='text-md font-bold mt-2'>{!bloodGroup ? "Nill": bloodGroup}</li>
                                <li className='text-md font-bold mt-2'>{!occupation ? "Nill": occupation}</li>
                                <li className='text-md font-bold mt-2'>{!email ? "Nill": email}</li>
                                <li className='text-md font-bold mt-2'>{!admitDate ? "Nill": admitDate}</li>
                                <li className='text-md font-bold mt-2'>{!data.class ? "Nill": data.class}</li>
                                <li className='text-md font-bold mt-2'>{!section ? "Nill": section}</li>
                                <li className='text-md font-bold mt-2'>{!address ? "Nill": address}</li>
                                <li className='text-md font-bold my-2'>{!phone ? "Nill": phone}</li>
                            </ul>
                        </div>
                    
                    </div>  */}
                    <div className='flex justify-center print:px-0 px-12' style={{display:'block'}}>
                    <StudentDataPdf data = {data} contentRef={contentRef} />
                </div>
                </div>
                
            </div>
    );
};
// style={{display: 'none'}}
export default StudentDetails;