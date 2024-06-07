import React from 'react';
import { LiaUsersSolid } from "react-icons/lia";
import { FaChalkboardTeacher} from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { RiComputerLine  } from "react-icons/ri";



const DataCard = () => {
    const dataCard1 = [
        {title: "Total Students", static: 450, icon: <LiaUsersSolid className='text-warning' size={30}/>, bgColor: '#FEEDED'},
        {title: "Total Teachers", static: 30, icon: <FaChalkboardTeacher className='text-[#28C76F]' size={30}/>, bgColor: '#E5F8ED'},
        {title: "Total Classroom", static: 32, icon: <SiGoogleclassroom className='text-[#00CFE8]' size={30}/>, bgColor: '#E0F9FC'},
        {title: "Computer Classroom", static: 2, icon: <RiComputerLine className='text-[#EA5455]' size={30}/>, bgColor: '#FCEAEA'},
    ]
    const dataCard2 = [
        {title: "Total Students", static: 450, icon: <LiaUsersSolid className='text-white' size={50}/>, bgColor: '#1B2850'},
        {title: "Total Teachers", static: 30, icon: <FaChalkboardTeacher className='text-white' size={50}/>, bgColor: '#00CFE8'},
        {title: "Total Classroom", static: 32, icon: <SiGoogleclassroom className='text-white' size={50}/>, bgColor: '#1B2850'},
        {title: "Computer Classroom", static: 2, icon: <RiComputerLine className='text-white' size={50}/>, bgColor: '#28C76F'},
    ]
    
    return (
        <div className=''>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
               {
                dataCard1.map(card=> 
                    <div className='flex justify-start items-center gap-5 border px-3 py-5 rounded shadow-sm bg-white'>
                        <span className='w-12 h-12 rounded-full flex justify-center items-center'  style={{backgroundColor:`${card.bgColor}`}}>
                            {card.icon}
                        </span>
                        <div>
                            <h2 className='text-xl font-semibold'>{card.static}</h2>
                            <p>{card.title}</p>
                        </div>
                    </div>
                    )
               }    
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
                {
                    dataCard2.map(card2=>
                    <div className="flex justify-between items-center gap-5 border px-5 py-5 rounded-lg shadow-sm" style={{backgroundColor:`${card2.bgColor}`}}>
                        <div>
                            <h2 className='text-2xl font-bold text-white'>{card2.static}</h2>
                            <p className='text-white text-lg font-bold'>{card2.title}</p>
                        </div>
                        <span className='hover:scale-125 transition-all'>
                           {card2.icon}
                        </span>
                    </div>
                        )
                }
            </div>
        </div>
    );
};

export default DataCard;