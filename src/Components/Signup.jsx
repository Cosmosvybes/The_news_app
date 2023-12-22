import React, { useEffect } from "react";
import Footer from "./Footer";
import gsap from "gsap";
const Signup = () => {
  useEffect(() => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  }, []);
  const handleSignup = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex justify-center items-center h-full max-sm:h-auto px-44 py-2  max-sm:px-0 max-sm:py-2  bg-sky-100">
        <div className="flex h-auto  flex-col justify-between   px-24 max-sm:px-0  ">
          <div className="h-auto flex justify-center items-center flex-col">
            <h1 className="text-red-600  inline rounded-sm px-1  font-extrabold">
              Sign <span className="text-sky-500 inline">up</span>
            </h1>
            <form
              action="POST"
              className="grid grid-cols-1 max-sm:grid-cols-1 gap-1"
            >
              <label className="flex flex-col flex-start">
                <b className="text-left max-sm:text-left text-gray-500">
                  Firstname
                </b>
                <input
                  className="w-96  max-sm:w-72 px-2 py-5  outline border border-gray-400 outline-none  max-sm:py-3 "
                  type="text"
                  placeholder="Email"
                />
              </label>
              <label className="flex flex-col flex-start">
                <b className="text-right max-sm:text-left text-gray-500">
                  Lastname
                </b>
                <input
                  className="w-96  max-sm:w-72 px-2 py-5  outline border border-gray-400 outline-none  max-sm:py-3 "
                  type="text"
                  placeholder="Lastname"
                />
              </label>
              <label className="flex flex-col flex-start">
                <b className="text-left max-sm:text-left text-gray-500">
                  Email
                </b>
                <input
                  className="w-96  max-sm:w-72 px-2 py-5  outline border border-gray-400 outline-none  max-sm:py-3 "
                  type="email"
                  placeholder="Email"
                />
              </label>
              <label className="flex flex-col flex-start">
                <b className="text-right max-sm:text-left text-gray-500">
                  Password
                </b>
                <input
                  className="w-96  max-sm:w-72 px-2 py-5  outline border border-gray-400 outline-none  max-sm:py-3 "
                  type="password"
                  placeholder="Password"
                />
              </label>

              <b className="text-center max-sm:text-left text-gray-500  hidden max-sm:block">
                Gender
              </b>
              <div className="flex justify-start items-center ">
                <label>
                  <b className="text-right text-gray-500">Male </b>
                  <input type="radio" name="gender" />
                </label>
                <label>
                  <b className="text-right text-gray-500">Female </b>
                  <input type="radio" name="gender" />
                </label>
              </div>
              {/* <label> */}
              <b className="text-left hidden max-sm:text-left max-sm:block text-gray-500 ">
                Nationality
              </b>
              {
                <select className="py-3 max-sm:py-2 text-gray-500">
                  <option>Nigeria</option>
                </select>
              }
              <input
                type="submit"
                value="register"
                className="py-3 max-sm:py-3 bg-sky-400 text-white w-full"
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
