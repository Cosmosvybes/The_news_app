import React, { useState } from "react";
import "./Nav.css";
import {
  FaBars,
  FaCaretUp,
  FaTwitter,
  FaFacebook,
  FaTimes,
} from "react-icons/fa";
import News from "./News";
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
  const filterByLang = () => {
    const arg = document.getElementById("languages");
    let argValue = arg.options[arg.selectedIndex].value;
    console.log(argValue);
    const category = "general";
    const apiKey = "67a01c9e936b42440e55e5deedd2b567";
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${argValue}&max=10&apikey=${apiKey}`;
  };
  const filterByCountry = () => {
    const selector = document.getElementById("countries");
    let argValue = selector.options[selector.selectedIndex].value;
    console.log(argValue);
    const category = "general";
    const apiKey = "67a01c9e936b42440e55e5deedd2b567";
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${argValue}&max=10&apikey=${apiKey}`;
  };

  const [showFeedBack, setSHowFeedBack] = useState(false);

  return (
    <>
      <header
        className="h-12 bg-sky-700  z-10 sticky top-0 flex
           justify-between items-center px-40 max-sm:px-3 max-sm:justify-between max-sm:h-12"
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
         max-sm:flex flex-col max-sm:justify-center items-center px-2  py-0 rounded-sm z-10"
          style={{ height: openBar ? "220px" : "0px", transition: "0.5s" }}
        >


          <input
            style={{ display: openBar ? "block" : "none" }}
            type="text"
            placeholder="search news"
            className=" rounded-md px-2 w-48 outline-none py-1 border border-none m-2"
          />
          <input
            type="submit"
            className="px-2 py-1 rounded-md w-48 font-bold  hover:bg-sky-800 bg-sky-950 text-white border border-none"
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
            className="flex h-28 transition items-center max-sm:w-36 justify-center duration-500 bg-gray-100 rounded-md absolute left-10  top-72"
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
      <News />
    </>
  );
};

export default Nav;
