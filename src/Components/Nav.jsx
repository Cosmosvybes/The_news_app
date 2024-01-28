import "./Nav.css";
import { useState, useRef } from "react";
import image from "../assets/cosmos.png";
import {
  FaBars,
  FaCaretUp,
  FaHome,
  FaImages,
  FaLongArrowAltLeft,
  FaPencilAlt,
  FaBell,
  FaSignOutAlt,
  FaUserCircle,
  FaPodcast,
  FaClosedCaptioning,
  FaGreaterThan,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaNewspaper,
  FaHackerNews,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Nav = ({ allPost, setAllPost }) => {
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

  const animate = () => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  };

  const [imageUpload, setImageUpload] = useState(undefined);
  //image upload
  const handleUpload = async (e) => {
    // await imageUrl("#image");// use the image url package here to getb the image url
    setImageUpload(e.target.files[0].name);
  };

  //create new post or upload new post
  const [post, setPost] = useState("");
  const [openTab, setOpenTab] = useState(false);
  const handlePosting = (e) => {
    let objectData = {
      id: Date.now(),
      username: "Username",
      isLiked: false,
      likers: [],
      fireMakers: [],
      postedAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      post,
      likes: 0,
      fire: 0,
    };

    setAllPost([...allPost, objectData]);

    // const formData = new FormData();
    // formData.append("image", imageUpload);
  };

  return (
    <>
      <header
        className="h-14 bg-gray-200 px-3  z-10 sticky top-0 flex
           justify-between items-center  max-sm:px-3 max-sm:justify-between max-sm:h-14"
      >
        <div className="flex justify-start bg-white rounded-md  shadow shadow-gray-300 z-10 border border-gray-300">
          {" "}
          <h1 className="text-red-600  inline rounded-sm px-2 text-center py-1  font-extrabold">
            i <span className="text-sky-500">-Blog</span>
          </h1>
        </div>

        {/* <Link
          to="/headlines"
          className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          HEADLINES
        </Link>
        <Link
          to="/"
          className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          SPORTS
        </Link>
        <Link
          to="/earn"
          className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          EARN
        </Link>
        <Link
          to="/discussion"
          className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden"
        >
          FEED
        </Link> */}
        {/* <a className="text-white  rounded-sm px-1 py-1  hover:bg-sky-400 hover:text-white max-sm:hidden">
          Opinions/Discussion
        </a> */}
        <div className="flex justify-between">
          <Link
            to="/signin"
            className="text-white border font-bold border-white rounded-sm cursor-pointer px-1 py-0.5  shadow shadow-slate-400  m-0.5 hover:bg-sky-400 hover:text-white max-sm:hidden"
          >
            Sign in
          </Link>
          {/* <a className="text-white cursor-pointer px-1 py-1  hover:bg-sky-900 hover:text-white max-sm:hidden">
            Sign in <FaSignInAlt className="inline" />
          </a> */}
          <Link
            to="/signup"
            className="text-white cursor-pointer px-1 border border-white py-0.5 rounded-sm font-bold bg-sky-900 shadow-slate-400  m-0.5 hover:bg-sky-400 hover:text-white max-sm:hidden"
          >
            Sign up
          </Link>
        </div>
        <button
          className="hidden max-sm:inline"
          onClick={() => setOpenBar(!openBar)}
        >
          {!openBar && <FaBars className=" text-slate-900 text-2xl" />}
        </button>

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
            className="absolute  top-44  text-right text-4xl text-sky-500 shadow shadow-slate-400 z-10"
            onClick={() => setOpenBar(!openBar)}
          />
        </div>
        {openTab ? (
          <div className=" transition-opacity duration-600 fade-in  absolute left-0  border w-48 max-sm:w-12 max-sm:px-0 bg-gray-100 flex flex-col justify-start gap-0.5 border-gray-300  top-14 h-screen px-3 py-6">
            <div className="flex justify-center items-center  hover:bg-gray-300 hover:text-slate-900 rounded-md px-3 py-2 ">
              <Link to="/">
                <FaHome className="text-2xl  text-black " />
              </Link>

              <Link
                to="/link"
                className=" w-full font-bold  text-black  px-2 py-2 max-sm:hidden   "
              >
                Blog Feed
              </Link>
            </div>
            <div className="flex justify-center items-center  hover:bg-gray-300 hover:text-slate-900 rounded-md px-3 py-2 ">
              <Link to="/headlines">
                {" "}
                <FaHackerNews className="text-2xl  text-black " />
              </Link>
              <Link
                to="/headlines"
                className=" w-full font-bold  text-black  px-2 py-2 max-sm:hidden   "
              >
                Headlines
              </Link>
            </div>
            <div className="flex justify-center  items-center hover:bg-gray-300 hover:text-slate-900 rounded-md px-3 py-2">
              <Link to="/">
                {" "}
                <FaBell className="text-2xl text-black " />
              </Link>
              <Link
                to="/link"
                className=" w-full font-bold  text-black  px-2 py-2  max-sm:hidden  "
              >
                Notification
              </Link>
            </div>
            <div className="flex justify-center  items-center hover:bg-gray-300 hover:text-slate-900 rounded-md px-3 py-2">
              <Link to="/">
                {" "}
                <FaPodcast className="text-2xl text-black " />
              </Link>
              <Link
                to="/link"
                className=" w-full font-bold  text-black  px-2 py-2  max-sm:hidden  "
              >
                My Posts
              </Link>
            </div>
            <div className="flex justify-center items-center  hover:bg-gray-300 hover:text-slate-900 rounded-md px-3 py-2">
              <Link to="/profile">
                {" "}
                <FaUserCircle className="text-2xl text-black " />
              </Link>
              <Link
                to="/link"
                className=" w-full font-bold  text-black  px-2 py-2  max-sm:hidden "
              >
                Profile
              </Link>
            </div>

            <div className="flex justify-center items-center    hover:bg-gray-300 hover:text-slate-900 rounded-md px-3 py-2">
              <Link to="/">
                {" "}
                <FaSignOutAlt className="text-2xl " />
              </Link>
              <Link
                to="/link"
                className=" w-full  px-2 py-2 font-bold  max-sm:hidden "
              >
                Log out
              </Link>
            </div>
            <div className="flex justify-center items-center    hover:bg-gray-300 hover:text-slate-900 rounded-md px-3 py-2">
              <FaAngleDoubleLeft
                className=" text-xl text-gray-500"
                onClick={() => {
                  setOpenTab(!openTab);
                }}
              />
            </div>
          </div>
        ) : (
          <div className=" absolute transition-opacity duration-700 ease-out z-10  left-1 top-72 flex justify-center items-center bg-gray-200 rounded-lg     hover:bg-gray-300 hover:text-slate-900  px-3 py-2">
            <FaAngleDoubleRight
              className="text-xl text-slate-900 "
              onClick={() => {
                setOpenTab(!openTab);
              }}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Nav;
