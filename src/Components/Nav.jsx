import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Nav.css";
import image from "../assets/cosmos.png";
import { FaBars, FaCaretUp, FaTimes, FaPlus, FaImages } from "react-icons/fa";
import News from "./News";
import Footer from "./Footer";
import { Link } from "react-router-dom";
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

  const modal = useRef(null);
  const [showFeedBack, setSHowFeedBack] = useState(false);
  useEffect(() => {}, []);

  const animate = () => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  };

  const [imageUpload, setImageUpload] = useState(undefined);
  //image upload
  const handleUpload = async (e) => {
    await imageUrl("#image");// use the image url package here to getb the image url
    setImageUpload(e.target.files[0].name);
  };

  //create new post or upload new post
  const handlePosting = (e) => {
    const formData = new FormData();
    formData.append("image", imageUpload);

    console.log(
      formData.get("image") == "undefined"
        ? "uploading"
        : `uploading ${formData.get("image")}`
    );
  };

  return (
    <>
      <header
        className="h-24 bg-sky-500  z-10 sticky top-0 flex
           justify-between items-center px-2 max-sm:px-3 max-sm:justify-between max-sm:h-14"
      >
        <div className="flex justify-start bg-white rounded-md border-2 shadow shadow-gray-200 z-10 border-dotted border-red-600">
          {" "}
          <h1 className="text-red-600  inline rounded-sm px-2 text-center py-1  font-extrabold">
            Cap <span className="text-sky-500">Racks</span>
          </h1>
        </div>

        <Link
          to="/headlines"
          className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          Headlines News
        </Link>
        <Link
          to="/"
          className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          Sports
        </Link>
        <Link
          to="/earn"
          className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          Earn
        </Link>
        <Link
          to="/discussion"
          className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          Discussion and Opinions
        </Link>
        {/* <a className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden">
          Opinions/Discussion
        </a> */}
        <div className="flex">
          <Link
            to="/signin"
            className="text-white cursor-pointer px-1 py-1 bg-sky-900 shadow shadow-slate-400  hover:bg-sky-400 hover:text-white max-sm:hidden"
          >
            Sign in
          </Link>
          {/* <a className="text-white cursor-pointer px-1 py-1  hover:bg-sky-900 hover:text-white max-sm:hidden">
            Sign in <FaSignInAlt className="inline" />
          </a> */}
          <Link
            to="/signup"
            className="text-white cursor-pointer px-1 py-1 bg-sky-600 shadow shadow-slate-400  hover:bg-sky-400 hover:text-white max-sm:hidden"
          >
            Sign up
          </Link>
        </div>
        <button
          className="hidden max-sm:inline"
          onClick={() => setOpenBar(!openBar)}
        >
          {!openBar && <FaBars className=" text-slate-100 text-2xl" />}
        </button>
        <Link
          to="/headlines"
          className="text-white cursor-pointer hover:text-slate-200 underline py-2"
          style={{ display: openBar ? "block" : "none" }}
        >
          {" "}
          Top Headlines
        </Link>

        <div
          className="sidebtn absolute right-0 top-12 transition  duration-200 w-full
             hidden
         max-sm:flex bg-gray-100 flex-col max-sm:justify-center items-center px-2  py-0 rounded-sm z-10"
          style={{
            height: openBar ? "220px" : "0px",
          }}
        >
          <div
            className="hidden max-sm:flex justify-center  max-sm:flex-col w-full m-1 "
            style={{ display: openBar ? "block" : "none" }}
          >
            <Link
              onClick={() => setOpenBar(!openBar)}
              to="/discussion"
              className="block w-full hover:bg-sky-500  font-extrabold  hover:text-white px-3 py-2 text-sky-500"
            >
              OPINIONs
            </Link>
            <Link
              onClick={() => setOpenBar(!openBar)}
              to="/earn"
              className="block w-full hover:bg-sky-500  font-extrabold hover:text-white  text-sky-500 px-3 py-2"
            >
              EARN
            </Link>
            <Link
              onClick={() => setOpenBar(!openBar)}
              to="/signin"
              className="block w-full hover:bg-sky-500  font-extrabold hover:text-white   px-3 py-2 text-sky-500"
            >
              SIGN IN
            </Link>

            <Link
              onClick={() => setOpenBar(!openBar)}
              to="/signup"
              className="block w-full  hover:bg-green-600 hover:text-white   px-3 py-2 text-green-500 font-extrabold"
            >
              REGISTER
            </Link>
          </div>

          <FaCaretUp
            style={{ display: openBar ? "block" : "none" }}
            className="absolute  top-52 text-center text-4xl text-sky-500 shadow shadow-slate-400 z-10"
            onClick={() => setOpenBar(!openBar)}
          />
        </div>

        <div
          className="left-side absolute right-3 h-36 w-auto 
         flex justify-between items-center py-2 top-96 bottom-32"
        >
          {!showFeedBack && (
            <button
              onClick={() => {
                animate();
                return setSHowFeedBack(!showFeedBack);
              }}
              className=" rounded-md h-18 text-sky-500 font-extrabold px-2 py-1"
            >
              <FaPlus className="text-sky-500 text-6xl" />
            </button>
          )}
        </div>
        {showFeedBack && (
          <div
            ref={modal}
            id="modal"
            className="absolute  right-0 w-full py-2 px-2  flex justify-center  items-center top-14"
          >
            <div
              className="post-form rounded-md flex flex-col bg-gray-200 h-auto transition  max-md:left-40 max-md:w-96  justify-start px-2"
              style={{ transition: "0.9s" }}
              id="post-form"
            >
              <div className="grid grid-cols-1 h-auto py-3 ">
                <img
                  src={imageUpload}
                  className="h-auto rounded-md -z-1 border-2 border-sky-400"
                />
              </div>

              <div className="flex justify-start flex-col items-center">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10 "
                  className="h-44 w-full text-sky-600 outline outline-sky-600 bg-gray-200  rounded-md"
                  placeholder="Write your mind..."
                  style={{
                    height: "auto",
                    padding: "0.5rem 1rem",
                    marginBottom: "1rem",
                  }}
                ></textarea>
              </div>
              {/* <div className="flex justify-center m-1  ">
              
            </div> */}
              <div className=" w-full flex justify-between   max-sm:px-10 max-md:px-20  h-10  m-1">
                <input
                  type="file"
                  id="imageFile"
                  className="hidden"
                  accept="*/*"
                  onChange={handleUpload}
                />
                <label htmlFor="imageFile">
                  {" "}
                  <FaImages className="text-sky-500   text-4xl m-0.5" />{" "}
                </label>

                <button
                  onClick={handlePosting}
                  className="bg-sky-600  rounded-md border-2 w-36 py-2 px-1   border-white font-extrabold text-white"
                >
                  {" "}
                  Post it
                </button>
              </div>
              <FaTimes
                onClick={() => {
                  gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
                  setSHowFeedBack(!showFeedBack);
                  setImageUpload(undefined);
                }}
                className="absolute top-3   rounded-lg text-2xl text-sky-600 right-5 bg-gray-200"
              />
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
