import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import Post from "./Post";
import gsap from "gsap";
import {
  FaBars,
  FaCaretUp,
  FaImages,
  FaLongArrowAltLeft,
  FaPencilAlt,
} from "react-icons/fa";
const Discussion = () => {
  useEffect(() => {
    gsap.fromTo("div", { opacity: 0, scale: 0 }, { opacity: 1, scale: 1 });
  }, []);

  let [allPost, setAllPost] = useState([
    {
      id: 1,
      username: "Cosmos",
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-21 06:24:00"),
      post: `Hello capracks, tire for nigeria mateer , i no fit lie, na wetin fela and china talk, still dey happen`,
    },
    {
      id: 2,
      username: "Chris",
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-22 17:00:00"),
      post: `Hey bobo, i taya for this country`,
    },
    {
      id: 3,
      username: "Alfred joy",
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-22 06:00:00"),
      post: `Idan, don post, make we see the number of poeple wey go like am `,
    },
    {
      id: 4,
      username: "Feronmi",
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-22 06:00:00"),
      post: `Agbafian boys, Everyone is gonna be alright, trust`,
    },
    {
      id: 5,
      username: "Daemon",
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-22 06:00:00"),
      post: `How far, tell all final year student to get together at the 800 seater all`,
    },
    {
      id: 6,
      username: "Sunday",
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      postedAt: new Date("2023-12-23, 09:00:00"),
      fireMakers: [],
      post: `Breaking news- Mohbad is dead, story from a very genuin source made it clear that we all gong to die too.!`,
    },
  ]);
  const [showFeedBack, setSHowFeedBack] = useState(false);
  const animate = () => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  };

  const [imageUpload, setImageUpload] = useState(undefined);
  //image upload
  const handleUpload = async (e) => {
    // await imageUrl("#image");// use the image url package here to getb the image url
    setImageUpload(e.target.files[0].name);
  };

  //create new post or upload new post
  const [post, setPost] = useState("");
  const handlePosting = (e) => {
    let objectData = {
      id: Date.now(),
      username: "Username",
      isLiked: false,
      likers: [],
      fireMakers: [],
      postedAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }),
      post,
      likes: 0,
      fire: 0,
    };
    setAllPost([...allPost, objectData]);

    // const formData = new FormData();
    // formData.append("image", imageUpload);
  };

  const modal = useRef(null);
  return (
    <>
      <div className="max-sm:flex grid grid-cols-2 max-sm:flex-col-reverse">
        {allPost.map((post) => (
          <div className="" key={post.id}>
            <Post
              id={post.id}
              username={post.username}
              postedAt={post.postedAt}
              posts={allPost}
              likes={post.likes}
              post={post.post}
              firenumber={post.fire}
            />
          </div>
        ))}
      </div>

      {showFeedBack && (
        <div
          className="left-side z-10 sticky right-3 h-36 w-auto 
         flex justify-start flex-col items-center py-2  bottom-0 max-sm:bottom-64"
        >
          <div className="flex w-full px-44 max-sm:w-full max-sm:px-2">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10 "
              className="h-52 w-full px-3 py-2 text-sky-600 outline outline-sky-600 bg-gray-200  rounded-md"
              placeholder="Write your mind..."
              style={{
                height: "auto",
                // padding: "0.5rem 1rem",
                marginBottom: "1rem",
              }}
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between max-sm:px-0 max-md:px-20  h-10  m-1">
            <input
              type="file"
              id="imageFile"
              className="hidden"
              accept="*/*"
              onChange={handleUpload}
            />
            <label htmlFor="imageFile">
              {" "}
              <FaImages className="text-sky-500   text-4xl m-0.5" />{" "}
            </label>

            <button
              onClick={handlePosting}
              className="bg-sky-600  rounded-md border-2 w-36 py-2 px-1   border-white font-extrabold text-white"
            >
              {" "}
              Post it
            </button>
          </div>
          <div className="absolute max-sm:top-1 flex justify-start items-center  rounded-lg max-sm:right-5   border-2 border-sky-400 bg-sky-600">
            <p className="text-white text-sm font-bold">cancel</p>{" "}
            <FaLongArrowAltLeft
              onClick={() => {
                gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
                setSHowFeedBack(!showFeedBack);
                setImageUpload(undefined);
              }}
              className="text-white text-3xl"
            />
          </div>
        </div>
      )}
      <div
        className="left-side sticky right-0 h-auto w-auto 
         flex justify-end items-center py-2 bottom-64"
      >
        {!showFeedBack && (
          <button
            onClick={() => {
              animate();
              return setSHowFeedBack(!showFeedBack);
            }}
            className=" rounded-md h-18 text-sky-500  px-2 py-1"
          >
            <FaPencilAlt className="text-sky-500 text-4xl" />
          </button>
        )}
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default Discussion;
