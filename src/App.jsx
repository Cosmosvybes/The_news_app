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
} from "./Index";
import { useState } from "react";
function App() {
  const [allPost, setAllPost] = useState([
    {
      id: 1,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-21 05:41:00"),
      post: `Hello capracks, tire for nigeria mateer , i no fit lie, na wetin fela and china talk, still dey happen`,
    },
    {
      id: 2,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-21 06:00:00"),
      post: `Hey bobo, i taya for this country`,
    },
    {
      id: 3,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-20 06:00:00"),
      post: `Idan, don post, make we see the number of poeple wey go like am `,
    },
    {
      id: 4,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-15 06:00:00"),
      post: `Agbafian boys, Everyone is gonna be alright, trust`,
    },
    {
      id: 5,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      postedAt: new Date("2023-12-18 06:00:00"),
      post: `How far, tell all final year student to get together at the 800 seater all`,
    },
    {
      id: 6,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      postedAt: new Date("2023-12-19, 06:00:00"),
      fireMakers: [],
      post: `Breaking news- Mohbad is dead, story from a very genuin source made it clear that we all gong to die too.!`,
    },
  ]);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Discussion allPost={allPost} />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/post/:id" element={<Topic allPost={allPost} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/headlines" element={<News />} />
        <Route path="/discussion" element={<Discussion />} />
      </Routes>
    </>
  );
}

export default App;
