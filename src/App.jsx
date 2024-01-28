import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Dashboard,
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/headlines" element={<News />} />
        <Route
          path="/discussion"
          element={<Discussion posts={allPost} updatePost={setAllPost} />}
        />
      </Routes>
    </>
  );
}

export default App;
