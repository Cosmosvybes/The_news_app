import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Discussion, Earn, Footer, Nav, News, Signin, Signup } from "./Index";
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/dashboard" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/headlines" element={<News />} />
        <Route path="/discussion" element={<Discussion />} />
      </Routes>
    </>
  );
}

export default App;
