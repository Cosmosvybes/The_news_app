import React, { useEffect, useState } from "react";
import Newscard from "./Newscard";
import img_1 from "../assets/Screenshot 2023-11-11 101540.png";
import img_2 from "../assets/Screenshot 2023-11-11 143329.png";
import tier from "../assets/3-tier.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const News = () => {
  const [post, setPost] = useState([
    {
      id: 1,
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "Covid news",
      publishedAt: "2023-11-25 10:03:00",
      title: "Web 3",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 2,
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "Employemnt news",
      publishedAt: "2023-11-25 12:03:00",
      title: "Web 2",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 3,
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "Election",
      publishedAt: "2023-11-25 11:03:00",
      title: "Web 1",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 4,
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "Tsunami news",
      publishedAt: "2023-11-25 15:03:12",
      title: "Web 5",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 6,
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "News Around the world",
      publishedAt: "2023-11-25 14:03:12",
      title: "Web 3",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 7,
      newsImg: img_1,
      headline: "Keke napep",
      publishedAt: "2023-11-25 14:50:12",
      title: "Web 9",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 19,
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "News for the locals",
      publishedAt: "2023-11-25 11:43:00",
      title: "Web 11",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 134,
      title: "Web 23",
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "The news",
      publishedAt: "2023-11-25 12:01:00",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 37,
      title: "Web i33",
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "Everywhere Good",
      publishedAt: "2023-11-25 15:33:00",
      source: { url: "#", name: "Phone Arena" },
    },
    {
      id: 132,
      title: "Web 134",
      newsImg: img_2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quo sit amet earum velit eligendi quia cupiditate sint, pariatur quis sapiente! Deleniti illo ducimus alias fugiat quibusdam? Explicabo, iusto nulla!",
      headline: "Shocking news",
      publishedAt: "2023-11-25 15:03:00",
      source: { url: "#", name: "Phone Arena" },
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

  // const paginate = (number) => {
  //   setPageNumber(number);
  //   setActive(number);
  // };
  const apiKey = "67a01c9e936b42440e55e5deedd2b567";
  const category = "general";
  useEffect(() => {
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=uk&max=10&apikey=${apiKey}`;
    const fetchNews = async () => {
      const news = await fetch(url);
      const newsData = await news.json();
      // setPost(newsData.articles);
      // console.log(newsData.articles);
    };
    fetchNews();
  }, []);

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
        <h1 className="text-sky-700 text-left px-2 text-4xl max-sm:text-2xl  font-bold">
          {" "}
          News around the world
        </h1>
        <div className="news-container grid grid-cols-3 gap-2  px-2 py-2 max-md:grid-cols-2 max-sm:grid-cols-1 bg-slate-200 relative">
          {postsToShow.map((news) => (
            <div className="div-container flex justify-around" key={news.id}>
              <Newscard
                body={news.content}
                url={news.source.url}
                newsImg={news.newsImg}
                headline={news.title}
                sourceName={news.source.url}
                publishedAt={news.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="pg-btns flex  justify-center items-center max-sm:flex max-sm:justify-center max-sm:px-2 max-sm:py-2 mx-4 my-6 ">
          <FaArrowLeft
            onClick={prevPost}
            className="border border-sky-600 bg-slate-700 px-3 py-1 w-20 text-4xl text-white hover:bg-slate-500 hover:text-white rounded-md m-1"
          />{" "}
          <FaArrowRight
            onClick={nextPost}
            className="border border-sky-600 bg-slate-700 px-3 py-1 w-20 text-4xl text-white hover:bg-slate-500 hover:text-white rounded-md m-1"
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
