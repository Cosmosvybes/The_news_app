import React, { useState } from "react";
import Newscard from "./Newscard";
import img_1 from "../assets/Screenshot 2023-11-11 101540.png";
import img_2 from "../assets/Screenshot 2023-11-11 143329.png";
import tier from "../assets/3-tier.png";
import {
  FaArrowLeft,
  FaArrowRight,

} from "react-icons/fa";
const News = () => {
  const [post, setPost] = useState([
    {
      id: 1,
      newsImg: [img_2, img_1, tier],
      headline: "Covid news",
      publishedAt: "2023-11-25 10:03:00",
    },
    {
      id: 2,
      newsImg: [img_2, img_1],
      headline: "Employemnt news",
      publishedAt: "2023-11-25 12:03:00",
    },
    {
      id: 3,
      newsImg: [img_2, img_1],
      headline: "Election",
      publishedAt: "2023-11-25 11:03:00",
    },
    {
      id: 4,
      newsImg: [img_2, img_1],
      headline: "Tsunami news",
      publishedAt: "2023-11-25 15:03:12",
    },
    {
      id: 6,
      newsImg: [img_2, img_1],
      headline: "News Around the world",
      publishedAt: "2023-11-25 14:03:12",
    },
    {
      id: 7,
      newsImg: [img_2, img_1],
      headline: "Keke napep",
      publishedAt: "2023-11-25 14:50:12",
    },
    {
      id: 19,
      newsImg: [img_2, img_1],
      headline: "News for the locals",
      publishedAt: "2023-11-25 11:43:00",
    },
    {
      id: 134,
      newsImg: [img_2, img_1],
      headline: "The news",
      publishedAt: "2023-11-25 12:01:00",
    },
    {
      id: 37,
      newsImg: [img_2, img_1],
      headline: "Everywhere Good",
      publishedAt: "2023-11-25 15:33:00",
    },
    {
      id: 132,
      newsImg: [img_2, img_1],
      headline: "Shocking news",
      publishedAt: "2023-11-25 15:03:00",
    },
  ]);

  const [pageNumber, setPageNumber] = useState(1);
  const [postPerPage] = useState(1);
  // const [active, setActive] = useState(1);
  const lastPageIndex = postPerPage * pageNumber;
  const firstPageIndex = lastPageIndex - postPerPage;
  const postsToShow = post.reverse().slice(firstPageIndex, lastPageIndex + 2);
  // const [publishingTime, setPublishingTime]= useState("")
  // const pageNumbers = [];
  // for (let i = 1; i < Math.ceil(post.length / postPerPage); i++) {
  //   pageNumbers.push(i);
  // }

  const paginate = (number) => {
    setPageNumber(number);
    setActive(number);
  };
  let [count, setCount] = useState(1);

  const nextPost = () => {
    if (post.length > count) {
      setCount((count += 1));
      setPageNumber(count);
    }
  };
  const prevPost = () => {
    if (count > 1) {
      setCount((count -= 1));
      setPageNumber(count);
    }
  };

  return (
    <>
      <section className="bg-slate-200">
        <h1 className="text-sky-400 text-center text-4xl max-sm:text-2xl  font-bold">
          {" "}
          News around the world
        </h1>
        <div className="news-container grid grid-cols-3 gap-2  px-2 py-2 max-md:grid-cols-2 max-sm:grid-cols-1 bg-slate-200 relative">
          {postsToShow.map((news) => (
            <div className="div-container flex justify-around" key={news.id}>
              <Newscard
                body={news}
                newsImg={news.newsImg}
                headline={news.headline}
                sourceName={"Phone Arena"}
                publishedAt={news.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="pg-btns flex  justify-center items-center max-sm:flex max-sm:justify-center max-sm:px-2 max-sm:py-2 mx-4 my-6 ">
          <FaArrowLeft
            onClick={prevPost}
            className="border border-sky-600 px-3 py-1 w-20 text-4xl hover:bg-sky-500 hover:text-white rounded-md m-1"
          />{" "}
          <FaArrowRight
            onClick={nextPost}
            className="border border-sky-600 px-3 py-1 w-20 text-4xl hover:bg-sky-500 hover:text-white rounded-md m-1"
          />
          {/* {pageNumbers.map((number) => (
            <div className="px-0" key={number}>
              <button
                onClick={() => paginate(number)}
                style={{ background: number == active && "skyblue" }}
                className="border border-sky-600 px-1 py-1 w-10 hover:bg-sky-500 hover:text-white rounded-md m-1"
              >
                {number}
              </button>
            </div>
          ))} */}
        </div>
      </section>
    </>
  );
};

export default News;
