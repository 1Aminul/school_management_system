import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const AddTeachers = () => {
    const { register, handleSubmit, reset } = useForm();
    const teacher = useLoaderData()
    const hanlderform = (data) => {


        const id = Math.random().toString().substr(2, 8)

        // const now = new Date();
        // const date = now.getDate()
        // const withPmAm = now.toLocaleTimeString('en-US', {
        //     hour: '2-digit',
        //     minute: '2-digit',
        // });
        // const nameOfMonthUS = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(
        //     new Date(),
        // );

        // let time = `${date} ${nameOfMonthUS} ${withPmAm}`

        const form = new FormData();
        form.append('file', data.files[0])
        form.append("upload_preset", "school_management")
        form.append("cloud_name", "cloudineryName")
        fetch(`https://api.cloudinary.com/v1_1/schooolmanagement/image/upload`, {
            method: "POST",
            body: form
        }).then(res => res.json())
            .then(datas => {
                const teacherInfo = {
                    name: data.name,
                    gender: data.gender,
                    DateOfBirth: data.Dbirth,
                    fatherName: data.faName,
                    motherName: data.moName,
                    email: data.email,
                    subject: data.subject,
                    phone: data.phone,
                    bloodGroup: data.Bgroup,
                    address: data.address,
                    religion: data.religion,
                    photo_url: datas.url,
                    joiningDate: data.joinDate,
                    id: id,
                }
                fetch(`http://localhost:5000/teacherInfo`, {
                    method: 'post',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(teacherInfo)
                }).then(res => res.json())
                    .then(dataInfo => {
                        if (dataInfo.acknowledged) {
                            toast.success('teacher Information added successfully')
                            reset()
                        }
                    })
                    .catch(error => console.log(error))

            })
            .catch(err => console.log(err))


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
        fetch(`http://localhost:5000/teacherInfo/${teacher?._id}`, {
            method: 'put',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updateInfo)
        }).then(res => res.json())
            .then(datas => {
                if (datas.acknowledged) {
                    toast.success("teacher info is updated")
                }
            }).catch(err => toast.error(`${err}`))
    }
    return (
        <div className='p-10'>
            <h2 className='text-2xl font-bold'>Teacher Admission Form</h2>
            <div className='mt-5 bg-white px-5 py-10 rounded-md'>
                <h2 className='text-2xl '>Add New Teacher</h2>

                <form onSubmit={!teacher?._id ? handleSubmit(hanlderform) : handleSubmit(handleUpdate)}>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div>
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type='text' defaultValue={teacher?.name} className='input input-bordered w-full' />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Gender *</span>
                            </label>
                            <select {...register("gender")} className='input input-bordered w-full' defaultValue={teacher?.gender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Date of Birth</span>
                            </label>
                            <input {...register("Dbirth")} type='date' className='input input-bordered w-full' defaultValue={teacher?.DateOfBirth} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Father's Name</span>
                            </label>
                            <input {...register("faName")} type='text' className='input input-bordered w-full' defaultValue={teacher?.fatherName} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Mother's Name</span>
                            </label>
                            <input {...register("moName")} type='text' className='input input-bordered w-full' defaultValue={teacher?.motherName} />
                        </div>
                       
                        <div>
                            <label className="label">
                                <span className="label-text">Blood Group *</span>
                            </label>
                            <select {...register("Bgroup")} className='input input-bordered w-full' defaultValue={teacher?.bloodGroup}>
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
                            <select {...register("religion")} className='input input-bordered w-full' defaultValue={teacher?.religion}>
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
                            <input {...register("email")} type='email' className='input input-bordered w-full' defaultValue={teacher?.email} />
                        </div>
                       
                     
                        <div>
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input {...register("subject")} type='text' className='input input-bordered w-full' defaultValue={teacher?.subject} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input {...register("phone")} type='number' className='input input-bordered w-full' defaultValue={teacher?.phone} />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text">Joining Date</span>
                            </label>
                            <input {...register("joinDate")} type='date' className='input input-bordered w-full' defaultValue={teacher?.DateOfBirth} />
                        </div>
                       
                        {
                            !teacher?._id ?
                                <div>
                                    <label className="label">
                                        <span className="label-text">Upload Photo (150 x 150)</span>
                                    </label>
                                    <input {...register("files")} type='file' className='input input-bordered w-full' />
                                </div> : ""
                        }

                    </div>
                    <div>
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <textarea {...register("address")} className='input input-bordered w-full h-32' defaultValue={teacher?.address} />
                        </div>
                    {
                        teacher?._id ? <input type="submit" value='Save' className='w-48 bg-warning rounded py-3 mt-6 text-white cursor-pointer' />
                            :
                            <input type="submit" value='Submit' className='w-48 bg-warning rounded py-3 mt-6 text-white cursor-pointer' />
                    }
                    <input type="reset" value='Reset' className='w-48 bg-secondary rounded py-3 mt-6 ml-6 text-white cursor-pointer' />

                </form>

            </div>

        </div>
    );
};

export default AddTeachers;