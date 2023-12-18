import React from "react";
import Footer from "./Footer";
import Post from "./Post";
import { FaPlus } from "react-icons/fa";

const Discussion = () => {
  return (
    <>
      <div className=" h-auto relative py-1">
        <h1 className="text-sky-700 text-4xl max-sm:text-2xl font-bold">
          {" "}
          Discussion and Opinions.{" "}
        </h1>

        <div className="grid grid-cols-3 gap-1 max-sm:grid-cols-1">
          {[1, 2, 3, 4, 5, 6].map((post) => (
            <div className="">
              <Post isLiked={false} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Discussion;
