import { is } from "express/lib/request";
import React, { useState } from "react";
import {
  FaAtom,
  FaComment,
  FaEllipsisV,
  FaFire,
  FaHeart,
  FaServer,
} from "react-icons/fa";

const Post = ({ isLiked }) => {
  let [likes, setLikes] = useState(23);
  const [fire, setFires] = useState(2);

//   const likePost = () => {
//     isLiked = !isLiked;
//     if (isLiked) {
//       console.log("post liked");
//     } else {
//       console.log("unliked");
//     }
//   };

  return (
    <>
      <div className="flex flex-start flex-col border border-gray-500 h-auto py-1 rounded-sm  max-sm:w-full">
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="w-10 h-10 rounded-full px-1 flex justify-start items-center">
              <img width="40px" height="40px" />
            </div>
            <p className="text-slate-900 text-sm font-bold px-1">
              {"User Name"}
            </p>
            <FaAtom className="text-sm text-sky-800" />
            <p className="text-gray-400 text-sm ">{"@username"}</p>
          </div>

          <FaEllipsisV className="text-sky-400 text-sm" />
        </div>

        {/* //post body */}
        <div className="flex px-10  h-auto">
          <p className="text-slate-900 text-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            reprehenderit sequi eos assumenda nemo est veritatis commodi
            doloribus dolores sint ratione, nostrum quidem, nihil blanditiis,
            iste accusamus totam minus recusandae.
          </p>
        </div>

        <div className="flex px-10 justify-around items-center">
          <div className="flex justify-start text-gray-600 items-center">
            <FaComment className="text-gray-600" />
            {"12"}
          </div>
          <div className="flex text-sky-600 justify-start items-center">
            <FaHeart onClick={likePost} />
            {likes}
          </div>
          <div className="flex text-yellow-500 justify-start items-center">
            {" "}
            <FaFire />
            {fire}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
