import { useEffect, useState } from "react";
import {
  FaFire,
  FaAtom,
  FaClock,
  FaComments,
  FaTag,
  FaHeart,
  FaLongArrowAltLeft,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Post from "./Post";

const Topic = ({ allPost }) => {
  const { id } = useParams();
  const scrollTop = () => {
    return window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    const post = getPost(id);
    setPost(post);
    // setTime(handleTime(post.postedAt));
    scrollTop();
  }, []);

  const [fireNumber, setFireNumber] = useState(0);
  const [numberOfLikes, setLikes] = useState(0);
  const [posts] = useState(allPost);
  const [singlePost, setPost] = useState({});
  const [time, setTime] = useState("");

  const getPost = (id) => {
    let post = posts.find((post) => post.id == id);
    return post;
  };

  return (
    <>
      <div className="relative py-2 px-52 max-sm:px-2 flex flex-start items-center ">
        <FaLongArrowAltLeft
          onClick={() => history.back()}
          className="text-gray-400 text-2xl "
        />
        <h1 className="text-sky-500 text-2xl px-2 font-bold">Post</h1>
      </div>
      <div className="relative px-52 max-sm:px-0">
      <Post
        username={singlePost.username}
        commentOpen={true}
        post={singlePost.post}
        fire={singlePost.fire}
        postedTime={singlePost.time}
        postedAt={singlePost.postedAt}
        likes={singlePost.likes}
      />
      </div>
     
       {/* <Footer /> */}
    </>
  );
};

export default Topic;
