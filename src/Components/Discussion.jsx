import React, { useState, useEffect, useRef } from "react";
import getPhotoUrl from "get-photo-url";
import Footer from "./Footer";
import Post from "./Post";
import gsap from "gsap";

const Discussion = ({ posts, updatePost }) => {
  // useEffect(() => {
  //   gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  // }, []);

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
      post: `Do not acvept the roles that society foists on you. Rmreate yourself by forging a new identity, one that commands attention and never bones the audience. Be the master ofyour own image rather than letting others define it for you. Ineorporate dramatic devices into your public gestures and octiom——your power will be
      enhanced and your character will seem larger than life.
      `,
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
      title:"PLAN ALL THE WAY TO THE END",
      post: `The ending is everything. Plan all the way to it, taking into account all the possible consequences, obstacles, and twists offortune that might reverse your hard work and give the glory to others. By planning to the end you will not be overwhelmed by circumstances and you will know when to stop. Gently guidefortune and help determine thefittune by thinkingfar ahead`,
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
      title:"PLAN ALL THE WAY TO THE END",
      post: `The best deceptions are the ones that seem to give the other person a choice: Your victimsfeel they are in control,but are actually yourpuppets. Give people options that some out in yourfavor whichever one they choose, Force them to make choices between the lesser oftwo evils, both ofwhich serve yourpurpose. Put them on the horns of a dilemma: They are gored wherever they turn`,
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
      title:"PLAN ALL THE WAY TO THE END",
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
         title:"PLAN ALL THE WAY TO THE END",
      post: `Never seem to be in a hurry—hurrying betrays a lack of control overyourself: and over time. Always seem patient, as ifyou know that everything will come to you eventually. Become a detective ofthe right moment;
      out the spirit ofthe times, the trends that will carry you to power: Learn to stand back when the time is not yet ripe, and to strikefiercely when it has reachedfruition`,
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
      title:"PLAN ALL THE WAY TO THE END",
      post: `By acknowledging a petgr problem you give it existence and credibility. The more attention you pay an enemy, the stronger you make him; and a small mistake is often made worse and more visible when you try tofix it.It is sometimes best to leave things alone. Ifthere is something you want but cannot have, show contemptfor it. I7te less interest you reveal, the more superior you seem`,
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
      {/* <div className="">
        <div className="rounded-sm absolute  flex justify-center items-center  w-full h-auto px-48 max-sm:px-0 m-0.5">
          <div className="flex border  border-gray-300  h-96 w-full"></div>
        </div> */}

      <div className="max-sm:flex grid grid-cols-1 py-0 max-sm:flex-col-reverse px-72   max-sm:px-0 ">
        {allPost.map((post) => (
          <div className="" key={post.id}>
            <Post
              id={post.id}
              title={post.title}
              postedTime={post.time}
              username={post.username}
              postedAt={post.postedAt}
              posts={allPost}
              likes={post.likes}
              post={
                post.post.length > 250
                  ? `${post.post.slice(0, 200)}...${"Read more"}`
                  : post.post
              }
              firenumber={post.fire}
            />
          </div>
        ))}
      </div>

      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
};

export default Discussion;
