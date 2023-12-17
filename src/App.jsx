import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Nav, Signin } from "./Index";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />} />
        <Route path="/earn" element={<Signin />} />
        <Route path="/register" element={<Nav />} />
        <Route path="/signin" element={<Nav />} />
        <Route path="/opinion" element={<Nav />} />
      </Routes>
    </>
  );
}

export default App;
