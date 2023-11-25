import { useState } from "react";
import {
  FaShareAlt,
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaLink,
} from "react-icons/fa";
const Newscard = ({
  headline,
  body,
  url,
  sourceName,
  sourceUrl,
  newsImg,
  publishedAt,
}) => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [photoPerLSide] = useState(1);
  const lastSlideIndex = slideNumber * photoPerLSide;
  const firstSlideIndex = lastSlideIndex - photoPerLSide;
  const firstPhoto = newsImg.slice(firstSlideIndex, lastSlideIndex);
  let [count, setCount] = useState(1);

  const navigateNextPhoto = () => {
    const readCount = () => {
      if (newsImg.length > count) {
        setCount((count += 1));
        setSlideNumber(count);
      }
    };
    return readCount();
  };
  const navigatePrevPhoto = () => {
    const readCount = () => {
      if (count > 1) {
        setCount((count -= 1));
        setSlideNumber(count);
      }
    };
    return readCount();
  };
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
       border border-slate-400 px-4 py-4 max-sm:px-0 
       max-sm:py-0   max-sm:items-start relative rounded-md "
      >
        <div className="flex  w-auto h-auto flex-col relative ">
          <p className="px-1 absolute right-0 font-extrabold text-sky-400 top-2 ">
            {" "}
            {slideNumber} / {newsImg.length}
          </p>
          {firstPhoto.map((img) => (
            <div className="flex" key={img}>
              <img
                src={img}
                alt="image"
                className="transition duration-100 px-1 py-1"
              />
            </div>
          ))}
        </div>
        <h1 className="py-2 px-1 text-2xl font-bold text-sky-700">
          {headline}
        </h1>
        <h3 className="py-2 px-1 font-bold text-slate-600">
          Desc: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sapiente!
        </h3>
        <div className="flex justify-between absolute top-28 max-sm:top-20  max-md:top-20 px-4  w-full  max-sm:px-2">
          {" "}
          <FaArrowCircleLeft
            onClick={navigatePrevPhoto}
            className="border border-sky-300 text-sky-700  px-1 py-1 hover: m-2 rounded-md hover:text-slate-300 text-4xl"
          />
          <FaArrowCircleRight
            onClick={navigateNextPhoto}
            className="border border-sky-300 text-sky-700  px-1 py-1 hover: m-2 rounded-md hover:text-slate-300 text-4xl"
          />
        </div>

        <p className="px-2 text-slate-950">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          labore ratione eius ipsa asperiores, blanditiis quas amet sequi velit
          libero pariatur ad cum, vitae in sed voluptate. Modi, possimus qui?
        </p>
        <strong className="text-slate-700 px-2">
          Source {":"} {sourceName}{" "}
        </strong>
        <strong className="text-slate-700 px-2">
          Published at {":"} {getTimeDifference(publishedAt)} {" minutes ago. "}
        </strong>
        <div className="btns flex justify-start border-sky-300 px-0 py-1">
          {" "}
          <FaLink className="border border-sky-300 text-slate-700 bg-sky-500 px-1 py-1 hover:bg-sky-500 m-2 rounded-md hover:text-slate-300 text-4xl text-sl" />
          <FaShareAlt className="border border-sky-300 text-slate-700 bg-sky-500 px-1 py-1 hover:bg-sky-500 m-2 rounded-md hover:text-slate-300 text-4xl" />
        </div>
      </div>
    </>
  );
};

export default Newscard;
