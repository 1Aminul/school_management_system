import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import {FaTrash} from 'react-icons/fa'
import {BsSignpost} from 'react-icons/bs'

const Notice = () => {
  const { register, handleSubmit, reset } = useForm();

  const { data: notice = [], refetch } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/notice`);
      const data = await res.json();
      return data;
    },
  });
  
  
  const handlerNotice = (data) => {
    const color = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
    
    
    const now = new Date().toDateString();
    const date = now.split(" ");

    const notice = {
      title: data.title,
      details: data.detail,
      color,
      date: `${date[2]} ${date[1]}, ${date[3]}`,
    };
    console.log(notice);
    fetch(`http://localhost:5000/notice`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(notice),
    })
      .then((res) => res.json())
      .then((dataInfo) => {
        if (dataInfo.acknowledged) {
          toast.success("notice submitted successfully");
          refetch();
          reset()
        }
      })
      .catch((error) => console.log(error));
  };
  const handlerDelete = (id)=> {
    fetch(`http://localhost:5000/notice/${id}`, {
      method: "delete",
     
    })
      .then((res) => res.json())
      .then((dataInfo) => {
        if (dataInfo.acknowledged) {
          toast.success("notice deleted successfully");
          refetch();
          
        }
      })
      .catch((error) => console.log(error));
  }
   const handlerPost = (id)=>{
    fetch(`http://localhost:5000/notice/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({status: "approved"})
     
    })
      .then((res) => res.json())
      .then((dataInfo) => {
        if (dataInfo.acknowledged) {
          toast.success("notice approved successfully");
          refetch();
          
        }
      })
      .catch((error) => console.log(error));
   }
 
  return (
    <div className="px-5 py-5">
      <h2 className="text-2xl font-bold">Notice Board</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mt-10 gap-10">
        <div className="bg-white p-4 rounded-lg h-[440px]">
          <h2 className="text-2xl font-bold">Create A Notice</h2>
          <form onSubmit={handleSubmit(handlerNotice)}>
            <label className="label">
              <span className="label-text text-lg font-bold">Title</span>
            </label>
            <input
              {...register("title")}
              type="text"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text text-lg font-bold">Details</span>
            </label>
            <textarea
              {...register("detail")}
              type="text"
              className="input input-bordered w-full h-32"
            />
            {/* <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password")} className='input input-bordered w-full' /> */}

            <div className="flex justify-start items-center gap-4">
              <input
                type="submit"
                value="Submit"
                className="w-full bg-warning rounded py-3 mt-6 text-white cursor-pointer"
              />
              <input
                type="reset"
                value="Reset"
                className="w-full bg-accent rounded py-3 mt-6 text-white cursor-pointer"
              />
            </div>
          </form>
        </div>

        <div className="lg:col-span-2">
          <div className=" bg-white rounded-lg p-5">
            <h2 className="text-2xl font-bold">Notice Board</h2>
            <div className="overflow-x-auto h-[600px]">
              {notice?.map((note) => (
                
                <div className="border-b py-2 mb-3">
                  <span className={`p-3 rounded-3xl my-2 inline-block text-white`} style={{backgroundColor: `${note.color}`}}>
                    {note.date}
                  </span>
                  <p className="text-xl font-bold mt-2">{note.title}</p>
                  <p className="text-sm mt-2">
                    {note.details}
                  </p>
                 <div className="flex justify-end gap-5 ">
                 <button title="Delete" onClick={()=> handlerDelete(note._id)} className="btn btn-warning">Delete</button>
                 <button disabled={note.status === "approved"} title="Approved" onClick={()=> handlerPost(note._id)} className="btn btn-warning">Approved</button>
                 </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
