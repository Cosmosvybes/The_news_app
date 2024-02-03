import { useState, useEffect } from "react";
import gsap from "gsap";
import { FaCloudUploadAlt, FaImage, FaUpload } from "react-icons/fa";

const Create = () => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState(null);

  const handleImageUpload = (e) => {
    let imageFile = e.target.files[0];
    let imageUrl = URL.createObjectURL(imageFile);
    let imageData = { url: imageUrl };
    setImage(imageData.url);
    setImageData(imageFile);
  };
  const handlePosting = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", imageData);
    formData.append("postBody", post);
    fetch("/api/create", {
      method: "POST",
      body: formData,
    })
      .then((result) => {
        if (!result.ok) throw new Error("operation failed, try again");
        return result.json();
      })
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
    console.log(post);
  };

  return (
    <>
      <div className="flex h-auto max-sm:h-screen justify-start flex-col  px-52 max-sm:px-1 max-sm:py-0">
        <div className="flex justify-end gap-1 items-center py-0 px-1 max-sm:py-2">
          <form encType="multipart/form-data" method="post">
            <input
              type="file"
              name="image"
              id="picture"
              className="hidden"
              onChange={handleImageUpload}
            />
          </form>

          <label htmlFor="picture">
            <FaCloudUploadAlt className="text-6xl w-10 text-green-500 z-10 " />
          </label>
          <button
            className="border-4 shadow-inner  hover:bg-green-600    border-gray-100  rounded-lg text-white w-24 font-extrabold     bg-green-500 px-3 py-1"
            onClick={handlePosting}
          >
            Post
          </button>
        </div>
        {/* <div className="flex justify-start   max-sm:justify-start items-center  rounded-md border-gray-300  py-1  w-full shadow-md shadow-gray-50 max-sm:w-full"> */}
          {image && (
            <a href={image}>
              <img
                src={image}
                className="w-30 h-30 shadow-inner rounded-md max-sm:w-full border border-inherit w-full max-sm:h-64"
              />
            </a>
          )}
        {/* </div> */}
        <div className="flex flex-col w-full  h-full px-1 py-1  rounded-lg shrink shadow-inner ">
          <textarea
            type="text"
            placeholder="What's on your mind ?"
            value={post}
            name="post"
            onChange={(e) => setPost(e.target.value)}
            className=" h-96 text-xl max-sm:text-xs max-sm:h-96 w-full  rounded-md shadow-inner  border bo outline-gray-200 px-2 overscroll-y-contain overflow-y-auto"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Create;
