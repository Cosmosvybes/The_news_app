import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Post from "./Post";
import { FaPlus } from "react-icons/fa";
import gsap from "gsap";
const Discussion = ({ allPost }) => {
  useEffect(() => {
    gsap.fromTo("div", { opacity: 0, scale:0}, { opacity: 1, scale:1 });
  }, []);
  const [posts, setPosts] = useState(allPost);

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
                postedAt={post.postedAt}
                posts={posts}
                likes={post.likes}
                post={post.post}
                firenumber={post.fire}
              />
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Discussion;
