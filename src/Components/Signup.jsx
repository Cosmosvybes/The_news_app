import React from "react";
import Footer from "./Footer";

const Signup = () => {
  return (
    <>
      <div className="flex justify-center items-center h-auto px-44   max-sm:px-0 rounded-md bg-sky-100">
        <div className="flex h-auto  flex-col justify-between w-full px-24 max-sm:px-0 ">
          <div className="flex rounded-md justify-center">
            <div className="flex justify-start bg-white rounded-md ">
              {" "}
              <h1 className="text-red-600  inline rounded-sm px-1  font-extrabold">
                Sign <span className="text-sky-500 inline">Up</span>
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center py-10 ">
            <form className="grid grid-cols-1 gap-1 max-sm:grid-cols-1 max-sm:gap-2 ">
              {/* <h1 className="text-center text-xl">Create account</h1> */}
              <label className="block">
                <input
                  className=" px-2 max-sm:py-3 outline outline-gray-200 w-72 rounded-md py-5"
                  placeholder="Firstname"
                  type="text"
                />
              </label>
              <label>
                <input
                  className="w-72 max-sm:py-3  outline outline-gray-200 px-2 py-5 rounded-md "
                  placeholder="Lastname"
                  type="text"
                />
              </label>
              <label>
                <input
                  className="w-72 px-2 max-sm:py-3  outline outline-gray-200  py-5 rounded-md "
                  type="email"
                  placeholder="Email"
                />
              </label>
              <label>
                <input
                  className="w-72 px-2 py-5  outline outline-gray-200  max-sm:py-3 rounded-md"
                  type="password"
                  placeholder="Password"
                />
              </label>
              <div className="flex  w-full justify-center max-sm:justify-between">
                <label className="flex justify-center items-center">
                  <input
                    className=" px-2 py-2  rounded-md"
                    type="radio"
                    name="gender"
                    placeholder="Password"
                  />
                  <p className="px-1 text-slate-900"> male</p>
                </label>
              </div>
              <div className="flex w-72 justify-center max-sm:justify-between">
                <label className="flex justify-center items-center">
                  <input
                    className=" px-2 py-2  rounded-md"
                    type="radio"
                    name="gender"
                    placeholder="Password"
                  />
                  <p className="px-1 text-slate-900"> female</p>
                </label>
              </div>
              <input
                type="submit"
                className="border border-sky-500 w-full py-4 rounded-md hover:bg-sky-600 max-sm:py-2 text-white font-bold bg-sky-400"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
