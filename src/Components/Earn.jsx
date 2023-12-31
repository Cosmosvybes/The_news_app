import {
  FaHeart,
  FaSignInAlt,
  FaUser,
  FaUserEdit,
  FaUserShield,
} from "react-icons/fa";
import Footer from "./Footer";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Earn = () => {
  useEffect(() => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  }, []);
  return (
    <>
      <div className="">
        <h1 className="text-sky-700 px-4 text-5xl font-bold max-sm:text-2xl block text-left">
          Earn with us
        </h1>
        <h2 className="text-sky-600 px-4 text-2xl py-1 font-bold  max-sm:text-sm block text-left">
          Monetize every words coming out of your head!
        </h2>
        <p className="px-4 text-gray-600 underline ">Follow this steps</p>

        <div className="flex px-5 justify-between items-center max-sm:flex-col h-72 max-sm:h-auto py-1 max-sm:px-3 rounded-2xl ">
          <div className="flex justify-start items-center flex-col px-2 w-72 border py-3 border-x-gray-100 h-auto max-sm:h-auto max-sm:w-full m-0.5 rounded-md bg-gray-100">
            <FaUser className="text-sky-500 text-4xl" />
            <h1 className="text-2xl text-sky-500 font-bold"> Sign up</h1>
            <p className="text-slate-900 max-sm:text-sm">
              {" "}
              Set up a new account
            </p>
          </div>
          <div className="flex justify-start items-center flex-col px-2 py-3 w-72 border border-x-gray-100 h-auto max-sm:h-auto max-sm:w-full m-0.5 rounded-md bg-gray-100">
            <FaSignInAlt className="text-4xl text-sky-500 font-bold" />
            <h1 className="text-2xl text-sky-500 font-bold"> Sign in</h1>
            <p className="text-slate-900 text-center max-sm:text-sm">
              {" "}
              Sign in to you account
            </p>
          </div>
          <div className="flex justify-start items-center flex-col py-3 px-2 w-72 border border-x-gray-100 h-auto max-sm:h-auto max-sm:w-full m-0.5 rounded-md bg-gray-100">
            <FaUserShield className="text-4xl text-sky-500 font-bold" />
            <h1 className="text-2xl text-sky-500 font-bold"> Join Premium</h1>
            <p className="text-slate-900 max-sm:text-sm text-center">
              {" "}
              Subscribe premium
            </p>
          </div>
          <div className="flex justify-start items-center flex-col py-3 px-2 w-72 border border-x-gray-100 h-auto max-sm:h-auto max-sm:w-full m-0.5 rounded-md bg-gray-100">
            <FaUserEdit className="text-4xl text-sky-500 font-bold" />
            <h1 className="text-2xl text-sky-500 font-bold"> Create</h1>
            <p className="text-slate-900 max-sm:text-sm text-center">
              {" "}
              Create engaging discussion.
            </p>
          </div>
          <div className="flex justify-start items-center flex-col py-3 px-2 w-72 border border-x-gray-100 h-auto max-sm:h-auto max-sm:w-full m-0.5 rounded-md bg-gray-100">
            <FaHeart className="text-4xl text-sky-500 font-bold" />
            <h1 className="text-2xl text-sky-500 font-bold"> Get 50 Likes</h1>
            <p className="text-slate-900 text-center max-sm:text-sm">
              {" "}
              Recieve up 50 likes on a post.
            </p>
          </div>
        </div>
      </div>

      <div className="flex bg-sky-300 h-72  justify-center items-center flex-col">
        <h1 className="text-4xl text-slate-800 font-extrabold max-sm:text-2xl">
          {" "}
          What are you waiting for ?
        </h1>
        <p className="text-2xl  text-center text-slate-800 max-sm:text-sm">
          {" "}
          Start your earning journey with us now.
        </p>
        <Link className=" bg-sky-600 text-white font-extrabold hover:bg-sky-700 w-auto rounded-md px-2 py-2 m-1 text-center">
          Start earning now
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Earn;
