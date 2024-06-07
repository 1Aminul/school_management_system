import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import HeadSection from '../Pages/Shared/Navbar/HeadSection';

const Main = () => {
    return (
        <div>
            <HeadSection/>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;