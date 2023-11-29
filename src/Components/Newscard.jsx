import { useState } from "react";
import {
  FaShareAlt,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaLink,
  FaMousePointer,
} from "react-icons/fa";
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
  const [slideNumber, setSlideNumber] = useState(1);
  const [photoPerLSide] = useState(1);
  const lastSlideIndex = slideNumber * photoPerLSide;
  const firstSlideIndex = lastSlideIndex - photoPerLSide;
  // const firstPhoto = newsImg.slice(firstSlideIndex, lastSlideIndex);
  let [count, setCount] = useState(1);

  // const navigateNextPhoto = () => {
  //   const readCount = () => {
  //     if (newsImg.length > count) {
  //       setCount((count += 1));
  //       setSlideNumber(count);
  //     }
  //   };
  //   return readCount();
  // };
  // const navigatePrevPhoto = () => {
  //   const readCount = () => {
  //     if (count > 1) {
  //       setCount((count -= 1));
  //       setSlideNumber(count);
  //     }
  //   };
  //   return readCount();
  // };
  const getTimeDifference = (timePublished) => {
    const currentTime = Date.now();
    const publishedTime = new Date(timePublished);
    const timeDiff = currentTime - publishedTime;
    const minutes = Math.floor(timeDiff / (1000 * 60));
    return minutes;
  };

  return (
    <>
      <div
        className="card h-auto w-82 flex flex-col  justify-between items-start
       border-gray-300 px-4 py-4 max-sm:px-0 
       max-sm:py-0  border-2 max-sm:items-start relative rounded-md m-1"
      >
        <div className="flex  w-auto h-92 flex-col relative ">
          <a href={newsImg}>
            <img
              src={newsImg}
              alt="image"
              className="transition duration-100  border border-inherit"
            />
          </a>

          {/* <p className="px-1 absolute right-0 font-extrabold text-sky-400 top-2 ">
            {" "}
            {slideNumber} / {newsImg.length}
          </p> */}
          {/* {firstPhoto.map((img) => (
            <div className="flex" key={img}>
              <img
                src={img}
                alt="image"
                className="transition duration-100 px-1 py-1"
              />
            </div>
          ))} */}
        </div>
        <h1 className="py-2 px-1 text-4xl font-bold text-black">{headline}</h1>
        <h3 className="py-2 px-1 font-bold text-black">{desc}</h3>

        {/* <div className="flex justify-between absolute top-28 max-sm:top-20  max-md:top-20 px-4  w-full  max-sm:px-2">
          {" "}
          <FaArrowCircleLeft
            // onClick={navigatePrevPhoto}
            className=" text-sky-700  hover: m-2 rounded-md hover:text-slate-300 text-2xl"
          />
          <FaArrowCircleRight
            // onClick={navigateNextPhoto}
            className=" text-sky-700   hover: m-2 rounded-md hover:text-slate-300 text-2xl"
          />
        </div> */}

        <p className="px-2 text-black">{body}</p>
        <div className="btns flex justify-center border-sky-300 py-1 px-2">
          <button
            onClick={() => window.open(url)}
            className="w-full py-1 text-sky-700 font-bold border border-none px-1"
          >
            Read more
          </button>{" "}
          {/* <FaMousePointer
            onClick={() => window.open(url)}
            className="border border-sky-300 text-slate-200 bg-sky-700 px-1 py-1 hover:bg-sky-600 m-2 rounded-md hover:text-slate-300 text-4xl"
          /> */}
          {/* <FaShareAlt className="border border-sky-300 text-slate-200 bg-sky-700 px-1 py-1 hover:bg-sky-600 m-2 rounded-md hover:text-slate-300 text-4xl" /> */}
        </div>
        <strong className="text-black px-2">
          Source {":"} {sourceName}{" "}
        </strong>
        <a className="text-black px-2" href={url}>
          url {":"} {url}{" "}
        </a>
        <strong className="text-black px-2">
          Published at {":"} {getTimeDifference(publishedAt)} {" minutes ago. "}
        </strong>
      </div>
    </>
  );
};

export default Newscard;
