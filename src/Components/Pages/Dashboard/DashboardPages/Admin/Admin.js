import React from "react";
import classmate from "../../../../../images/classmates.png";
import users from "../../../../../images/multiple-users-silhouette.png";
import classroom from "../../../../../images/classroom.png";
import Calender from "./Calender/Calender";
import Chart from "./Chart";
import PieChartStudent from "./PieChartStudent";
import "../../../../../App.css";
import { useQuery } from "@tanstack/react-query";
import LineCharts from "../Charts/LineCharts";
import DataCard from "./DataCard";

const Admin = () => {
  const { data: notice = [], refetch } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/notice`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin</h1>
      {/* <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex justify-between items-center px-6 py-7 mt-10 rounded  bg-white shadow-sm">
          <div className="border-green-500 border rounded-full p-3 bg-green-200 ">
            <img className="w-16 " src={classmate} alt="" />
          </div>
          <div>
            <h3 className="text-xl text-neutral">Students</h3>
            <h3 className="text-2xl">350</h3>
          </div>
        </div>
        <div className="flex justify-between items-center px-6 py-7 mt-10 rounded  bg-white shadow-sm">
          <div className="border-blue-500 border rounded-full p-3 bg-blue-200 ">
            <img className="w-16 " src={users} alt="" />
          </div>
          <div>
            <h3 className="text-xl text-neutral">Teachers</h3>
            <h3 className="text-2xl">35</h3>
          </div>
        </div>
        <div className="flex justify-between items-center px-6 py-7 mt-10 rounded  bg-white shadow-sm">
          <div className="border-yellow-300 border rounded-full p-3 bg-yellow-200 ">
            <img className="w-16 " src={classroom} alt="" />
          </div>
          <div>
            <h3 className="text-xl text-neutral">Class Room</h3>
            <h3 className="text-2xl">25</h3>
          </div>
        </div>
        <div className="flex justify-between items-center px-6 py-7 mt-10 rounded  bg-white shadow-sm">
          <div className="border-yellow-300 border rounded-full p-3 bg-yellow-200 ">
            <img className="w-16 " src={classroom} alt="" />
          </div>
          <div>
            <h3 className="text-xl text-neutral">Class Room</h3>
            <h3 className="text-2xl">25</h3>
          </div>
        </div>
      </div> */}
     <DataCard/>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-4">
        <div className="pr-5 pl-2 py-4 bg-white w-full mt-5 rounded-lg lg:col-span-2">
          <h2 className="text-2xl font-bold">Chart</h2>
          <LineCharts />
        </div>
        <div className="p-5 bg-white mt-5 rounded-lg w-full">
          <h2 className="text-2xl font-bold">Students</h2>
          <PieChartStudent />
          <div>
            <span className="w-12 h-4 inline-block rounded bg-warning mr-3"></span>
            <span>Male = 150</span>
          </div>
          <div>
            <span className="w-12 h-4 inline-block rounded bg-info mr-3"></span>
            <span>Female = 150</span>
          </div>
          <div>
            <span className="w-12 h-4 inline-block rounded bg-success mr-3"></span>
            <span>Teachers = 28</span>
          </div>
        </div>
        <div className="bg-white mt-5 rounded">
          <div className=" bg-white mt-5 rounded p-5">
            <h2 className="text-2xl font-bold">Notice Board</h2>
            <div className="overflow-x-auto h-96 mt-2">
              {notice?.map((note) => (
                <div className="border-b py-2 mb-3">
                  <span
                    className={`p-3 rounded-3xl my-2 inline-block text-white`}
                    style={{ backgroundColor: `${note.color}` }}
                  >
                    {note.date}
                  </span>
                  <p className="text-xl font-bold mt-2">{note.title}</p>
                  <p className="text-sm mt-2">{note.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" bg-white mt-5 rounded p-5">
          <h2 className="text-2xl font-bold">Social</h2>
          <Calender />
        </div>
      </div>
    </div>
  );
};

export default Admin;
