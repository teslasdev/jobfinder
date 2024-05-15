import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import bg from "./assets/Group 2.png";
import MagnifyingGlass from './assets/MagnifyingGlass.png'
function Header() {
  return (
    <>
      <div className="fixed z-30 h-[7vh] bg-white w-full flex justify-between sm:px-12 px-6 items-center">
        <div>
          <img src={logo} className="w-[60px]" />
        </div>
        <div className="flex gap-5 font-medium">
          <p>Home</p>
          <p>Find Jobs</p>
        </div>
      </div>
      <div className="h-[7vh] w-full"></div>
      <div className="h-[379px] w-full bg-white relative flex justify-center items-center sm:px-12 px-6">
        <div className="absolute right-0 h-full top-0">
          <img src={bg} className="h-full w-full" />
        </div>

        <div className="w-full z-10">
          <h2 className="sm:text-[56px] text-[40px] font-medium">
            Find your <span className="text-[#000D4D]">New Job</span> today
          </h2>
          <p className="text-[18px] text-[#00000070] mt-3">
            Thousands of jobs in the computer, engineering and technology
            sectors are waiting for you.
          </p>
          {/* form */}
          <div className="mt-12 flex">
            <div className="relative border border-[#14141420] shadow-md bg-white sm:w-[40%] w-full h-[60px] pl-10">
              <div className="absolute left-3 h-full top-[35%]">
                <img src={MagnifyingGlass} className="h-[16px] w-[16px]" />
              </div>

              <input
                type="text"
                className="outline-none text-[12px] border-none w-full h-full"
                placeholder="What position are you looking for ?"
              />
            </div>
            <div className="flex shadow-md justify-center items-center bg-[#000D4D] w-[161px] text-white">
              Search Job
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
