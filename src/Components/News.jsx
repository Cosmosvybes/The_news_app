import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Newscard from "./Newscard";

import { FaArrowLeft, FaArrowRight, FaClock, FaFilter } from "react-icons/fa";
import Footer from "./Footer";
const News = () => {
  const [post, setPost] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [postPerPage] = useState(4);
  // const [active, setActive] = useState(1);
  const lastPageIndex = postPerPage * pageNumber;
  const firstPageIndex = lastPageIndex - postPerPage;
  const postsToShow = post.slice(firstPageIndex + 1, lastPageIndex + 1);
  const [response, setResponse] = useState("");
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
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`;
    const fetchNews = async () => {
      setIsLoading(true);
      setResponse("loading");
      try {
        const news = await fetch(url);
        const newsData = await news.json();
        if (!news.ok) {
          throw new Error("server error, failed to get news headlines");
        }
        setPost(newsData.articles);
        setIsLoading(false);
      } catch (error) {
        setResponse(error.message);
        // console.log(error.message);
      }
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
  // console.log(postsToShow.slice(0,1))

  return (
    <>
      <section className="bg-white ">
        <div className="flex justify-between max-sm:flex-col">
          <div className="flex-col">
            <div className="flex justify-start  items-center px-2 py-2">
              <p className="px-2"> Filter By </p>
              <FaFilter className="text-gray-400" />
            </div>
            <div className="flex max-sm:flex-col justify-start">
              <div className="flex justify-start m-1 px-3">
                <select className="border border-gray-300 px-3 py-1">
                  <option>country</option>
                  <option>language</option>
                </select>
                {!true ? (
                  <select className="border border-gray-300 px-2 py-1">
                    <option>united kingdom</option>
                    <option>pakistan</option>
                  </select>
                ) : (
                  <select className="border border-gray-300 px-2">
                    <option>bt</option>
                    <option>pk</option>
                  </select>
                )}
              </div>
            </div>
          </div>

          <div className="flex-start px-2 m-1">
            <input
              type="text"
              placeholder="search for news"
              className="w-44 max-sm:w-full max-sm:py-1 px-1 border-2 m-0.5 border-gray-200 "
            />
            <input
              type="submit"
              className="w-28 max-sm:inline max-sm:w-full border-2 m-0.5 hover:bg-green-600 max-sm:py-2 bg-green-500 text-white font-bold "
            />
          </div>
        </div>

        <div className="news-container  px-2 py-2 max-md:grid-cols-2 max-sm:grid-cols-1 bg-white relative">
          {isLoading ? (
            <p className="text-center">{response} </p>
          ) : (
            <div className="relative">
              <div className="h-auto relative block">
                {post.slice(0, 1).map((obj) => (
                  <div className="block" key={obj.title}>
                    <Newscard
                      headline={obj.title}
                      desc={obj.description}
                      url={obj.source.url}
                      newsImg={obj.image}
                      body={obj.content}
                      sourceName={obj.source.name}
                      publishedAt={obj.publishedAt}
                    />
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
                {postsToShow?.map((news) => (
                  <div
                    className="div-container flex justify-around "
                    key={news.title}
                  >
                    <Newscard
                      desc={news.description}
                      body={news.content}
                      url={news.source.url}
                      newsImg={news.image}
                      headline={news.title}
                      sourceName={news.source.name}
                      publishedAt={news.publishedAt}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="pg-btns flex  bg-white w-full justify-center items-center max-sm:flex max-sm:justify-center max-sm:px-2 max-sm:py-2 ">
          <FaArrowLeft
            onClick={prevPost}
            className=" border-4 rounded-md border-gray-300 px-1 text-gray-500 py-2 w-20 text-4xl hover:bg-gray-300 hover:text-white  m-1"
          />{" "}
          <FaArrowRight
            onClick={nextPost}
            className=" border-4 rounded-md border-gray-300 px-1 text-gray-500 py-2 w-20 text-4xl hover:bg-gray-300 hover:text-white  m-1"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default News;
