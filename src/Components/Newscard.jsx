import { useState, useEffect } from "react";
import gsap from "gsap";
import { FaClock } from "react-icons/fa";
const Newscard = ({
  headline,
  body,
  url,
  sourceName,
  sourceUrl,
  newsImg,
  desc,
  publishedAt,
}) => {
  useEffect(() => {
    gsap.fromTo("div", { opacity: 0 }, { opacity: 1 });
  }, []);
  const [slideNumber, setSlideNumber] = useState(1);
  const [photoPerLSide] = useState(1);
  const lastSlideIndex = slideNumber * photoPerLSide;
  const firstSlideIndex = lastSlideIndex - photoPerLSide;
  let [count, setCount] = useState(1);

  const getTimeDifference = (timePublished) => {
    const currentTime = Date.now();
    const publishedTime = new Date(timePublished);
    const timeDiff = currentTime - publishedTime;
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    return hours;
  };

  return (
    <>
      <div
        className="card h-auto  flex flex-col  justify-between items-start
       border-gray-100 px-0 py-0 max-sm:px-0 
       max-sm:py-0  border-2 max-sm:items-start relative rounded-sm m-0.5"
      >
    
        <div className="flex  w-full h-92 flex-col relative ">
          <a href={newsImg}>
            <img
              src={newsImg}
              alt="image"
              className="transition duration-100  border border-inherit w-full"
            />
          </a>
        </div>
        <h1 className="py-2 px-1 text-3xl font-bold text-black">{headline}</h1>
        <h3 className="py-2 px-1 font-bold text-black">{desc}</h3>

        <p className="px-2 text-black">{body}</p>
        <div className="btns flex justify-center border-sky-300 py-1 px-2">
          <button
            onClick={() => window.open(url)}
            className="w-full py-1 text-green-600 font-bold border border-none px-1"
          >
            Read more
          </button>{" "}
        </div>
        <strong className="text-black px-2">
          Source {":"} {sourceName}{" "}
        </strong>
        <a className="text-black px-2" href={url}>
          url {":"} {url}{" "}
        </a>
        <p className="text-black px-2 inline">
          <FaClock className="inline" /> {getTimeDifference(publishedAt)}{" "}
          {"h ago. "}
        </p>
      </div>
    </>
  );
};

export default Newscard;
