import React, { useEffect, useState } from "react";
import {
  FaAtom,
  FaBookmark,
  FaClock,
  FaComment,
  FaComments,
  FaEllipsisV,
  FaFire,
  FaHeart,
  FaTag,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Post = ({
  id,
  posts,
  likes,
  firenumber,
  post,
  commentOpen,
  postedAt,
}) => {
  const [fireNumber, setFireNumber] = useState(firenumber);
  const [numberOfLikes, setLikes] = useState(likes);

  // like post func
  const likePost = (id) => {
    const getPost = posts.find((post) => post.id == id);
    let userLiked = getPost.likers.find((user) => user == "Ayomide");
    return userLiked
      ? (() => {
          let userIndex = getPost.likers.indexOf("Ayomide");
          getPost.likers.splice(userIndex, 1);
          getPost.isLiked = false;
          getPost.likes -= 1;
          setLikes(getPost.likes);
        })()
      : (() => {
          getPost.likers.push("Ayomide");
          getPost.likes += 1;
          getPost.isLiked = true;
          console.log(getPost.likers, getPost.likes);
          setLikes(getPost.likes);
        })();
  };

  const firePost = (id) => {
    const getPost = posts.find((post) => post.id == id);
    let userFired = getPost.fireMakers.find((user) => user == "Ayomide");

    return userFired
      ? (() => {
          let userIndex = getPost.fireMakers.indexOf("Ayomide");
          getPost.fireMakers.splice(userIndex, 1);
          getPost.isLiked = false;
          getPost.fire -= 1;
          setFireNumber(getPost.fire);
        })()
      : (() => {
          getPost.fireMakers.push("Ayomide");
          getPost.fire += 1;
          getPost.isLiked = true;
          setFireNumber(getPost.fire);
        })();
  };
  const [openComment, setOpenComment] = useState(commentOpen);
  const [time, setTime] = useState("");
  const handleCommentSection = () => {
    setOpenComment(true);
  };
  const handleTime = (time) => {
    let timeDifference = Date.now() - time;
    let hour = Math.ceil(timeDifference / (1000 * 60 * 60));
    if (hour > 24 && hour >= 1) {
      let response = `${Math.ceil(hour / 24 - 1)}d`;
      setTime(response);
    } else if (hour > 1) {
      let response = `${Math.ceil(hour) - 1}h`;
      setTime(response);
    } else {
      let response = `${new Date().getMinutes()}m`;
      setTime(response);
    }
  };
  setInterval(() => handleTime(postedAt), 1000);
  return (
    <>
      <div className="flex flex-center flex-col   h-auto  px-2 rounded-sm  max-sm:w-full">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="w-10 h-10 rounded-full border border-gray-500 py-1 px-1 flex justify-start items-center">
              <img width="40px" height="40px" className="" />
            </div>
            <p className="text-slate-900 rounded-xl text-sm  px-1">
              {"User Name"}
            </p>
            <FaAtom className="text-sm text-sky-800" />
            <p className="text-gray-400 text-sm m-0.5">{"@username"}</p>
            <p className=" m-2  text-gray-500 flex justify-center items-center text-sm">
              {" "}
              <FaClock className="inline text-sky-500 px-1" />
              {time}{" "}
            </p>
          </div>

          <FaEllipsisV className="text-slate-400 text-sm " />
        </div>

        {/* //post body */}
        <div className="flex px-1  h-auto">
          <Link to={`/post/${id}`}>
            <p className="text-slate-900 text-sm text-justify ">
              {post}
            </p>
          </Link>
        </div>

        {!openComment && (
          <div className="flex px-2 py-1 justify-between items-center">
            <div className="flex justify-start text-gray-600 items-center">
              <FaComments className="text-sky-400 text-sm" />

              <p className="text-sm  text-slate-900 "> {12}</p>
            </div>
            <div
              onClick={() => likePost(id)}
              className="flex text-red-600 justify-start items-center  hover:bg-slate-200 px-1 py-1 rounded-full"
            >
              <div className="flex items-center justify-start">
                {" "}
                <FaHeart className="text-sm " />
                <p className="text-sm  text-slate-900  ">
                  {" "}
                  {numberOfLikes}
                </p>
              </div>
            </div>
            <div
              onClick={() => firePost(id)}
              className="flex text-yellow-600 justify-start items-center hover:bg-slate-200 px-1 py-1 rounded-full"
            >
              <div className="flex justify-start text-gray-600 items-center">
                <FaFire className="text-yellow-600 text-sm" />
                <p className="text-sm text-slate-900 ">
                  {" "}
                  {fireNumber}
                </p>
              </div>
            </div>
            <div className="flex text-slate-400 justify-start items-center hover:bg-slate-200 px-1 py-1 rounded-full">
              {" "}
              <FaTag className="text-sm" />
            </div>
          </div>
        )}

        {openComment && (
          <div className="grid h-auto gap-1 grid-cols-1 max-sm:grid-cols-1  max-sm:h-auto px-1 ">
            <textarea
              name=""
              className="h-24 max-sm:h-14 border-2 border-gray-300 rounded-md "
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button
              onClick={() => setOpenComment(!openComment)}
              className="bg-sky-500 w-18 py-2 rounded-md font-extrabold px-2  text-white max-sm:text-sm"
            >
              {" "}
              comment
            </button>
          </div>
        )}
      </div>
      {openComment && (
        <div className="comments w-full flex flex-col px-2 py-2 h-auto  border-b-2 border-slate-400 ">
          {[1, 2, 3, 5, 6].map((comment) => {
            return (
              <div
                className="flex flex-col justify-between bg-slate-200 px-1 py-2 m-0.2"
                key={comment}
              >
                <div className="relative flex justify-start items-center">
                  <img width={"10px"} height={"10px"} alt="image" />
                  <p className="text-slate-900 px-1 max-sm:text-sm ">
                    {"Username"}
                  </p>
                </div>
                <p className="text-slate-900 max-sm:text-sm ">
                  {"The reponse from the mr ABsc "}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Post;
