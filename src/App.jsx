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
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Discussion />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/post/:id" element={<Topic />} />
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
