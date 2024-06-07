import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import {ref,uploadBytes,getDownloadURL,listAll,list,} from "firebase/storage";
import { storage } from '../../../../../firebase.config';



const AdmissionForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const student = useLoaderData()
    console.log(student)
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
  
    const imagesListRef = ref(storage, "images/");
    const uploadFile = () => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [url]);
        });
      });
    };
    // useEffect(() => {
    //     listAll(imagesListRef).then((response) => {
    //       response.items.forEach((item) => {
    //         getDownloadURL(item).then((url) => {
    //           setImageUrls((prev) => [url]);
    //         });
    //       });
    //     });
    //   }, []);
    console.log(imageUpload, imageUrls[0])
    
   
    const hanlderform = (data) => {
        uploadFile()
        const d = new Date().toString().split(' ')
        const date = `${d[2]} ${d[1]} ${d[3]}`
        if(imageUrls[0]){
            const studentInfo = {
                name: data.name,
                gender: data.gender,
                DateOfBirth: data.Dbirth,
                fatherName: data.faName,
                motherName: data.moName,
                occupation: data.occupation,
                email: data.email,
                class: data.class,
                phone: data.phone,
                roll: data.roll,
                bloodGroup: data.Bgroup,
                address: data.address,
                section: data.section,
                religion: data.religion,
                photo_url: imageUrls[0],
                admitDate: date,
                // id: id,
            }
            fetch(`http://localhost:5000/studentInfo`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(studentInfo)
            }).then(res => res.json())
                .then(dataInfo => {
                    if (dataInfo.acknowledged) {
                        toast.success('Student Information added successfully')
                        reset()
                        setImageUpload('')
                        setImageUrls('')
                    }
                })
                .catch(error => console.log(error))
        }
    }
    const handleUpdate = (data) => {
        console.log(data)
        const updateInfo = {
            name: data.name,
            gender: data.gender,
            DateOfBirth: data.Dbirth,
            fatherName: data.faName,
            motherName: data.moName,
            occupation: data.occupation,
            email: data.email,
            class: data.class,
            phone: data.phone,
            roll: data.roll,
            bloodGroup: data.Bgroup,
            address: data.address,
            section: data.section,
            religion: data.religion,
        }
        fetch(`http://localhost:5000/studentInfo/${student?._id}`, {
            method: 'put',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateInfo)
        }).then(res => res.json())
            .then(datas => {
                if (datas.acknowledged) {
                    toast.success("student info is updated")
                }
            }).catch(err => toast.error(`${err}`))
    }
    return (
        <div className='p-10'>
            <h2 className='text-2xl font-bold'>Admission Form</h2>
            <div className='mt-5 bg-white px-5 py-10 rounded-md'>
                <h2 className='text-2xl '>Add New Student</h2>

                <form onSubmit={!student?._id ? handleSubmit(hanlderform) : handleSubmit(handleUpdate)}>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type='text' defaultValue={student?.name} className='input w-full border-2 border-warning' />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Gender *</span>
                            </label>
                            <select {...register("gender")} className='input w-full border-2 border-warning' defaultValue={student?.gender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input {...register("Dbirth")} type='date' className='input w-full border-2 border-warning' defaultValue={student?.DateOfBirth} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Father's Name</span>
                            </label>
                            <input {...register("faName")} type='text' className='input w-full border-2 border-warning' defaultValue={student?.fatherName} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Mother's Name</span>
                            </label>
                            <input {...register("moName")} type='text' className='input w-full border-2 border-warning' defaultValue={student?.motherName} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Father Occupation</span>
                            </label>
                            <input {...register("occupation")} type='text' className='input w-full border-2 border-warning' defaultValue={student?.motherName} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Roll</span>
                            </label>
                            <input {...register("roll")} type='number' className='input w-full border-2 border-warning' defaultValue={student?.roll} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Blood Group *</span>
                            </label>
                            <select {...register("Bgroup")} className='input w-full border-2 border-warning' defaultValue={student?.bloodGroup}>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Religion</span>
                            </label>
                            <select {...register("religion")} className='input w-full border-2 border-warning' defaultValue={student?.religion}>
                                <option value="Islam">Islam</option>
                                <option value="Hindu">Hindu</option>
                                <option value="Christian">Christian</option>
                                <option value="Buddha">Buddha</option>
                                <option value="Other">Other</option>

                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type='email' className='input w-full border-2 border-warning' defaultValue={student?.email} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Class</span>
                            </label>
                            <select {...register("class")} className='input w-full border-2 border-warning' defaultValue={student?.class}>
                                <option value="Nursery">Nursery</option>
                                <option value="One">One</option>
                                <option value="Two">Two</option>
                                <option value="Three">Three</option>
                                <option value="Four">Four</option>
                                <option value="Five">Five</option>
                                <option value="Six">Six</option>
                                <option value="Seven">Seven</option>
                                <option value="Eight">Eight</option>
                                <option value="Nine">Nine</option>
                                <option value="Ten">Ten</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Section *</span>
                            </label>
                            <select {...register("section")} className='input w-full border-2 border-warning' defaultValue={student?.section}>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input {...register("phone")} type='number' className='input w-full border-2 border-warning' defaultValue={student?.phone} />
                        </div>
                       
                        {
                            !student?._id ?
                                <div>
                                    <label className="label">
                                        <span className="label-text">Upload Photo (150 x 150)</span>
                                    </label>
                                    <input onChange={(e)=> setImageUpload(e.target.files[0])} type='file' className='input w-full border-2 border-warning' />
                                </div> : ''
                        }

                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <textarea {...register("address")} className='input w-full border-2 border-warning h-32' defaultValue={student?.address} />
                    </div>
                    {
                        student?._id ? <input type="submit" value='Save' className='w-48 bg-warning rounded py-3 mt-6 text-white cursor-pointer' />
                            :
                            <input type="submit" value='Submit' className='w-48 bg-warning rounded py-3 mt-6 text-white cursor-pointer' />
                    }
                    <input type="reset" value='Reset' className='w-48 bg-secondary rounded py-3 mt-6 ml-6 text-white cursor-pointer' />

                </form>

            </div>
               
        </div>
    );
};

export default AdmissionForm;