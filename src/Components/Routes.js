import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUp from "./Pages/Shared/SignUp/SignUp";
import Login from "./Pages/Shared/Login/Login";
import Admin from "./Pages/Dashboard/DashboardPages/Admin/Admin";
import Students from "./Pages/Dashboard/DashboardPages/Students/Students";
import Teachers from "./Pages/Dashboard/DashboardPages/Teachers/Teachers";
import AdmissionForm from "./Pages/Dashboard/DashboardPages/AdmissionForm/AdmissionForm";
import StudentPromotion from "./Pages/Dashboard/DashboardPages/StudentPromotion/StudentPromotion";
import AllBooks from "./Pages/Dashboard/DashboardPages/AllBooks/AllBooks";
import AddBooks from "./Pages/Dashboard/DashboardPages/AddBooks/AddBooks";
import StudentDetails from "./Pages/Dashboard/DashboardPages/StudentDetails/StudentDetails";
import AddTeachers from "./Pages/Dashboard/DashboardPages/AddTeachers/AddTeachers";
import TeacherDetails from "./Pages/Dashboard/DashboardPages/Teachers/TeacherDetails";
import CalendarEvent from "./Pages/Dashboard/DashboardPages/Admin/CalenderEvent/CalendarEvent";
import Notice from "./Pages/Dashboard/DashboardPages/Admin/Notice/Notice";
import Anouncement from "./Pages/Dashboard/DashboardPages/Teachers/Anouncement/Anouncement";
import TextEditorModal from "./Pages/Blog/TextEditorModal";


export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/about',
            element: <About/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/blog',
            element: <Blog/>
        },
        {
            path: '/createblog',
            element: <TextEditorModal/>
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/signup',
            element: <SignUp/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>,
            children: [
                {
                    path: '/dashboard',
                    element: <Admin/>
                },
                {
                    path: '/dashboard/students',
                    element: <Students/>
                },
                {
                    path: '/dashboard/teachers',
                    element: <Teachers/>
                },
                {
                    path: '/dashboard/form',
                    element: <AdmissionForm/>
                },
                {
                    path: '/dashboard/form/:id',
                    element: <AdmissionForm/>,
                    loader: ({params})=> fetch(`http://localhost:5000/studentInfo/${params.id}`)
                },
                {
                    path: '/dashboard/promotion',
                    element: <StudentPromotion/>
                },
                {
                    path: '/dashboard/allbooks',
                    element: <AllBooks/>
                },
                {
                    path: '/dashboard/addbooks',
                    element: <AddBooks/>
                },
                {
                    path: '/dashboard/about/:id',
                    element: <StudentDetails/>,
                    loader: ({params})=> fetch(`http://localhost:5000/studentInfo/${params.id}`)
                    
                },
                {
                    path: '/dashboard/addteacher',
                    element: <AddTeachers/>
                },
                {
                    path: '/dashboard/calenderEvent',
                    element: <CalendarEvent/>
                },
                {
                    path: '/dashboard/notice',
                    element: <Notice/>
                },
                {
                    path: '/dashboard/anouncement',
                    element: <Anouncement/>
                },
                {
                    path: '/dashboard/addteacher/:id',
                    element: <AddTeachers/>,
                    loader: ({params})=> fetch(`http://localhost:5000/teacherInfo/${params.id}`)
                },
                {
                    path: '/dashboard/teacherInfo/:id',
                    element: <TeacherDetails/>,
                    loader: ({params})=> fetch(`http://localhost:5000/teacherInfo/${params.id}`)
                    
                },
                // {
                //     path: '/promotion',
                //     element: <StudentPromotion/>
                // },
            ]
        },

    ]},
   
])
