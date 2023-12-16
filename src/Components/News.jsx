import React, { useEffect, useState } from "react";
import Newscard from "./Newscard";
import img_1 from "../assets/Screenshot 2023-11-11 101540.png";
import img_2 from "../assets/Screenshot 2023-11-11 143329.png";
import tier from "../assets/3-tier.png";
import { FaArrowLeft, FaArrowRight, FaClock, FaFilter } from "react-icons/fa";
const News = () => {
  const [post, setPost] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [postPerPage] = useState(1);
  // const [active, setActive] = useState(1);
  const lastPageIndex = postPerPage * pageNumber;
  const firstPageIndex = lastPageIndex - postPerPage;
  const postsToShow = post.slice(firstPageIndex, lastPageIndex + 1);
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
      <section className="bg-white">
        <h1 className="text-sky-700 px-2 text-5xl  max-sm:text-2xl block text-center">
          {" "}
          News around the Globe
        </h1>
        <div className="flex flex-col">
          <div className="flex justify-end  items-center px-2 py-2">
            <p className="px-1"> Filter News By </p>
            <FaFilter />
          </div>{" "}
          <div className="flex justify-end">
            <select className="w-auto px-2 py-1">
              <option>country</option>
              <option>language</option>
            </select>
            {!true ? (
              <select className="w-auto px-2 py-1">
                <option>united kingdom</option>
                <option>pakistan</option>
              </select>
            ) : (
              <select className="w-auto px-2">
                <option>bt</option>
                <option>pk</option>
              </select>
            )}
          </div>
        </div>

        <div className="news-container  px-2 py-2 max-md:grid-cols-2 max-sm:grid-cols-1 bg-slate-100 relative">
          {isLoading ? (
            <p className="text-center">{response} </p>
          ) : (
            <div className="relative">
              <div className="h-auto relative block">
                {post?.slice(0, 1).map((obj) => (
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

        <div className="pg-btns flex  justify-center items-center max-sm:flex max-sm:justify-center max-sm:px-2 max-sm:py-2 mx-4 my-6 ">
          <FaArrowLeft
            onClick={prevPost}
            className=" bg-slate-700 px-3 py-1 w-20 text-2xl text-white hover:bg-slate-500 hover:text-white rounded-md m-1"
          />{" "}
          <FaArrowRight
            onClick={nextPost}
            className=" bg-slate-700 px-3 py-1 w-20 text-2xl text-white hover:bg-slate-500 hover:text-white rounded-md m-1"
          />
        </div>
      </section>
    </>
  );
};

export default News;
