import React from 'react';
import logo from '../../../../images/bsrm-logo.jpg'


const StudentDataPdf = ({data, contentRef}) => {
     const { name, address, bloodGroup, admitDate, occupation, gender, fatherName, motherName, roll, photo_url, phone, email, DateOfBirth, religion, section } = data;
 
     return (
        <div className='flex justify-center flex-col print:text-black' ref={contentRef}>
          <div className='flex justify-between items-center print:pt-[-10] print:py-0 py-4 border-gray-500 border-b-8' >
                <div className='w-[15%]'>
                    <img className='w-24 h-24' src={logo} alt="bsrm logo" />
                </div>
                <div className='w-60% mt-10'>
                    <h2 className='text-4xl text-center font-bold'>BURHANI BSRM SCHOOL</h2>
                    <p className='text-center'>EIIN NO :</p>
                    <p className='text-center'>Class : {data.class}</p>      
                </div>
                <div className='w-[15%]'>
                    <img className='w-32 h-32' src={photo_url}alt="" />
                    <h2 className='text-xs font-bold mt-2'>{name}</h2>
                </div>
            </div>
            <div className='mt-4'>
                <ul>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 1| Name: </p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!name ? "Nill": name}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 2| Roll:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!roll ? "Nill": roll}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 3| Gender:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!gender ? "Nill": gender}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 4| Father Name:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!fatherName ? "Nill": fatherName}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 5| Mother Name:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!motherName ? "Nill" : motherName}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 6| Date Of Birth:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!DateOfBirth ? "Nill": DateOfBirth}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 7| Religion:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!religion ? "Nill": religion}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 8| Blood Group:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!bloodGroup ? "Nill": bloodGroup}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'> 9| Father Occupation:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!occupation ? "Nill": occupation}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'>10| E-mail:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!email ? "Nill": email}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'>11| Admission Date:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!admitDate ? "Nill": admitDate}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'>12| Class:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!data.class ? "Nill": data.class}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'>13| Section:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!section ? "Nill": section}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 mt-2'><p className='w-2/4'>14| Address:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!address ? "Nill": address}</p></li>
                    <li className='text-lg flex justify-between items-center gap-28 my-2'><p className='w-2/4'>15| Phone:</p> <p className='w-3/4 border-2 border-gray-400 border-dashed px-2 pb-2'>{!phone ? "Nill": phone}</p></li>
                </ul>
                
            </div>
        </div>
    );
};

export default StudentDataPdf;