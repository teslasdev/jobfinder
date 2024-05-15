import React from "react";
import job1 from "./assets/job1.png";

import job2 from "./assets/job2.png";
import MapPinLine from "./assets/MapPinLine.png";
import Clock from "./assets/Clock.png";
import CurrencyDollar from "./assets/CurrencyDollar.png";
import CalendarBlank from "./assets/CalendarBlank.png";

function Layout() {
  return (
    <div className="bg-[#FAFAFA] w-full flex sm:flex-row flex-col gap-10 justify-center px-6 sm:px-0 py-6 pt-12">
      <div className="sm:w-[40%] w-full">
        <div>
          <h3 className="font-bold text-[20px]">Total Jobs : 3600</h3>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          <div className="w-full rounded-[20px] bg-white  gap-9 border border-[#00000020] shadow-md p-6 flex">
            <div className="w-[72px] h-[72px]">
              <img src={job1} className="w-full h-full" />
            </div>
            <div className="w-[85%]">
              <h4>Linear Company</h4>
              <div className="flex gap-2">
                <h2 className="font-bold text-[24px]">Software Engineering</h2>
                <span className="bg-[#7D5AE230]  font-medium text-[#7D5AE2] flex justify-center items-center px-2 text-[12px] rounded-[8px]">
                  New Post
                </span>
              </div>

              <div className="flex w-full justify-between flex-wrap text-[#00000070] font-medium py-3">
                <div className="flex gap-1 items-center">
                  <img src={MapPinLine} className="w-[16px] h-[16px]" />
                  <p>Brussels</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={Clock} className="w-[16px] h-[16px]" />
                  <p>Full time</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CurrencyDollar} className="w-[16px] h-[16px]" />
                  <p>325-500k</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CalendarBlank} className="w-[16px] h-[16px]" />
                  <p>24mins Ago</p>
                </div>
              </div>
              <p className="text-[#00000080] font-medium">
                Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                laborum tempor Lorem incididunt.
              </p>
            </div>
          </div>

          <div className="w-full rounded-[20px] bg-white  gap-9 border border-[#00000020] shadow-md p-6 flex">
            <div className="w-[72px] h-[72px]">
              <img src={job2} className="w-full h-full" />
            </div>
            <div className="w-[85%]">
              <h4>Notion</h4>
              <div className="flex gap-2">
                <h2 className="font-bold text-[24px]">Junior UI Designer</h2>
                {/* <span className="bg-[#7D5AE230]  font-medium text-[#7D5AE2] flex justify-center items-center px-2 text-[12px] rounded-[8px]">
                  New Post
                </span> */}
              </div>

              <div className="flex w-full justify-between flex-wrap text-[#00000070] font-medium py-3">
                <div className="flex gap-1 items-center">
                  <img src={MapPinLine} className="w-[16px] h-[16px]" />
                  <p>Brussels</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={Clock} className="w-[16px] h-[16px]" />
                  <p>Full time</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CurrencyDollar} className="w-[16px] h-[16px]" />
                  <p>50-65k</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CalendarBlank} className="w-[16px] h-[16px]" />
                  <p>24mins Ago</p>
                </div>
              </div>
              <p className="text-[#00000080] font-medium">
                Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                laborum tempor Lorem incididunt.
              </p>
            </div>
          </div>

          <div className="w-full rounded-[20px] bg-white  gap-9 border border-[#00000020] shadow-md p-6 flex">
            <div className="w-[72px] h-[72px]">
              <img src={job1} className="w-full h-full" />
            </div>
            <div className="w-[85%]">
              <h4>Linear Company</h4>
              <div className="flex gap-2">
                <h2 className="font-bold text-[24px]">Software Engineering</h2>
                <span className="bg-[#7D5AE230]  font-medium text-[#7D5AE2] flex justify-center items-center px-2 text-[12px] rounded-[8px]">
                  New Post
                </span>
              </div>

              <div className="flex w-full justify-between flex-wrap text-[#00000070] font-medium py-3">
                <div className="flex gap-1 items-center">
                  <img src={MapPinLine} className="w-[16px] h-[16px]" />
                  <p>Brussels</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={Clock} className="w-[16px] h-[16px]" />
                  <p>Full time</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CurrencyDollar} className="w-[16px] h-[16px]" />
                  <p>325-500k</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CalendarBlank} className="w-[16px] h-[16px]" />
                  <p>24mins Ago</p>
                </div>
              </div>
              <p className="text-[#00000080] font-medium">
                Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                laborum tempor Lorem incididunt.
              </p>
            </div>
          </div>

          <div className="w-full rounded-[20px] bg-white  gap-9 border border-[#00000020] shadow-md p-6 flex">
            <div className="w-[72px] h-[72px]">
              <img src={job2} className="w-full h-full" />
            </div>
            <div className="w-[85%]">
              <h4>Notion</h4>
              <div className="flex gap-2">
                <h2 className="font-bold text-[24px]">Junior UI Designer</h2>
                {/* <span className="bg-[#7D5AE230]  font-medium text-[#7D5AE2] flex justify-center items-center px-2 text-[12px] rounded-[8px]">
                  New Post
                </span> */}
              </div>

              <div className="flex w-full justify-between flex-wrap text-[#00000070] font-medium py-3">
                <div className="flex gap-1 items-center">
                  <img src={MapPinLine} className="w-[16px] h-[16px]" />
                  <p>Brussels</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={Clock} className="w-[16px] h-[16px]" />
                  <p>Full time</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CurrencyDollar} className="w-[16px] h-[16px]" />
                  <p>50-65k</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CalendarBlank} className="w-[16px] h-[16px]" />
                  <p>24mins Ago</p>
                </div>
              </div>
              <p className="text-[#00000080] font-medium">
                Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                laborum tempor Lorem incididunt.
              </p>
            </div>
          </div>

          <div className="w-full rounded-[20px] bg-white gap-9 border border-[#00000020] shadow-md p-6 flex">
            <div className="w-[72px] h-[72px]">
              <img src={job1} className="w-full h-full" />
            </div>
            <div className="w-[85%]">
              <h4>Linear Company</h4>
              <div className="flex gap-2">
                <h2 className="font-bold text-[24px]">Software Engineering</h2>
                <span className="bg-[#7D5AE230]  font-medium text-[#7D5AE2] flex justify-center items-center px-2 text-[12px] rounded-[8px]">
                  New Post
                </span>
              </div>

              <div className="flex w-full justify-between flex-wrap text-[#00000070] font-medium py-3">
                <div className="flex gap-1 items-center">
                  <img src={MapPinLine} className="w-[16px] h-[16px]" />
                  <p>Brussels</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={Clock} className="w-[16px] h-[16px]" />
                  <p>Full time</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CurrencyDollar} className="w-[16px] h-[16px]" />
                  <p>325-500k</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CalendarBlank} className="w-[16px] h-[16px]" />
                  <p>24mins Ago</p>
                </div>
              </div>
              <p className="text-[#00000080] font-medium">
                Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                laborum tempor Lorem incididunt.
              </p>
            </div>
          </div>

          <div className="w-full rounded-[20px] bg-white gap-9 border border-[#00000020] shadow-md p-6 flex">
            <div className="w-[72px] h-[72px]">
              <img src={job2} className="w-full h-full" />
            </div>
            <div className="w-[85%]">
              <h4>Notion</h4>
              <div className="flex gap-2">
                <h2 className="font-bold text-[24px]">Junior UI Designer</h2>
                {/* <span className="bg-[#7D5AE230]  font-medium text-[#7D5AE2] flex justify-center items-center px-2 text-[12px] rounded-[8px]">
                  New Post
                </span> */}
              </div>

              <div className="flex w-full justify-between flex-wrap text-[#00000070] font-medium py-3">
                <div className="flex gap-1 items-center">
                  <img src={MapPinLine} className="w-[16px] h-[16px]" />
                  <p>Brussels</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={Clock} className="w-[16px] h-[16px]" />
                  <p>Full time</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CurrencyDollar} className="w-[16px] h-[16px]" />
                  <p>50-65k</p>
                </div>

                <div className="flex gap-1 items-center">
                  <img src={CalendarBlank} className="w-[16px] h-[16px]" />
                  <p>24mins Ago</p>
                </div>
              </div>
              <p className="text-[#00000080] font-medium">
                Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad
                sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.
                laborum tempor Lorem incididunt.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:w-[15%] w-full flex flex-col">
        <div className="w-full rounded-[20px] flex flex-col bg-white justify-between gap-4 border border-[#00000010] shadow-sm p-4">
          <h4 className="font-bold text-[20px]">📨 Email me for jobs</h4>
          <p className="font-medium text-[14px] text-[#00000080]">
            Ut esse eiusmod aute. Sit enim labore dolore. Aute ea fugiat commodo
            ea foes.
          </p>
          <div className="border border-[#14141420] rounded-[10px] shadow-md bg-white w-full h-[40px] pl-4">
            <input
              type="text"
              className="outline-none border-none bg-transparent w-full h-full text-[14px]"
              placeholder="Enter Email"
            />
          </div>
          <div className="flex shadow-md rounded-[10px] justify-center items-center h-[40px] bg-[#000D4D] w-full text-white">
            Subscribe
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
