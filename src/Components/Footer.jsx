import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInbox,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex text-black text-xs h-60 max-sm:py-2 bg-gray-100 items-center max-sm:items-start justify-between  max-sm:px-6 py-2 max-sm:flex-col max-sm:h-auto">
        <div className="flex m-1  max-sm:w-auto flex-col">
          <h1 className="underline text-black font-bold max-sm:text-sm">
            Quick Links{" "}
          </h1>
          <button className="text-left  text-black ">Help center</button>
          <button className="text-left  text-black ">How to earn</button>
          <button className="text-left  text-black ">
            Become an Affiliate
          </button>
        </div>

        <div className="flex justify-start flex-col m-1  max-sm:w-auto max-sm:justify-start max-sm:text-xs ">
          <h1 className="underline text-black max-sm:text-sm font-bold ">
            Follow us{" "}
          </h1>
          <button className="text-left  text-black max-sm:text-sm  ">
            <FaInstagram className="inline" /> Instagram
          </button>
          <button className="text-left  text-black max-sm:text-sm ">
            <FaTwitter className="inline" /> X/Twitter
          </button>
          <button className="text-left  text-black max-sm:text-sm ">
            <FaFacebook className="inline" /> FaceBook
          </button>
          <button className="text-left  text-black max-sm:text-sm ">
            <FaWhatsapp className="inline" /> Whatsapp
          </button>
        </div>

        <div className="flex flex-col  text-gray-200 max-sm:w-auto">
          <h1 className="underline text-black max-sm:text-sm font-bold ">
            Contact us{" "}
          </h1>
          <button className="text-left  text-black max-sm:text-sm ">
            <FaPhone className="inline" /> +234(8140242752)
          </button>
          <button className="text-left  text-black max-sm:text-sm ">
            <FaPhone className="inline" /> +234(9075848475)
          </button>
          <button className="text-left  text-black max-sm:text-sm ">
            <FaEnvelope className="inline" /> support@thenews.com
          </button>
        </div>
      </div>
      <footer className="text-slate-800max-sm:text-xs max-sm:px-5 ">
        Afri-talk &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </>
  );
};

export default Footer;
