import { useState } from "react";
import { FaImage, FaLocationArrow, FaSearchLocation } from "react-icons/fa";

const Create = () => {
  const [post, setPost] = useState("");

  const handlePosting = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(post));
  };

  const handleImageUpload = (e) => {
    let imageFile = e.target.files[0];
    let imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
    const formData = new FormData();
    formData.append("image", imageFile);
    console.log(formData.get("image"));
  };
  const [image, setImage] = useState("");
  return (
    <>
      <div className="flex justify-start px-60 py-2 max-sm:px-2">
        {image && <img src={image} className="w-60 h-60 rounded-md max-sm:w-full max-sm:h-auto"  />}
      </div>
      <div className="flex justify-end gap-1 items-center py-1 px-1 max-sm:py-10">
            <input
              type="file"
              id="picture"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label htmlFor="picture">
              <FaImage className="text-2xl w-10 text-green-500 shadow-md shadow-gray-100 " />
            </label>
            <button
              className="border border-white  rounded-lg text-white w-24  shadow-md shadow-gray-400 font-bold bg-green-500 px-3 "
              onClick={handlePosting}
            >
              Post
            </button>
          </div>
      <div className="flex h-auto max-sm:h-screen justify-center flex-col items-center px-52 max-sm:px-2 max-sm:py-2">
        
        <div className="flex flex-col w-full  h-full px-1 py-1">
          <textarea
            type="text"
            placeholder="What's on your mind ?"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className=" h-96 text-2xl max-sm:h-full w-full  rounded-md  outline-gray-200 px-2 overscroll-y-contain overflow-y-auto"
          ></textarea>
        
        </div>
      </div>
    </>
  );
};

export default Create;
