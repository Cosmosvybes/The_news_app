import { useState } from "react";
import { FaImage } from "react-icons/fa";

const Create = () => {
  const [post, setPost] = useState("");
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    let imageFile = e.target.files[0];
    let imageUrl = URL.createObjectURL(imageFile);

    // setImage(imageUrl);
    let imageData = { url: imageUrl };
    setImages([...images, imageData]);
    const formData = new FormData();
    formData.append("image", imageFile, imageFile.name);
    fetch("/api/create", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
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
    console.log(formData);
  };
  const [image, setImage] = useState("");

  return (
    <>
      <div className="flex h-auto max-sm:h-screen justify-start flex-col  px-52 max-sm:px-2 max-sm:py-0">
        <div className="flex justify-end gap-1 items-center py-0 px-1 max-sm:py-2">
          <form encType="multipart/form-data">
            <input
              type="file"
              id="picture"
              className="hidden"
              onChange={handleImageUpload}
            />
          </form>

          <label htmlFor="picture">
            <FaImage className="text-6xl w-10 text-green-500 shadow-md shadow-gray-50" />
          </label>
          <button
            className="border border-green-500  rounded-lg text-white w-24 font-extrabold  shadow-md shadow-gray-400  bg-green-500 px-3 py-1"
            // onClick={handlePosting}
          >
            Post
          </button>
        </div>
        <div className="grid grid-cols-2 justify-center items-center px-60 py-1 max-sm:px-1 w-full">
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
        <div className="flex flex-col w-full  h-full px-1 py-1">
          <textarea
            type="text"
            placeholder="What's on your mind ?"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className=" h-96 text-xl max-sm:text-ms max-sm:h-96 w-full  rounded-md shadow-md shadow-gray-200  outline-gray-200 px-2 overscroll-y-contain overflow-y-auto"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Create;
