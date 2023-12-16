import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex h-auto bg-slate-950 justify-around px-2 py-2 max-sm:flex-col max-sm:h-auto">
        <div className="flex m-1  max-sm:w-auto flex-col">
          <h1 className="underline text-white">Quick Links </h1>
          <button className="text-left  text-white">Help center</button>
          <button className="text-left  text-white">How to earn</button>
          <button className="text-left  text-white">Become an Affiliate</button>
        </div>

        <div className="flex justify-start flex-col m-1  max-sm:w-auto max-sm:justify-start ">
          <h1 className="underline text-white">Follow us </h1>
          <button className="text-left  text-white">
            <FaInstagram className="inline" /> Instagram
          </button>
          <button className="text-left  text-white">
            <FaTwitter className="inline" /> X/Twitter
          </button>
          <button className="text-left  text-white">
            <FaFacebook className="inline" /> FaceBook
          </button>
        </div>

        <div className="flex border border-white  max-sm:w-auto"></div>
      </div>
      <footer>The news &copy; {new Date().getFullYear()}</footer>
    </>
  );
};

export default Footer;
