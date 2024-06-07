import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../App.css'

import bg from '../../../images/bsrm-bg.webp'
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
      
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
      
        ['clean']     
    ]
}

const TextEditorModal = () => {
    const { register, handleSubmit } = useForm();
    const [value, setValue] = useState('');
    
    const blogSubmit = (data)=> {
        
        const now = new Date().toDateString();
        const date = now.split(" ");

        const blogPost = {
            title: data.title,
            photo: data.url,
            content: value,
            date: `${date[2]} ${date[1]}, ${date[3]}`,
        }
        console.log(blogPost)
        fetch(`http://localhost:5000/blog`, {
            method: "post",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(blogPost)
        }).then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                toast.success('your blog submitted')
            }
        }).catch(err=>  toast.error(`${err}`))
    }

    return (
        <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(blogSubmit)} className="modal-box w-1/2 max-w-5xl" style={{backgroundImage: `url(${bg})`}}>
                    <div>      
                    <h3 className="font-bold text-2xl text-center text-white">Blog</h3>
                    <label className="label">
                        <span className="label-text text-2xl text-white">Title</span>
                    </label>
                    <input {...register("title")} type='text' className='input input-bordered w-full' />
                    <label className="label">
                        <span className="label-text text-white text-2xl">Image URL</span>
                    </label>
                    <input type='text' {...register("url")} className='input input-bordered w-full mb-8' />
                    
                        <ReactQuill 
                            theme="snow" 
                            value={value} 
                            onChange={setValue} 
                            modules={modules}
                            
                            />;
                    </div> 
                   
                    <input type="submit" value='Submit' className='btn btn-warning rounded-sm w-36'/>
                </form>      
        </div>
    );
};

export default TextEditorModal;