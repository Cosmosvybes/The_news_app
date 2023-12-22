import React, { useEffect } from "react";
import Footer from "./Footer";
import gsap from "gsap";
const Signin = () => {
  const handleSignin = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-96 px-44   max-sm:px-0 rounded-md bg-sky-100">
        <div className="flex h-auto  flex-col justify-between w-full px-24 max-sm:px-0 ">
          <div className="flex rounded-md justify-center">
            <div className="flex justify-start bg-white rounded-md "> </div>
          </div>

          <div className="flex justify-center items-center py-3 flex-col ">
            <h1 className="text-red-600  inline rounded-sm px-1  font-extrabold">
              Sign <span className="text-sky-500 inline">in</span>
            </h1>
            <form
              className="grid grid-cols-1 gap-1 max-sm:grid-cols-1 max-sm:gap-2 "
              onClick={handleSignin}
            >
              {/* <h1 className="text-center text-xl">Create account</h1> */}
              <label className="flex flex-col flex-start">
                <b>Email</b>
                <input
                  className="w-72 px-2 py-5  outline outline-gray-200  max-sm:py-3 rounded-md"
                  type="text"
                  placeholder="Email"
                />
              </label>
              <label className="flex flex-col flex-start">
                <b>Password</b>
                <input
                  className="w-72 px-2 py-5  outline outline-gray-200  max-sm:py-3 rounded-md"
                  type="password"
                  placeholder="Password"
                />
              </label>

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

export default Signin;
