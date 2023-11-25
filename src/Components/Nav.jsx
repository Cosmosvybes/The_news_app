import React, { useState } from "react";
import "./Nav.css";
import { FaBars, FaCaretUp, FaTwitter, FaFacebook } from "react-icons/fa";
const Nav = () => {
  const [openBar, setOpenBar] = useState(false);
  const [countries, setCountry] = useState([
    "uk",
    "te",
    "us",
    "pt",
    "es",
    "sv",
    "ta",
    "el",
    "de",
    "fr",
    "en",
    "nl",
    "zh",
    "ar",
    "he",
    "hi",
    "it",
    "no",
    "ro",
  ]);
  const [lang, showLang] = useState(false);
  const [ctry, showCountry] = useState(false);

  const handleFilter = () => {
    const filterElement = document.getElementById("filter");
    const filterVal = filterElement.options[filterElement.selectedIndex].value;
    switch (filterVal) {
      case "language":
        showLang(true);
        showLang(false);
        break;
      case "country":
        showCountry(true);
        showLang(false);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <header
        className="h-28 bg-sky-500  z-10 sticky top-0 flex
           justify-around items-center px-40 max-sm:px-3 max-sm:justify-between max-sm:h-12"
      >
        <h1 className="text-slate-100  rounded-sm px-1 py-">Logo</h1>
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
          {!openBar && <FaBars className=" text-slate-100 text-2xl" />}
        </button>

        <div
          className="sidebtn absolute right-0 top-12 transition duration-200 w-full
             bg-sky-400 hidden
         max-sm:flex flex-col justify-center items-center px-2  py-0 rounded-sm z-10"
          style={{ height: openBar ? "230px" : "0px", transition: "0.5s" }}
        >
          <p
            className="text-slate-800"
            style={{ display: openBar ? "block" : "none" }}
          >
            {" "}
            Filter by{" "}
          </p>
          <select
            onChange={handleFilter}
            className="border border-gray-50 rounded-sm px-4 py-1 w-44"
            style={{ display: openBar ? "block" : "none" }}
            id="filter"
          >
            <option>language</option>
            <option> country</option>
          </select>
          <div
            className="hidden max-sm:flex justify-center flex-col w-44 m-1 "
            style={{ display: openBar ? "block" : "none" }}
          >
            {lang && (
              <select className="px-2 py-2 w-22">
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            )}
            {ctry && (
              <select className="px-2 py-2 w-22">
                {countries.reverse().map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            )}
          </div>
          <a
            className="text-white cursor-pointer hover:text-sky-700 underline py-2"
            style={{ display: openBar ? "block" : "none" }}
          >
            {" "}
            Top Headlines
          </a>

          <input
            style={{ display: openBar ? "block" : "none" }}
            type="text"
            placeholder="search news"
            className=" rounded-sm px-1 w-44 outline-none py-1 border border-none m-2"
          />
          <input
            type="submit"
            className="px-1 py-1 rounded-sm w-44 font-bold  bg-sky-950 text-white border border-none"
            style={{ display: openBar ? "block" : "none" }}
          />

          <FaCaretUp
            style={{ display: openBar ? "block" : "none" }}
            className="absolute  top-56 text-center text-2xl text-sky-600"
            onClick={() => setOpenBar(!openBar)}
          />
        </div>

        <div
          className="left-side absolute left-0 h-32 w-9 
           border border-slate-700 top-96 flex flex-col justify-around items-center px-2 py-2 rounded-md -z-40"
        >
          <FaTwitter className="text-sky-600" />
          <FaFacebook className="text-sky-600" />
        </div>
      </header>
    </>
  );
};

export default Nav;
