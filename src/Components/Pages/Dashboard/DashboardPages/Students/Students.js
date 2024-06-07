import React, { useEffect, useRef, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useDownloadExcel } from "react-export-table-to-excel";
import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";
import { SiMicrosoftexcel } from "react-icons/si";
import { BiSolidFilePdf } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import { toast } from "react-hot-toast";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { useQuery } from "@tanstack/react-query";

const Students = () => {
  // const [students, setStudents] = useState([])
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);

  const { data: students = [], refetch } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/studentInfo`);
      const data = await res.json();
      return data;
    },
  });
  console.log(students);
  const tableRef = useRef();

  //  download purchase table as a excel
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "student information",
    sheet: "student information",
  });
  //  download purchase table as a pdf
  const handleDownloadPDF = () => {
    const input = tableRef.current;
    const pdf = new jsPDF({unit:'mm', format: 'a4', orientation: 'landscape'});
    pdf.autoTable({ html: input });
    pdf.save("student Information.pdf");
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/studentInfo/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("student info deleted");
          refetch();
        }
      })
      .catch((err) => toast.error(`${err}`));
  };

  // const columns = [
  //     {
  //         name: 'Class Roll',
  //         selector: row => row.roll,
  //         sortable: true
  //     },
  //     {
  //         name: 'Photo',
  //         selector: row => <div className="flex items-center space-x-3">
  //             <div className="avatar">
  //                 <div className="mask mask-squircle w-12 h-12">
  //                     <PhotoProvider>
  //                         <PhotoView src={row.photo_url}>
  //                             <img src={row.photo_url} alt="Avatar Tailwind CSS Component" />
  //                         </PhotoView>
  //                     </PhotoProvider>

  //                 </div>
  //             </div>
  //         </div>,
  //     },
  //     {
  //         name: 'Name',
  //         selector: row => row.name,
  //         sortable: true
  //     },
  //     {
  //         name: 'Student ID',
  //         selector: row => row.id,
  //         sortable: true
  //     },

  //     {
  //         name: 'Gender',
  //         selector: row => row.gender,
  //         sortable: true
  //     },
  //     {
  //         name: 'Class',
  //         selector: row => row.class,
  //         sortable: true
  //     },
  //     {
  //         name: 'Section',
  //         selector: row => row.section,
  //         sortable: true
  //     },

  //     {
  //         name: 'Phone',
  //         selector: row => row.phone,
  //         sortable: true
  //     },
  //     {
  //         name: 'Action',
  //         selector: row =>
  //             <><Link to={`/dashboard/about/${row._id}`}>
  //                 <button className='bg-warning p-1 rounded'>
  //                     <HiExternalLink title='Details' className='text-xl inline-block ml-1' />
  //                 </button>
  //             </Link>
  //                 <button onClick={()=> handleDelete(row._id)} className='bg-warning p-1 ml-2 rounded'>
  //                     <ImBin title='Delete' className='text-xl inline-block ml-1' />
  //                 </button>
  //             </>,

  //     },

  // ];
  useEffect(() => {
    const result = students?.filter((std) => {
      return std?.name?.toString().match(search.toString());
    });
    setFilter(result);
  }, [search, students]);

  return (
    <div className="py-8 px-4 bg-white border border-warning rounded-lg shadow-lg mt-10 mx-8">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-3"> Student Information</h2>
        <div className="mr-10 flex justify-center items-center gap-5">
          <button className="" onClick={onDownload}>
            <SiMicrosoftexcel className="text-green-500" size={24} />
          </button>
          <button onClick={handleDownloadPDF}>
            <BiSolidFilePdf className="text-red-500" size={26} />
          </button>
        </div>
      </div>
      <input
        type="text"
        placeholder="...search by Id no"
        onChange={(e) => setSearch(e.target.value)}
        className=" border-2 rounded border-warning outline-warning py-2 px-2 my-4"
        value={search}
      />
      <div className="overflow-x-auto py-5 ">
        <table ref={tableRef} className="table table-xs border border-warning ">
          <thead>
            <tr className="font-extrabold text-lg ">
              <th className="">ID No</th>
              <th className="">Name</th>
              <th className="">Photo</th>
              <th className="">Roll</th>
              <th className="">Gender</th>
              <th className="">Class</th>
              <th className="">Section</th>
              <th className="">DOB</th>
              <th className="">Details</th>
            </tr>
          </thead>
          <tbody className="">
            {filter?.map((std) => (
              <tr className="">
                <td className="text-lg">{std?.id}</td>
                <td className="text-lg">{std?.name} </td>
                <td className="text-lg">
                    <PhotoProvider>
                        <PhotoView src={std.photo_url}>
                          <img className="w-10 h-10 rounded" src={std?.photo_url} alt="" />
                        </PhotoView>
                    </PhotoProvider> 
                </td>
                <td className="text-lg">{std?.roll} </td>
                <td className="text-lg">{std?.gender}</td>
                <td className="text-lg">{std?.class} </td>
                <td className="text-lg">{std?.section}</td>
                <td className="text-lg">{std?.DateOfBirth}</td>
                <td className=" flex justify-center items-center gap-3">
                  <Link title="Student Details" to={`/dashboard/about/${std?._id}`}>
                    <HiExternalLink size={24} className="text-warning"/>
                  </Link>
                  <ImBin size={20} className="text-warning" onClick={()=> handleDelete(std?._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
