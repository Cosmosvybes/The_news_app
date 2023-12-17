import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex h-auto bg-slate-950 justify-around px-2 py-2 max-sm:flex-col max-sm:h-auto">
        <div className="flex m-1  max-sm:w-auto flex-col">
          <h1 className="underline text-white font-bold">Quick Links </h1>
          <button className="text-left  text-white font-bold">
            Help center
          </button>
          <button className="text-left  text-white font-bold">
            How to earn
          </button>
          <button className="text-left  text-white font-bold">
            Become an Affiliate
          </button>
        </div>

        <div className="flex justify-start flex-col m-1  max-sm:w-auto max-sm:justify-start ">
          <h1 className="underline text-white font-bold">Follow us </h1>
          <button className="text-left  text-white font-bold">
            <FaInstagram className="inline" /> Instagram
          </button>
          <button className="text-left  text-white font-bold">
            <FaTwitter className="inline" /> X/Twitter
          </button>
          <button className="text-left  text-white font-bold">
            <FaFacebook className="inline" /> FaceBook
          </button>
          <button className="text-left  text-white font-bold">
            <FaWhatsapp className="inline" /> Whatsapp
          </button>
        </div>

        <div className="flex flex-col  max-sm:w-auto">
          <h1 className="underline text-white font-bold">Contact us </h1>
          <button className="text-left  text-white font-bold">
            +234(8140242752)
          </button>
          <button className="text-left  text-white font-bold">
            +234(9075848475)
          </button>
          <button className="text-left  text-white font-bold">
            support@thenews.com
          </button>
        </div>
      </div>
      <footer className="text-slate-800 px-2 font-bold">
        The news &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
