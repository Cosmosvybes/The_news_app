import React, { useState, useEffect, useRef } from "react";
import getPhotoUrl from "get-photo-url";
import Footer from "./Footer";
import Post from "./Post";
import gsap from "gsap";
import {
  FaBars,
  FaCaretUp,
  FaFolderPlus,
  FaGlobe,
  FaImages,
  FaLongArrowAltLeft,
  FaPencilAlt,
  FaPlus,
} from "react-icons/fa";
const Discussion = ({ posts, updatePost }) => {
  useEffect(() => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
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
      time: new Date().toLocaleTimeString(),
      postedAt: new Date().toDateString(),
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
      time: new Date().toLocaleTimeString(),
      postedAt: new Date().toDateString(),
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
      time: new Date().toLocaleTimeString(),
      postedAt: new Date().toDateString(),
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
      time: new Date().toLocaleTimeString(),
      postedAt: new Date().toDateString(),
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
      time: new Date().toLocaleTimeString(),
      postedAt: new Date().toDateString(),
      post: `How far, tell all final year student to get together at the 800 seater all`,
    },
    {
      id: 6,
      username: "Sunday",
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      time: new Date().toLocaleTimeString(),
      postedAt: new Date().toDateString(),
      fireMakers: [],
      post: `Breaking news- Mohbad is dead, story from a very genuin source made it clear that we all gong to die too.!`,
    },
  ]);
  const [showFeedBack, setSHowFeedBack] = useState(false);

  const animate = () => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  };

  const [imageUpload, setImageUpload] = useState("");

  //image upload
  const handleUpload = async (e) => {
    const imageFile = await getPhotoUrl("#imageFile"); // use the image url package here to get the image url
    setImageUpload(imageFile);
    console.log(imageFile);
  };

  //create new post or upload new post
  const [post, setPost] = useState("");

  const handlePosting = (e) => {
    let objectData = {
      id: Date.now(),
      username: "Alexandaer",
      isLiked: false,
      likers: [],
      fireMakers: [],
      postedAt: new Date().toDateString("en-US", {
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
    updatePost([...posts, objectData]);

    // const formData = new FormData();
    // formData.append("image", imageUpload);
  };

  const modal = useRef(null);
  return (
    <>
      <div className="">
        <div className="max-sm:flex grid grid-cols-1 max-sm:flex-col-reverse px-48 border border-gray-200 max-sm:px-0 ">
          {/* <div className="border rounded-md  border-gray-300 w-full h-32"></div> */}
          {allPost.map((post) => (
            <div className="" key={post.id}>
              <Post
                id={post.id}
                postedTime={post.time}
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

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Discussion;
