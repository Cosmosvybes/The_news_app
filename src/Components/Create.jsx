import { useState } from "react";
import { FaImage, FaLocationArrow, FaSearchLocation } from "react-icons/fa";

const Create = () => {
  const [post, setPost] = useState("");

  const handlePosting = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(post));
  };

  return (
    <>
      <div className="flex h-auto max-sm:h-screen justify-center flex-col items-center px-52 max-sm:px-2 max-sm:py-12">
        <div className="flex flex-col w-full  h-full px-1 py-2">
          <textarea
            type="text"
            placeholder="What's on your mind ?"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className=" h-96 text-2xl max-sm:h-full w-full  rounded-md  outline-gray-200 px-2 overscroll-y-contain overflow-y-auto"
          ></textarea>
          <div className="flex justify-end gap-2  items-center py-1 px-1">
            <input type="file" id="picture" className="hidden" />
            <label htmlFor="picture">
              <FaImage className="text-2xl text-green-500 " />
            </label>
            <button
              className="border border-white  rounded-lg text-white bg-green-500 px-5 "
              onClick={handlePosting}
            >
              Post
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col h-auto w-full border border-green-400  px-1  py-2">
          <pre className="whitespace-pre-wrap">{post}</pre>
        </div> */}
      </div>
    </>
  );
};

export default Create;
