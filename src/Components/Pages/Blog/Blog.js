import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';



const Blog = () => {
  const { students} = useContext(AuthContext)
  const [search, setSearch] = useState('')
  const [user, setUser] = useState('')
  const [massage, setMassage] = useState('')
  const navigate = useNavigate()
  console.log(students)

  const {data:blogs=[]} = useQuery({
    queryKey: ["blogs"],
    queryFn: async ()=>{
      const res = await fetch(`http://localhost:5000/blog`);
      const data = await res.json();
      return data
    }
   
  })
  console.log(blogs)
  const handleSearch = ()=> {
    console.log(search)



    if(!((students?.find(std=> std.id == search)) == undefined)){
        setUser(students?.find(std=> std.id == search))
        navigate('/createblog')
        
    }
    else{
      setMassage('Your student id not match')
       
    }
}

console.log(user)
   
    return (
        <div className='px-3'>
        {/* {
          user?.name ? 
          <div className='flex justify-end px-10'>
          <Link to="/createblog"> <button className="btn capitalize">Create Blog</button></Link>
          </div>
            :
          <div className='flex flex-col justify-center mx-auto items-center lg:w-1/2 mt-20 bg-white p-10 gap-4 rounded-md'>
                <h2 className='text-error text-2xl font-bold'>Please Provide your ID No:</h2>
                <input className='input w-64' type="text" onChange={(e)=> setSearch(e.target.value)} />
                <button onClick={()=> handleSearch()} className='btn btn-warning'>Submit</button>
                <h2 className='text-error'>{massage}</h2>
          </div>
        }  */}

        <div>
          <div className='flex justify-end px-10'>
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>Create Blog</button>
          </div>
         
            {
              user?.name ? navigate('/createblog') :
              <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className='flex flex-col justify-center items-center gap-4'>
                  <h2 className='text-error text-2xl font-bold'>Please Provide your ID No:</h2>
                  <input className='input border-4 border-warning w-full max-w-xs ' type="text" onChange={(e)=> setSearch(e.target.value)} />
                  <button onClick={()=> handleSearch()} className='btn btn-warning '>Submit</button>
                  <h2 className='text-error'>{massage}</h2>
                </div>
              </div>
            </dialog>
            }
          {
            blogs?.map(blog=> 
              <div dangerouslySetInnerHTML={{ __html: blog.content}}>
                
              </div>
              )
          }
        </div>
        </div>
    );
};

export default Blog;