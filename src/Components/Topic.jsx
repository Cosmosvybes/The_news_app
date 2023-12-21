import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Post from "./Post";

const Topic = ({ allPost }) => {
  const scrollTop = () => {
    return window.scrollTo({ top: 0 });
  };
  useEffect(() => {
    scrollTop();
  }, []);

  const [postDetails, setPostDetails] = useState({
    username: "",
    post: "",
    comments: [],
    likes: 0,
    fire: 0,
  });
  const [posts, setPosts] = useState(allPost);
  const { id } = useParams();

  const getPost = (id) => {
    let post = posts.find((post) => post.id == id);
    return post;
    // setPostDetails({ username: getPost.post });
  };
  useEffect(() => {
    const post = getPost(id);
    setPostDetails({ post: post?.post });
  }, []);

  return (
    <>
      <div className="">
        <div className="relative py-2 bg-slate-100 px-3 flex flex-start items-center ">
          <FaArrowLeft
            onClick={() => history.back()}
            className="text-gray-400 text-2xl "
          />
          <h1 className="text-sky-500 text-2xl px-2 font-bold">Post</h1>
        </div>
        <div className="bg-slate-100 flex justify-center">
          <div className="flex w-full  h-auto max-sm:flex-col">
            <Post
              commentOpen={true}
              postedAt={getPost(id).postedAt}
              post={postDetails.post}
              firenumber={postDetails.fire}
              likes={postDetails.likes}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Topic;
