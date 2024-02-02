import React, { useEffect, useId, useState } from "react";
import Newscard from "./Newscard";
import { FaFilter } from "react-icons/fa";
import Footer from "./Footer";

const News = () => {
  const [post, setPost] = useState([
    {
      id: 1,
      headline: "The headline of the post",
      body: "Hello world",
      url: "http://localhost:1990",
      sourceName: "The Source",
      sourceUrl: "http://localhost:1990",
      newsImg: "",
      desc: "",
      publishedAt: new Date("2023-12-25"),
    },
    {
      id: 2,
      headline: "The headline of the post",
      body: "Hello world",
      url: "http://localhost:1990",
      sourceName: "The Source",
      sourceUrl: "http://localhost:1990",
      newsImg: "",
      desc: "",
      publishedAt: new Date("2023-12-25"),
    },

    {
      id: 13,
      headline: "The headline of the post",
      body: "Hello world",
      url: "http://localhost:1990",
      sourceName: "The Source",
      sourceUrl: "http://localhost:1990",
      newsImg: "",
      desc: "",
      publishedAt: new Date("2023-12-25"),
    },
  ]);

  var [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState("");
  let [postItem, setPostItem] = useState(1);

  useEffect(() => {
    const apiKey = "67a01c9e936b42440e55e5deedd2b567";
    const category = "general";
    const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=${apiKey}`;
    const fetchNews = async () => {
      setIsLoading(true);
      setResponse("loading");
      try {
        const news = await fetch(url);
        const newsData = await news.json();
        if (!news.ok) {
          throw new Error("..news headlines engine under maintenance");
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
  let [btnSwitch, setSwitch] = useState(false);

  const loadMorePost = () => {
    if (postItem < post.length) {
      setPostItem(++postItem);
      if (postItem == post.length) {
        setSwitch(!btnSwitch);
      }
    }
  };
  const loadLessPost = () => {
    if (post.length >= postItem) {
      setPostItem(--postItem);
      if (postItem == 1) {
        setSwitch(!btnSwitch);
      }
    }
  };

  return (
    <>
      <section className="bg-white  text-black px-60 max-sm:px-0">
        <div className="flex justify-between max-sm:flex-col">
          <div className="flex-col">
            <div className="flex justify-start  items-center px-2 py-2">
              <p className="px-2 text-black"> Filter By </p>
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
          {!isLoading ? (
            <p className="text-center">{response} </p>
          ) : (
            <div className="relative">
              <div className="h-auto relative block  max-sm:px-0">
                {post.slice(0, `${postItem}`).map((obj) => (
                  <div className="block" key={obj.id}>
                    <Newscard
                      headline={obj.title}
                      desc={obj.description}
                      url={obj.url}
                      // url={obj.source.url}
                      newsImg={obj.image}
                      // body={obj.content}
                      body={obj.body}
                      // sourceName={obj.source.name}
                      sourceName={obj.url}
                      publishedAt={obj.publishedAt}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="pg-btns flex  py-1 bg-white w-full justify-center items-center max-sm:flex max-sm:justify-center max-sm:px-2 max-sm:py-2 ">
            {btnSwitch ? (
              <button
                className="bg-gray-100 outline-none text-gray-500 font-normal rounded-md px-2 py-1 max-sm:w-full"
                onClick={loadLessPost}
              >
                LOAD LESS POST{" "}
              </button>
            ) : (
              <button
                className="bg-gray-100  outline-none  font-norma  text-green-500 rounded-md px-2 py-2  max-sm:w-full"
                onClick={loadMorePost}
              >
                LOAD MORE NEWS
              </button>
            )}
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default News;
