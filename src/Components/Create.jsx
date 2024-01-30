import { useState } from "react";
import { FaImage, FaLocationArrow, FaSearchLocation } from "react-icons/fa";

const Create = () => {
  const [post, setPost] = useState("");
  const [images, setImages] = useState([]);

  const handlePosting = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(post));
  };

  const handleImageUpload = (e) => {
    let imageFile = e.target.files[0];
    let imageUrl = URL.createObjectURL(imageFile);
    setImage(imageUrl);
    let imageData = { url: imageUrl };
    setImages([...images, imageData]);
    // const formData = new FormData();
    // formData.append("image", imageFile);

    // console.log(images);
  };
  const [image, setImage] = useState("");
  return (
    <>
      <div className="grid grid-cols-3  justify-start px-60 py-2 max-sm:px-2 w-full">
        {/* <img src={image} className="w-30 h-30 rounded-md max-sm:w-32 max-sm:h-32"  /> */}
        {images &&
          images.map((image) => (
            <div className="relative" key={image.url}>
              <img
                src={image.url}
                className="w-30 h-30 rounded-sm max-sm:w-32 border border-gray-50 max-sm:h-32"
              />
            </div>
          ))}
      </div>

      <div className="flex h-auto max-sm:h-screen justify-start flex-col  px-52 max-sm:px-2 max-sm:py-2">
        <div className="flex justify-start gap-1 items-center py-0 px-1 max-sm:py-10">
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
        <div className="flex flex-col w-full  h-full px-1 py-1">
          <textarea
            type="text"
            placeholder="What's on your mind ?"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className=" h-96 text-xl max-sm:text-ms max-sm:h-full w-full  rounded-md shadow-md shadow-gray-200  outline-gray-200 px-2 overscroll-y-contain overflow-y-auto"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Create;
