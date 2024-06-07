import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../../../images/bsrm-logo.jpg";
import { Link } from "react-router-dom";
const HeadSection = () => {
  return (
    <div className="print:hidden bg-white">
      <div className="flex justify-between items-center bg-slate-800 px-10 py-2 text-warning ">
        <div className="w-1/5 text-2xl font-bold animate-text-color">
          <Link to="">Notice Board</Link>
        </div>
        <div className="w-3/5 text-lg">
          <marquee behavior="link" direction="left">
            এই মর্মে জানানো যাচ্ছে যে আগামী 26/07/23 ইং রোজ বুধবার স্কুল বন্ধ
            থাকিবে।
          </marquee>
        </div>
        <div className="w-1/5 flex justify-center items-center lg:gap-10 sm:gap-3 text-xl">
          <Link to="https://www.facebook.com/abdulkader23615" target="_blank">
            {" "}
            <FaFacebookF className="border-r-2 rounded-md border-warning" />
          </Link>
          <Link>
            <FaTwitter className="border-r-2 rounded-md border-warning" />
          </Link>
          <Link>
            <FaLinkedinIn className="border-r-2 rounded-md border-warning" />
          </Link>
        </div>
      </div>
      {/* <div className="py-1 flex justify-center items-center gap-5">
        <img className="h-28" src={logo} alt="bsrm school logo" />
        <h1 className="sm:text-4xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-warning to-black animate-text-color ">BURHANI BSRM SCHOOL</h1>
      </div> */}
    </div>
  );
};

export default HeadSection;
