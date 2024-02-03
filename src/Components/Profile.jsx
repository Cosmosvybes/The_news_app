import { useState, useEffect } from "react";
import gsap from "gsap";
import Post from "./Post";
import { FaBirthdayCake } from "react-icons/fa";

const Profile = () => {
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
      title: "PLAN ALL THE WAY TO THE END",
      post: `Do not acvept the roles that society foists on you. Rmreate yourself by forging a new identity, one that commands attention and never bones the audience. Be the master ofyour own image rather than letting others define it for you.Incorporate dramatic devices into your public gestures and octiom,your power will been enhanced and your character will seem larger than life.
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
      title: "PLAN ALL THE WAY TO THE END",
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
      title: "PLAN ALL THE WAY TO THE END",
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
      title: "PLAN ALL THE WAY TO THE END",
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
      title: "PLAN ALL THE WAY TO THE END",
      post: `Never seem to be in a hurry—hurrying betrays a lack of control overyourself: and over time. Always seem patient,  as if you know that everything will come to you eventually. Become a detective ofthe right moment; out the spirit ofthe times, the trends that will carry you to power: Learn to stand back when the time is not yet ripe, and to strikefiercely when it has reachedfruition`,
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
      title: "PLAN ALL THE WAY TO THE END",
      fireMakers: [],
      post: `By acknowledging a petgr problem you give it existence and credibility. The more attention you pay an enemy, the stronger you make him; and a small mistake is often made worse and more visible when you try tofix it. It is sometimes best to leave things alone. Ifthere is something you want but cannot have, show contemptfor it.'It less interest you reveal, the more superior you seem`,
    },
  ]);
  useEffect(() => {
    setAllPost(allPost);
  }, [allPost]);

  useEffect(() => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  }, []);
  const [editform, setEditForm] = useState(false);
  const editForm = (
    <div className="flex flex-col ">
      <form action="" className="px-5 py-1 ">
        <input
          type="text"
          placeholder="Fullname"
          className="w-full px-2 py-2 border border-gray-200"
        />
        <input
          type="text"
          placeholder="Bio"
          className="w-full px-2 py-2 border border-gray-200"
        />
        <input
          type="date"
          placeholder="DOB"
          className="w-full px-2 py-2 border border-gray-200"
        />
        <div className="flex justify-between px-1 py-2">
          <button
            onClick={() => setEditForm(!editform)}
            className="bg-red-500 rounded-md px-2 py-2 text-white font-bold"
          >
            cancel
          </button>
          <button
            onClick={() => setEditForm(!editform)}
            className="bg-green-500 rounded-md px-2 py-2 text-white font-bold"
          >
            save data
          </button>
        </div>
      </form>
    </div>
  );
  return (
    <>
      <div className="flex h-screen bg-white justify-around max-sm:justify-start max-sm:flex-col py-5 max-sm:py-2 max-sm:px-0 max-sm:items-center max-sm:flex-start">
        <div className="flex flex-col">
          <input type="file" accept="*/*" id="profilePic" className="hidden" />
          <label htmlFor="profilePic">
            <div className="border border-gray-400 h-40 w-40">
              <img src="" className="w-full h-full  rounded-full" />
            </div>
          </label>
        </div>
        <div className="flex flex-col py-2">
          {/* <FaUser className="text-4xl font-bold text-sky-400 " /> */}
          <h1 className="text-4xl font-bold text-gray-700 text-left px-3">
            {"Adewale Ayomide"}
          </h1>

          {/* <FaRegAddressCard className="text-4xl font-bold text-sky-400 " /> */}

          <p className=" px-3"> Nationality - {"Nigeria"}</p>
          <div className="flex justify-start px-3 items-center ">
            <FaBirthdayCake className="" /> <p>{"Dec, 13, 1998"}</p>
          </div>
          <p className=" text-gray-700 px-3">
            Bio - {"Hey welcome to my page, i'm Alfrred chris ayo from nigeria"}
          </p>
          {editform ? (
            editForm
          ) : (
            <div className="flex justify-start px-2">
              <button
                onClick={() => setEditForm(!editform)}
                className="bg-green-500 hover:bg-sky-500 px-2 py-2 m-1 font-extrabold text-white rounded-md"
              >
                {" "}
                Edit profile
              </button>
            </div>
          )}
        </div>
        <div className=" hidden max-sm:flex  max-sm:flex-col-reverse px-72   max-sm:px-0 ">
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
      </div>
    </>
  );
};

export default Profile;
