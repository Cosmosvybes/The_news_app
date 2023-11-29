import React, { useState } from "react";
import "./Nav.css";
import {
  FaBars,
  FaCaretUp,
  FaTwitter,
  FaFacebook,
  FaTimes,
} from "react-icons/fa";
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
  const [languages, setLanguage] = useState([
    "gb",
    "pk",
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
    "ie",
    "eg",
    "ph",
    "se",
    "tw",
  ]);
  const [lang, showLang] = useState(false);
  const [ctry, showCountry] = useState(false);

  const handleFilter = () => {
    const filterElement = document.getElementById("filter");
    const filterVal = filterElement.options[filterElement.selectedIndex].value;
    switch (filterVal) {
      case "language":
        showLang(true);
        showCountry(false);
        break;
      case "country":
        showCountry(true);
        showLang(false);
        break;
      default:
        return;
    }
  };
  const [showFeedBack, setSHowFeedBack] = useState(false);

  return (
    <>
      <header
        className="h-28 bg-sky-700  z-10 sticky top-0 flex
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
        <a
          className="text-white cursor-pointer hover:text-slate-200 underline py-2"
          style={{ display: openBar ? "block" : "none" }}
        >
          {" "}
          Top Headlines
        </a>

        <div
          className="sidebtn absolute right-0 top-12 transition duration-200 w-full
             bg-sky-400 hidden
         max-sm:flex flex-col max-sm:justify-start items-center px-2  py-0 rounded-sm z-10"
          style={{ height: openBar ? "220px" : "0px", transition: "0.5s" }}
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
            className="border border-gray-50 rounded-sm px-4 py-3 w-44"
            style={{ display: openBar ? "block" : "none" }}
            id="filter"
          >
            <option>language</option>
            <option>country</option>
          </select>
          <div
            className="hidden max-sm:flex justify-center  w-44 m-1 "
            style={{ display: openBar ? "block" : "none" }}
          >
            {lang && (
              <select className="px-2 py-3 w-22">
                {languages.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            )}
            {ctry && (
              <select className="px-2 py-3 w-22">
                {countries.reverse().map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            )}
          </div>

          <input
            style={{ display: openBar ? "block" : "none" }}
            type="text"
            placeholder="search news"
            className=" rounded-sm px-2 w-44 outline-none py-1 border border-none m-2"
          />
          <input
            type="submit"
            className="px-2 py-2 rounded-sm w-44 font-bold  bg-sky-950 text-white border border-none"
            style={{ display: openBar ? "block" : "none" }}
          />

          <FaCaretUp
            style={{ display: openBar ? "block" : "none" }}
            className="absolute  top-48 text-center text-4xl text-sky-700 shadow shadow-slate-200 z-10"
            onClick={() => setOpenBar(!openBar)}
          />
        </div>

        <div
          className="left-side absolute right-0 h-36 w-auto 
         top-44 flex justify-between items-center py-2 -z-40"
        >
          {!showFeedBack && (
            <button
              onClick={() => setSHowFeedBack(!showFeedBack)}
              className="bg-red-500 text-white font-bold px-2 py-1"
            >
              {" "}
              feedback
            </button>
          )}
          {/* <FaTwitter className="text-sky-700 text-xl m-5" />
          <FaFacebook className="text-sky-700 text-xl" /> */}
        </div>
        {showFeedBack && (
          <div
            className="flex h-28 transition items-center justify-center duration-500 bg-gray-100 rounded-md absolute left-10  top-72"
            style={{
              width: showFeedBack ? "300px" : "0px",
              transition: "0.9s",
            }}
          >
            <button className="px-1 py-1">😣</button>
            <button className="px-1 py-1">😍</button>
            <button className="px-1 py-1">😁</button>
            <button className="px-1 py-1">😡</button>

            <FaTimes
              onClick={() => setSHowFeedBack(!showFeedBack)}
              className="absolute top-4 bg-gray-600 rounded-lg text-white px-1 py-1 right-2"
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
