import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Create,
  Discussion,
  Earn,
  Footer,
  Nav,
  News,
  Signin,
  Signup,
  Topic,
  Profile,
} from "./Index";
import { useEffect, useState } from "react";

function App() {
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
  return (
    <>
      <Nav allPost={allPost} />
      <Routes>
        <Route path="/" element={<Discussion allPost={allPost} />} />
        <Route path="/" element={<Discussion allPost={allPost} />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post/:id" element={<Topic allPost={allPost} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/headlines" element={<News />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/discussion"
          element={<Discussion posts={allPost} updatePost={setAllPost} />}
        />
      </Routes>
    </>
  );
}

export default App;
