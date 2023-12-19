import React, { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Post from "./Post";

const Topic = () => {
  const [postDetails, setPostDetails] = useState({
    username: "",
    post: "",
    comments: [],
    likes: 0,
    fire: 0,
  });
  const [posts, setPosts] = useState([
    {
      id: 1,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      post: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            reprehenderit sequi eos assumenda nemo est veritatis commodi
            doloribus dolores sint ratione, nostrum quidem, nihil blanditiis,
            iste accusamus totam minus recusandae.`,
    },
    {
      id: 2,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      post: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            reprehenderit sequi eos assumenda nemo est veritatis commodi
            doloribus dolores sint ratione, nostrum quidem, nihil blanditiis,
            iste accus.`,
    },
    {
      id: 3,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      post: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            reprehenderit sequi eos assumenda nemo est veritatis commodi
            doloribus dolores sint ratione, nostrum quidem, nihil blanditiis,
            iste`,
    },
    {
      id: 4,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      post: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            reprehenderit sequi eos assumenda nemo est veritatis commodi
            doloribus dolores sint ratione, nostrum quidem, nihil blanditiis,
            iste accusamus totam minus recusandae.`,
    },
    {
      id: 5,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      post: `Loripsum dolor sit amet, consectetur adipisicing elit. Velit
            reprehenderit sequi eos assumenda nemo est veritatis commodi
            doloribus dolores sint ratione, nostrum quidem, nihil blanditiis,
            iste accusame.`,
    },
    {
      id: 6,
      isLiked: false,
      likers: [],
      likes: 0,
      fire: 0,
      fireMakers: [],
      post: `Lorem ipsum dolorVelit
            reprehenderit sequi eos assumenda nemo est veritatis commodi
            doloribus dolores sint ratione, nostrum quidem, nihil blanditiis,
            iste accusamus totam minus recusandae.`,
    },
  ]);
  const { id } = useParams();

  const getPost = (id) => {
    let getPost = posts.find((post) => post.id == id);
    return getPost;
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
          <FaArrowAltCircleLeft
            onClick={() => history.back()}
            className="text-sky-500 text-2xl"
          />
          <h1 className="text-sky-500 text-2xl px-2">Post</h1>
        </div>
        <div className="bg-slate-100 flex justify-center">
          <div className="flex w-full  h-auto max-sm:flex-col">
            <Post
              commentOpen={true}
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
