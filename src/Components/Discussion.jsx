import React, { useState } from "react";
import Footer from "./Footer";
import Post from "./Post";
import { FaPlus } from "react-icons/fa";

const Discussion = () => {
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
            iste accusamus.`,
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
            iste accusamus totam minus recusandae.`,
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
      post: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
            reprehenderit sequi eos assumenda nemo est veritatis commodi
            doloribus dolores sint ratione, nostrum quidem, nihil blanditiis,
            iste accusamus totam minus`,
    },
    {
      id: 6,
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
  ]);

  return (
    <>
      <div className=" h-auto relative py-1">
        {/* <h1 className="text-sky-700 text-4xl px-4 max-sm:text-2xl font-bold">
          {" "}
          Discussion and Opinions.{" "}
        </h1> */}

        <div className="grid grid-cols-2 gap-1 max-sm:grid-cols-1">
          {posts.map((post) => (
            <div className="" key={post.id}>
              <Post
                id={post.id}
                posts={posts}
                likes={post.likes}
                post={post.post}
                firenumber={post.fire}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};


export default Discussion;
