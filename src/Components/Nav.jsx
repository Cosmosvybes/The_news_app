import React, { useState } from "react";
import "./Nav.css";
import { FaCaretLeft, FaCaretRight, FaBars, FaCaretUp } from "react-icons/fa";
const Nav = () => {
  const [openBar, setOpenBar] = useState(false);
  return (
    <>
      <header
        className="h-28 bg-slate-300  z-10 sticky top-0 flex
           justify-around items-center px-40 max-sm:px-3 max-sm:justify-between max-sm:h-12"
      >
        <h1 className="text-sky-500  rounded-sm px-1 py-">Logo</h1>
        <a
          href="#"
          className="text-slate-950 rounded-sm px-1 py-1 hover:border border-white hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          All news
        </a>
        <a className="text-slate-950  rounded-sm px-1 py-1 hover:border border-white hover:bg-sky-400 hover:text-white max-sm:hidden">
          Discussion
        </a>
        <button
          className="hidden max-sm:inline"
          onClick={() => setOpenBar(!openBar)}
        >
          {!openBar && <FaBars className=" text-sky-400 text-2xl" />}
        </button>

        <div
          className="sidebtn absolute right-0 top-12 transition duration-200 w-full
             bg-sky-400 hidden
         max-sm:flex flex-col justify-center items-center px-2  rounded-sm z-10"
          style={{ height: openBar ? "100px" : "0px", transition: "0.5s" }}
        >
          <a
            className="text-white cursor-pointer hover:text-sky-700"
            style={{ display: openBar ? "block" : "none" }}
          >
            {" "}
            Latest News
          </a>
          <p
            className="text-slate-500"
            style={{ display: openBar ? "block" : "none" }}
          >
            {" "}
            Filter by{" "}
          </p>
          <select
            className="border border-gray-50 rounded-md"
            style={{ display: openBar ? "block" : "none" }}
          >
            <option>Entertainment</option>
            <option>Sports</option>
            <option>Country</option>
          </select>
          <FaCaretUp
            style={{ display: openBar ? "block" : "none" }}
            className="absolute  top-24 text-center text-2xl text-sky-600"
            onClick={() => setOpenBar(!openBar)}
          />
        </div>

        <div
          className="left-side absolute left-0 h-32 w-9 
           border border-slate-700 z-10 top-96 flex flex-col justify-center items-center px-2 py-2 rounded-sm"
        ></div>
      </header>
    </>
  );
};

export default Nav;
