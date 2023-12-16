import React, { useState } from "react";
import "./Nav.css";
import {
  FaBars,
  FaCaretUp,
  FaTwitter,
  FaFacebook,
  FaTimes,
  FaNewspaper,
  FaDollarSign,
  FaQuestionCircle,
  FaSearchDollar,
  FaSignInAlt,
  FaRegistered,
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
        className="h-16 bg-sky-700  z-10 sticky top-0 flex
           justify-between items-center px-4 max-sm:px-3 max-sm:justify-between max-sm:h-12"
      >
        <h1 className="text-slate-100  rounded-sm px-1 py-">Logo</h1>

        {/* <div className="flex justify-between w-96 px-5 "> */}
        <a
          href="#"
          className="text-white  inline cursor-pointer  transition duration-500 font-bold px-2 py-1 hover:border border-white hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          News headlines <FaNewspaper className="inline" />
        </a>

        <a className="text-white    inline cursor-pointer transition duration-500  font-bold px-2 py-1 hover:border border-white hover:bg-sky-400 hover:text-white max-sm:hidden">
          Earn with us <FaDollarSign className="inline" />
        </a>
        <a className="text-white   cursor-pointer  transition duration-500 font-bold px-2 py-1 hover:border border-white hover:bg-sky-400 hover:text-white max-sm:hidden">
          FAQs <FaQuestionCircle className="inline" />
        </a>
        {/* </div> */}

        <div className="flex w-auto">
          <button className="bg-white max-sm:hidden text-sky-400 px-2 border font-bold hover:bg-sky-300 hover:text-white   border-sky-400">
            sign in
          </button>
          <button className="bg-sky-400 max-sm:hidden hover:text-white hover:bg-sky-500 text-white px-2 border font-bold   border-sky-400">
            sign up
          </button>
        </div>

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
          className="sidebtn absolute right-0 top-12 transition  w-full
             bg-sky-400 hidden
         max-sm:flex flex-col max-sm:justify-center items-center px-2  py-0 rounded-sm z-10"
          style={{ height: openBar ? "220px" : "0px" }}
        >
          {/*          
          <div
            className="hidden max-sm:flex justify-center  w-44 m-1 "
            style={{ display: openBar ? "block" : "none" }}
          ></div> */}

          {/* <input
            style={{ display: openBar ? "block" : "none" }}
            type="text"
            placeholder="search news"
            className=" py-2 px-2 w-60 outline-none  border border-none m-2"
          />
          <input
            type="submit"
            className="px-2 py-2  w-60 font-bold  hover:bg-sky-800 bg-sky-950 text-white border border-none"
            style={{ display: openBar ? "block" : "none" }}
          /> */}

          <div className="flex w-auto flex-col m-1">
            {openBar && (
              <button className="bg-sky-300 hidden  max-sm:block py-2  w-60 text-white px-2 border border-white font-bold hover:bg-sky-300 hover:text-white">
                sign in <FaSignInAlt className="inline text-white" />
              </button>
            )}
            {openBar && (
              <button className="bg-sky-400 hidden max-sm:block py-2 w-60 hover:text-white hover:bg-sky-500 text-white px-2 border font-bold">
                sign up <FaRegistered className="inline text-white" />
              </button>
            )}
          </div>
          {openBar && (
            <button className="bg-sky-300 hidden  max-sm:block py-2  w-60 text-white px-2 border border-white font-bold hover:bg-sky-300 hover:text-white">
              Earn with us <FaDollarSign className="inline text-white" />
            </button>
          )}

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
