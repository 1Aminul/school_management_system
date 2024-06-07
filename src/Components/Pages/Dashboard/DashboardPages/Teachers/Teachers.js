
import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { HiExternalLink } from 'react-icons/hi'
import { ImBin } from 'react-icons/im';
import { toast } from 'react-hot-toast';
import {useQuery} from '@tanstack/react-query'


const Teachers = () => {
    // const [Teachers, setTeachers] = useState([])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState([])

    const {data: Teachers=[], refetch} = useQuery({
        queryKey: ['Teachers'],
        queryFn: async ()=> {
            const res = await fetch(`http://localhost:5000/teacherInfo`)
            const data = await res.json();
            return data
        }
    })

    const customStyles = {
        rows: {
            style: {
                minHeight: '60px',

                // override the row height
            },
        },
    }
    const handleDelete= (id)=>{
        fetch(`http://localhost:5000/studentInfo/${id}`,{
            method: 'delete',

        }).then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){

                toast.success('student info deleted')
                refetch()
            }
        } ).catch(err=> toast.error(`${err}`))
    }

    const columns = [
       
        {
            name: 'Photo',
            selector: row => <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <PhotoProvider>
                            <PhotoView src={row.photo_url}>
                                <img src={row.photo_url} alt="Avatar Tailwind CSS Component" />
                            </PhotoView>
                        </PhotoProvider>

                    </div>
                </div>
            </div>,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Teacher ID',
            selector: row => row.id,
            sortable: true
        },

        {
            name: 'Gender',
            selector: row => row.gender,
            sortable: true
        },
        {
            name: 'Subject',
            selector: row => row.subject,
            sortable: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true
        },

        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true
        },
        {
            name: 'Action',
            selector: row =>
                <><Link to={`/dashboard/teacherInfo/${row._id}`}>
                    <button className='bg-warning p-1 rounded'>
                        <HiExternalLink title='Details' className='text-xl inline-block ml-1' />
                    </button>
                </Link>
                    <button onClick={()=> handleDelete(row._id)} className='bg-warning p-1 ml-2 rounded'>
                        <ImBin title='Delete' className='text-xl inline-block ml-1' />
                    </button>
                </>,

        },

    ];
    useEffect(() => {
        const result = Teachers?.filter(teacher => {
            return teacher?.name?.toLowerCase().match(search.toLowerCase());
        })
        setFilter(result);
    }, [search, Teachers])


    return (
        // <div className='p-6'>
        //     <h2 className='text-2xl font-bold'>All Teachers</h2>
        //     <div className='bg-white mt-5 rounded-lg px-4 py-6'>
        //         <h2 className='text-2xl font-bold'>Teachers Data</h2>
        //         <div className='flex justify-start gap-10 my-4'>
        //             <input
        //                 type="number"
        //                 // value={name}
        //                 onChange={e=> setField(e.target.value)}
        //                 className="input border-2 border-warning outline-none"
        //                 placeholder="...search by id"
        //             />
        //             <input
        //                 type="text"
        //                 // value={name}
        //                 onChange={e=> setField(e.target.value)}
        //                 className="input border-2 border-warning outline-none"
        //                 placeholder="...search by name"
        //             />
        //             <input
        //                 type="text"
        //                 // value={name}
        //                 onChange={e=> setField(e.target.value)}
        //                 className="input border-2 border-warning outline-none"
        //                 placeholder="...search by class"
        //             />
        //             {/* <select onChange={(e)=> setList(e.target.value)} className='border-4 rounded outline-none border-warning'>
        //             <option value="2">2</option>
        //             <option value="4">4</option>
        //             <option value="10">10</option>
        //         </select> */}
        //         </div>
        //         <div className="overflow-x-auto mt-4">
        //             <table className="table">
        //                 {/* head */}
        //                 <thead className='text-black text-md'>
        //                     <tr className='border-b-warning'>
        //                         <th>Class Roll</th>
        //                         <th>Photo</th>
        //                         <th>ID</th>
        //                         <th>Name</th>
        //                         <th>Gender</th>
        //                         <th>Class</th>
        //                         <th>Section</th>
        //                         <th>Parents</th>
        //                         <th>Date of Birth</th>
        //                         <th>Phone</th>
        //                         <th>E-mail</th>
        //                     </tr>
        //                 </thead>
        //                 {
        //                   Teachers?.filter((std)=>{
        //                     if(field === ""){
        //                         return std;
        //                     }
        //                     else if(std.id === field){
        //                         return std;
        //                     }
        //                     else if(std.name.toLowerCase().includes(field.toLowerCase())){
        //                         return std;
        //                     }
        //                     else if(std.class.toLowerCase().includes(field.toLowerCase())){
        //                         return std;
        //                     }
        //                   }).slice(entries.indexOfFirst, entries.indexOfLast).map(student =>

        //                         <tbody className='text-center'>

        //                             <tr className="text-xs border-b-warning">
        //                                 <td>
        //                                     {student.roll}
        //                                 </td>
        //                                 <td>
        //                                     <div className="flex items-center space-x-3">
        //                                         <div className="avatar">
        //                                             <div className="mask mask-squircle w-12 h-12">
        //                                                 <PhotoProvider>
        //                                                     <PhotoView src={student.photo_url}>
        //                                                         <img src={student.photo_url} alt="Avatar Tailwind CSS Component" />
        //                                                     </PhotoView>
        //                                                 </PhotoProvider>

        //                                             </div>
        //                                         </div>
        //                                     </div>
        //                                 </td>
        //                                 <td>{student.id} </td>
        //                                 <td>{student.name} </td>
        //                                 <td>{student.gender}</td>
        //                                 <td>{student.class}</td>
        //                                 <td>{student.section}</td>
        //                                 <td>{student.fatherName}</td>
        //                                 <td>{student.DateOfBirth}</td>
        //                                 <td>{student.phone}</td>
        //                                 <td>{student.email}</td>

        //                                 <th>
        //                                     <button className="btn btn-ghost btn-xs">details</button>
        //                                 </th>
        //                             </tr>

        //                         </tbody>
        //                     )
        //                 }



        //             </table>
        //         </div>

        //         <div className='mt-3 flex justify-end'>
        //             <div>
        //                 <Pagination
        //                     entriesPerPage={entriesPerPage.get}
        //                     totalEntries={Teachers.length}
        //                     currentPage={{ get: currentPage.get, set: currentPage.set }}
        //                     offset={3}
        //                     classNames={{
        //                         wrapper: "pagination m-auto",
        //                         item: "pagination-item",
        //                         itemActive: "pagination-item-active",
        //                         navPrev: "pagination-item nav-item",
        //                         navNext: "pagination-item nav-item",
        //                         navStart: "pagination-item nav-item",
        //                         navEnd: "pagination-item nav-item",
        //                         navPrevCustom: "pagination-item",
        //                         navNextCustom: "pagination-item"
        //                     }}
        //                     showFirstNumberAlways={true}
        //                     showLastNumberAlways={true}
        //                     navStart="&#171;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        //                     navEnd="&#187;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        //                     navPrev="&#x2039;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        //                     navNext="&#x203a;" // Here you can pass anything (Text, HTML Tag, React Component, ...)
        //                     navPrevCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */ }}
        //                     navNextCustom={{ steps: 5, content: "\u00B7\u00B7\u00B7" /* Here you can pass anything (Text, HTML Tag, React Component, ...) */ }}
        //                 />
        //             </div>
        //         </div>
        //     </div>

        // </div>
        <div className='p-6'>
            <h2 className='text-2xl font-bold'>All Teachers</h2>
            <div className='py-8 px-2 bg-white rounded-lg shadow-lg mt-5'>
                <h2 className='text-2xl font-bold mb-3'> Teachers Data</h2>
                <DataTable
                    pagination
                    paginationRowsPerPageOptions={[50, 100]}
                    columns={columns}
                    data={filter}
                    fixedHeader
                    fixedHeaderScrollHeight="600px"
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    customStyles={customStyles}
                    subHeader
                    subHeaderAlign='left'
                    subHeaderComponent={
                        <input
                            type='text'
                            placeholder='...search by name'
                            onChange={(e) => setSearch(e.target.value)}
                            className='input border-2 rounded border-warning'
                            value={search}
                        />
                    }

                />
            </div>
        </div>
    );
};

export default Teachers;