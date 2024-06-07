import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { HiChevronRight, HiSpeakerphone } from "react-icons/hi";
import { ImManWoman } from "react-icons/im";
import { GiTeacher, GiPencilRuler } from "react-icons/gi";
import { BsCalendar3EventFill, BsFillClipboardMinusFill } from "react-icons/bs";
import { BiLibrary } from "react-icons/bi";
import { AuthContext } from "../../Context/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const sideDropdownMenu = [
    {
      name: "Dashboard",
      icon: <AiFillDashboard className="inline-block  text-2xl text-warning" />,
      dropdown: [
        {
          listName: `${!user?.email ? "" : "Admin"}`,
          link: "/dashboard",
          listIcon: !user?.email ? (
            ""
          ) : (
            <HiChevronRight className="inline-block text-2xl " />
          ),
        },
        {
          listName: "Students",
          link: "/dashboard/students",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
        {
          listName: "Teachers",
          link: "/dashboard/teachers",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
      ],
    },
    {
      name: "Students",
      icon: <ImManWoman className="inline-block  text-2xl text-warning" />,
      dropdown: [
        {
          listName: "All Students",
          link: "/dashboard/students",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
        {
          listName: "Admission Form",
          link: "/dashboard/form",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
        {
          listName: "Student Promotion",
          link: "/dashboard/promotion",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
      ],
    },
    {
      name: "Teachers",
      icon: <GiTeacher className="inline-block text-2xl text-warning" />,
      dropdown: [
        {
          listName: "All Teachers",
          link: "/dashboard/teachers",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
        {
          listName: "Add Teacher",
          link: "/dashboard/addteacher",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
      ],
    },
    {
      name: "Library",
      icon: <BiLibrary className="inline-block text-2xl text-warning" />,
      dropdown: [
        {
          listName: "All Books",
          link: "/dashboard/allbooks",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
        {
          listName: "Add New Books",
          link: "/dashboard/addbooks",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
      ],
    },
    {
      name: "Classes",
      icon: (
        <GiPencilRuler className="inline-block  text-2xl text-warning" />
      ),
      dropdown: [
        {
          listName: "All Classes",
          link: "/allclasses",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
        {
          listName: "Add New Class",
          link: "/addclass",
          listIcon: <HiChevronRight className="inline-block text-2xl " />,
        },
      ],
    },
  ];

  return (
    <div>
      <div className="drawer lg:drawer-open ">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <Outlet />
          {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
        </div>
        <div className="drawer-side print:hidden">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="w-72 h-full text-slate-400 bg-primary print:hidden">
           
            {sideDropdownMenu.map((sideNav) => (
              <li className=" py-2 text-center">
                <details className="dropdown border-b border-slate-700 w-full ">
                  <summary className="btn btn-primary hover:bg-primary">
                    <div className="grid grid-cols-4 items-center gap-10">
                      <span className="col-span-1">{sideNav.icon}</span>
                      <span className="col-span-2">{sideNav.name}</span>
                      <span className="col-span-1">
                      <HiChevronRight className="inline-block text-2xl " />
                      </span>
                    </div>
                  </summary>
                  <ul className="py-5 text-white  bg-accent flex gap-4 flex-col">
                    {sideNav.dropdown.map((drop) => (
                      <li className="flex justify-start items-center ml-20 gap-4 text-sm hover:text-warning transition">
                        <Link to={drop.link}>
                          {drop.listIcon}
                          {drop.listName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
            <li className="py-2 text-center border-b border-slate-700">
              <summary className="btn btn-primary hover:bg-primary">
                    <div className="grid grid-cols-4 gap-10">
                      <span className="col-span-1"><BsCalendar3EventFill className="text-warning text-2xl"/></span>
                      <span className="col-span-2"><Link to='/dashboard/calenderEvent' className=" col-span-2">Calender </Link></span>
                    </div>
                </summary>
            </li>
            <li className="py-2 text-center border-b border-slate-700">
              <summary className="btn btn-primary hover:bg-primary">
                    <div className="grid grid-cols-4 ">
                      <span className="col-span-1"><HiSpeakerphone className="text-warning text-2xl"/></span>
                      <span className="col-span-2"><Link to='/dashboard/anouncement' className=" col-span-2">Anouncement</Link></span>
                    </div>
                </summary>
            </li>
            <li className="py-2 text-center border-b border-slate-700">
              <summary className="btn btn-primary hover:bg-primary">
                    <div className="grid grid-cols-4 gap-10">
                      <span className="col-span-1"><BsFillClipboardMinusFill className="text-warning text-2xl"/></span>
                      <span className="col-span-2"><Link to='/dashboard/notice' className=" col-span-2">Notice</Link></span>
                    </div>
                </summary>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
